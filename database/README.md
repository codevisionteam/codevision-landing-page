# Database Setup for Career Application System

This directory contains the database schema and configuration for the career application system using Supabase.

## Prerequisites

1. **Supabase Account**: Create a free account at [supabase.com](https://supabase.com)
2. **Project Setup**: Create a new Supabase project
3. **Environment Variables**: Configure the required environment variables

## Environment Variables

Add the following variables to your `.env.local` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Database Setup

### 1. Run the Schema

1. Open your Supabase project dashboard
2. Go to the SQL Editor
3. Copy and paste the contents of `schema.sql`
4. Execute the SQL script

### 2. Storage Setup

For CV file uploads, you need to create a storage bucket:

1. Go to Storage in your Supabase dashboard
2. Create a new bucket named `career-cvs`
3. Set the bucket to public (for file access)
4. Configure the following policies:

```sql
-- Allow public uploads
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'career-cvs');

-- Allow public downloads
CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT USING (bucket_id = 'career-cvs');

-- Allow authenticated users to delete
CREATE POLICY "Allow authenticated deletes" ON storage.objects
FOR DELETE USING (bucket_id = 'career-cvs' AND auth.role() = 'authenticated');
```

## Database Schema Overview

### Tables

#### `career_applications`

Stores all career application data including:

- Personal information (name, email, phone)
- Application details (position, experience, cover letter)
- File information (CV details)
- Status tracking
- Timestamps

#### `application_logs`

Audit trail for application status changes:

- Tracks who made changes
- Records old and new status
- Includes notes and timestamps

### Views

#### `application_statistics`

Provides aggregated statistics by position:

- Total applications per position
- Status breakdown
- Date ranges

### Functions and Triggers

- **Auto-update timestamps**: Automatically updates `updated_at` field
- **Status change logging**: Automatically logs status changes
- **Row Level Security**: Ensures data access control

## Usage Examples

### Creating an Application

```typescript
import { CareerApplicationDB } from "@/lib/database";

const result = await CareerApplicationDB.create({
  full_name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  position: "Frontend Developer",
  experience: "3 years of React development",
  cover_letter: "I am passionate about...",
  portfolio: "https://johndoe.dev",
});
```

### Updating Application Status

```typescript
const result = await CareerApplicationDB.updateStatus(
  applicationId,
  "interview",
  "hr@company.com",
  "Scheduled for next week"
);
```

### Uploading CV File

```typescript
import { FileUploadDB } from "@/lib/database";

const result = await FileUploadDB.uploadCV(file, applicationId);
if (result.data) {
  console.log("File uploaded:", result.data.url);
}
```

## Security Considerations

1. **Row Level Security (RLS)**: Enabled on all tables
2. **Public Access**: Only for creating new applications
3. **Authenticated Access**: Required for viewing and updating applications
4. **File Upload**: Validate file types and sizes on the client and server
5. **Data Validation**: Always validate input data before database operations

## Monitoring and Maintenance

### Regular Tasks

1. **Monitor Storage Usage**: Check CV file storage usage
2. **Clean Old Files**: Remove CV files for rejected applications after retention period
3. **Database Performance**: Monitor query performance and optimize indexes
4. **Backup**: Ensure regular database backups are configured

### Useful Queries

```sql
-- Get applications from last 30 days
SELECT * FROM career_applications
WHERE applied_at >= NOW() - INTERVAL '30 days'
ORDER BY applied_at DESC;

-- Get application statistics
SELECT * FROM application_statistics;

-- Find applications needing review
SELECT * FROM career_applications
WHERE status = 'pending'
AND applied_at < NOW() - INTERVAL '2 days';
```

## Troubleshooting

### Common Issues

1. **Connection Errors**: Check environment variables
2. **Permission Errors**: Verify RLS policies
3. **File Upload Errors**: Check storage bucket configuration
4. **Performance Issues**: Review indexes and query patterns

### Debug Mode

Enable debug logging by setting:

```env
NEXT_PUBLIC_SUPABASE_DEBUG=true
```

## Migration and Updates

When updating the schema:

1. Create migration files in `migrations/` directory
2. Test migrations on staging environment
3. Apply migrations during maintenance windows
4. Update the main `schema.sql` file

## Support

For issues related to:

- **Supabase**: Check [Supabase Documentation](https://supabase.com/docs)
- **Database Schema**: Review this README and schema comments
- **Application Logic**: Check the `lib/database.ts` file
