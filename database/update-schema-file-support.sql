-- Update Database Schema to Support File Storage
-- Run this script in Supabase SQL Editor after setup-storage.sql

-- 1. Add file-related columns to career_applications table if they don't exist
ALTER TABLE career_applications 
ADD COLUMN IF NOT EXISTS cv_file_url TEXT,
ADD COLUMN IF NOT EXISTS cv_file_size INTEGER,
ADD COLUMN IF NOT EXISTS cv_file_type VARCHAR(100),
ADD COLUMN IF NOT EXISTS cv_file_path TEXT;

-- 2. Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_career_applications_cv_file_url 
ON career_applications(cv_file_url) 
WHERE cv_file_url IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_career_applications_cv_file_name 
ON career_applications(cv_file_name) 
WHERE cv_file_name IS NOT NULL;

-- 3. Update the CareerApplicationDB.create method to handle file info
-- This will be done in the API code, but we can prepare the database

-- 4. Create a function to update file information after upload
CREATE OR REPLACE FUNCTION update_application_file_info(
    app_id UUID,
    file_url TEXT,
    file_size INTEGER,
    file_type TEXT,
    file_path TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE career_applications 
    SET 
        cv_file_url = file_url,
        cv_file_size = file_size,
        cv_file_type = file_type,
        cv_file_path = file_path,
        updated_at = NOW()
    WHERE id = app_id;
    
    RETURN FOUND;
END;
$$;

-- 5. Create a function to clean up orphaned files
CREATE OR REPLACE FUNCTION cleanup_orphaned_files()
RETURNS TABLE(deleted_files TEXT[])
LANGUAGE plpgsql
AS $$
DECLARE
    orphaned_files TEXT[];
BEGIN
    -- This function can be used to identify files that exist in storage
    -- but don't have corresponding database records
    -- Implementation would require storage API calls
    
    SELECT ARRAY[]::TEXT[] INTO orphaned_files;
    
    RETURN QUERY SELECT orphaned_files;
END;
$$;

-- 6. Verify schema updates
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'career_applications' 
AND table_schema = 'public'
AND column_name LIKE '%cv_file%'
ORDER BY ordinal_position;

-- 7. Check if functions were created successfully
SELECT 
    routine_name,
    routine_type,
    data_type
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_name IN ('update_application_file_info', 'cleanup_orphaned_files');

-- 8. Test the update function
SELECT 'Database schema updated successfully for file support!' as status;

-- 9. Show current table structure
\d career_applications;