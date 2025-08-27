import { createClient } from "@supabase/supabase-js";

// Database types
export interface CareerApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolio?: string;
  cover_letter: string;
  cv_file_name?: string;
  cv_file_url?: string;
  cv_file_size?: number;
  cv_file_type?: string;
  status: "pending" | "reviewing" | "interview" | "accepted" | "rejected";
  applied_at: string;
  reviewed_at?: string;
  reviewed_by?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ApplicationLog {
  id: string;
  application_id: string;
  action: string;
  old_status?: string;
  new_status?: string;
  performed_by?: string;
  notes?: string;
  created_at: string;
}

export interface ApplicationStatistics {
  position: string;
  total_applications: number;
  pending_count: number;
  reviewing_count: number;
  interview_count: number;
  accepted_count: number;
  rejected_count: number;
  first_application: string;
  latest_application: string;
}

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug logging
console.log("=== Supabase Configuration Debug ===");
console.log("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl);
console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseKey ? "SET" : "NOT SET");
console.log("URL check:", supabaseUrl !== "your_supabase_url_here");
console.log("KEY check:", supabaseKey !== "your_supabase_anon_key_here");

// Check if we have valid Supabase configuration
const hasValidSupabaseConfig =
  supabaseUrl &&
  supabaseKey &&
  supabaseUrl !== "your_supabase_url_here" &&
  supabaseKey !== "your_supabase_anon_key_here";

console.log("hasValidSupabaseConfig:", hasValidSupabaseConfig);

if (!hasValidSupabaseConfig) {
  console.warn(
    "Supabase configuration not found or invalid. Database operations will be disabled."
  );
} else {
  console.log("✅ Supabase configuration is valid!");
}

export const supabase = hasValidSupabaseConfig
  ? createClient(supabaseUrl!, supabaseKey!)
  : null;

// Helper function to check if database is available
export const isDatabaseAvailable = (): boolean => {
  return supabase !== null;
};

// Database operations
export class CareerApplicationDB {
  // Create a new career application
  static async create(
    applicationData: Omit<
      CareerApplication,
      "id" | "created_at" | "updated_at" | "applied_at" | "status"
    >
  ): Promise<{ data: CareerApplication | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("career_applications")
        .insert({
          ...applicationData,
          status: "pending",
          applied_at: new Date().toISOString(),
        })
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error("Error creating career application:", error);
      return { data: null, error };
    }
  }

  // Get all career applications with optional filtering
  static async getAll(filters?: {
    position?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    data: CareerApplication[] | null;
    error: any;
    count?: number;
  }> {
    if (!supabase) {
      return {
        data: null,
        error: new Error("Database not available"),
        count: 0,
      };
    }

    try {
      let query = supabase
        .from("career_applications")
        .select("*", { count: "exact" })
        .order("applied_at", { ascending: false });

      if (filters?.position) {
        query = query.eq("position", filters.position);
      }

      if (filters?.status) {
        query = query.eq("status", filters.status);
      }

      if (filters?.limit) {
        query = query.limit(filters.limit);
      }

      if (filters?.offset) {
        query = query.range(
          filters.offset,
          filters.offset + (filters.limit || 10) - 1
        );
      }

      const { data, error, count } = await query;

      return { data, error, count: count || 0 };
    } catch (error) {
      console.error("Error fetching career applications:", error);
      return { data: null, error, count: 0 };
    }
  }

  // Get a single career application by ID
  static async getById(
    id: string
  ): Promise<{ data: CareerApplication | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("career_applications")
        .select("*")
        .eq("id", id)
        .single();

      return { data, error };
    } catch (error) {
      console.error("Error fetching career application:", error);
      return { data: null, error };
    }
  }

  // Update career application status
  static async updateStatus(
    id: string,
    status: CareerApplication["status"],
    reviewedBy?: string,
    notes?: string
  ): Promise<{ data: CareerApplication | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const updateData: any = {
        status,
        reviewed_at: new Date().toISOString(),
      };

      if (reviewedBy) {
        updateData.reviewed_by = reviewedBy;
      }

      if (notes) {
        updateData.notes = notes;
      }

      const { data, error } = await supabase
        .from("career_applications")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error("Error updating career application status:", error);
      return { data: null, error };
    }
  }

  // Delete a career application
  static async delete(id: string): Promise<{ error: any }> {
    if (!supabase) {
      return { error: new Error("Database not available") };
    }

    try {
      const { error } = await supabase
        .from("career_applications")
        .delete()
        .eq("id", id);

      return { error };
    } catch (error) {
      console.error("Error deleting career application:", error);
      return { error };
    }
  }

  // Get application statistics
  static async getStatistics(): Promise<{
    data: ApplicationStatistics[] | null;
    error: any;
  }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("application_statistics")
        .select("*")
        .order("total_applications", { ascending: false });

      return { data, error };
    } catch (error) {
      console.error("Error fetching application statistics:", error);
      return { data: null, error };
    }
  }

  // Search applications by email or name
  static async search(
    query: string
  ): Promise<{ data: CareerApplication[] | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("career_applications")
        .select("*")
        .or(`full_name.ilike.%${query}%,email.ilike.%${query}%`)
        .order("applied_at", { ascending: false });

      return { data, error };
    } catch (error) {
      console.error("Error searching career applications:", error);
      return { data: null, error };
    }
  }

  // Update file information for an application
  static async updateFileInfo(
    id: string,
    fileInfo: {
      cv_file_url?: string;
      cv_file_size?: number;
      cv_file_type?: string;
      cv_file_path?: string;
    }
  ): Promise<{ data: CareerApplication | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("career_applications")
        .update({
          ...fileInfo,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error("Error updating file info:", error);
      return { data: null, error };
    }
  }
}

// Application logs operations
export class ApplicationLogDB {
  // Get logs for a specific application
  static async getByApplicationId(
    applicationId: string
  ): Promise<{ data: ApplicationLog[] | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("application_logs")
        .select("*")
        .eq("application_id", applicationId)
        .order("created_at", { ascending: false });

      return { data, error };
    } catch (error) {
      console.error("Error fetching application logs:", error);
      return { data: null, error };
    }
  }

  // Create a new log entry
  static async create(
    logData: Omit<ApplicationLog, "id" | "created_at">
  ): Promise<{ data: ApplicationLog | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const { data, error } = await supabase
        .from("application_logs")
        .insert(logData)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      console.error("Error creating application log:", error);
      return { data: null, error };
    }
  }
}

// File upload helper for CV files
export class FileUploadDB {
  // Upload CV file to Supabase Storage
  static async uploadCV(
    file: File,
    applicationId: string
  ): Promise<{ data: { path: string; url: string } | null; error: any }> {
    if (!supabase) {
      return { data: null, error: new Error("Database not available") };
    }

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${applicationId}-${Date.now()}.${fileExt}`;
      const filePath = `cv-files/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("career-cvs")
        .upload(filePath, file);

      if (uploadError) {
        return { data: null, error: uploadError };
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("career-cvs")
        .getPublicUrl(filePath);

      return {
        data: {
          path: filePath,
          url: urlData.publicUrl,
        },
        error: null,
      };
    } catch (error) {
      console.error("Error uploading CV file:", error);
      return { data: null, error };
    }
  }

  // Delete CV file from Supabase Storage
  static async deleteCV(filePath: string): Promise<{ error: any }> {
    if (!supabase) {
      return { error: new Error("Database not available") };
    }

    try {
      const { error } = await supabase.storage
        .from("career-cvs")
        .remove([filePath]);

      return { error };
    } catch (error) {
      console.error("Error deleting CV file:", error);
      return { error };
    }
  }
}

// Helper function to check database connection
export async function checkDatabaseConnection(): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  try {
    const { data, error } = await supabase
      .from("career_applications")
      .select("count")
      .limit(1);

    return !error;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}