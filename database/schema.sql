-- Career Applications Database Schema for Supabase
-- This schema stores career application data with proper indexing and constraints

-- Create career_applications table
CREATE TABLE IF NOT EXISTS career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  position VARCHAR(255) NOT NULL,
  experience TEXT NOT NULL,
  portfolio VARCHAR(500),
  cover_letter TEXT NOT NULL,
  cv_file_name VARCHAR(255),
  cv_file_url VARCHAR(500),
  cv_file_size INTEGER,
  cv_file_type VARCHAR(100),
  cv_file_path VARCHAR(500),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'accepted', 'rejected')),
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_career_applications_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_applications_position ON career_applications(position);
CREATE INDEX IF NOT EXISTS idx_career_applications_status ON career_applications(status);
CREATE INDEX IF NOT EXISTS idx_career_applications_applied_at ON career_applications(applied_at DESC);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications(created_at DESC);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_career_applications_updated_at
  BEFORE UPDATE ON career_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS (adjust based on your authentication needs)
-- Policy for authenticated users to read all applications (for admin)
CREATE POLICY "Admin can view all applications" ON career_applications
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policy for inserting new applications (public access for job applications)
CREATE POLICY "Anyone can submit applications" ON career_applications
  FOR INSERT WITH CHECK (true);

-- Additional policy for anonymous users
CREATE POLICY "Anonymous can submit applications" ON career_applications
  FOR INSERT TO anon WITH CHECK (true);

-- Policy for updating applications (only authenticated users)
CREATE POLICY "Admin can update applications" ON career_applications
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create application_logs table for audit trail
CREATE TABLE IF NOT EXISTS application_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  application_id UUID REFERENCES career_applications(id) ON DELETE CASCADE,
  action VARCHAR(100) NOT NULL,
  old_status VARCHAR(50),
  new_status VARCHAR(50),
  performed_by VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for application logs
CREATE INDEX IF NOT EXISTS idx_application_logs_application_id ON application_logs(application_id);
CREATE INDEX IF NOT EXISTS idx_application_logs_created_at ON application_logs(created_at DESC);

-- Enable RLS for application logs
ALTER TABLE application_logs ENABLE ROW LEVEL SECURITY;

-- Policy for application logs (only authenticated users can view)
CREATE POLICY "Admin can view application logs" ON application_logs
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can insert application logs" ON application_logs
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create function to automatically log status changes
CREATE OR REPLACE FUNCTION log_status_change()
RETURNS TRIGGER AS $$
BEGIN
  -- Only log if status actually changed
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO application_logs (application_id, action, old_status, new_status, performed_by)
    VALUES (NEW.id, 'status_change', OLD.status, NEW.status, NEW.reviewed_by);
  END IF;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for automatic status change logging
CREATE TRIGGER log_career_application_status_changes
  AFTER UPDATE ON career_applications
  FOR EACH ROW
  EXECUTE FUNCTION log_status_change();

-- Create view for application statistics
CREATE OR REPLACE VIEW application_statistics AS
SELECT 
  position,
  COUNT(*) as total_applications,
  COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_count,
  COUNT(CASE WHEN status = 'reviewing' THEN 1 END) as reviewing_count,
  COUNT(CASE WHEN status = 'interview' THEN 1 END) as interview_count,
  COUNT(CASE WHEN status = 'accepted' THEN 1 END) as accepted_count,
  COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected_count,
  MIN(applied_at) as first_application,
  MAX(applied_at) as latest_application
FROM career_applications
GROUP BY position
ORDER BY total_applications DESC;

-- Grant necessary permissions (adjust based on your setup)
-- GRANT SELECT, INSERT ON career_applications TO anon;
-- GRANT ALL ON career_applications TO authenticated;
-- GRANT ALL ON application_logs TO authenticated;
-- GRANT SELECT ON application_statistics TO authenticated;

-- Sample data insertion (for testing - remove in production)
-- INSERT INTO career_applications (full_name, email, phone, position, experience, cover_letter)
-- VALUES 
--   ('John Doe', 'john@example.com', '+1234567890', 'Frontend Developer', '3 years', 'I am passionate about frontend development...'),
--   ('Jane Smith', 'jane@example.com', '+1234567891', 'Backend Developer', '5 years', 'I have extensive experience in backend systems...');