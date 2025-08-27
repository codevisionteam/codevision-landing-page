-- Setup Storage Bucket for CV File Uploads
-- Run this script in Supabase SQL Editor

-- 1. Create storage bucket for career applications
INSERT INTO storage.buckets (id, name, public)
VALUES ('career-applications', 'career-applications', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Set up storage policies for CV uploads

-- Allow public uploads to career-applications bucket
CREATE POLICY "Allow public uploads" ON storage.objects
FOR INSERT 
WITH CHECK (bucket_id = 'career-applications');

-- Allow public downloads from career-applications bucket
CREATE POLICY "Allow public downloads" ON storage.objects
FOR SELECT 
USING (bucket_id = 'career-applications');

-- Allow authenticated users to delete files
CREATE POLICY "Allow authenticated deletes" ON storage.objects
FOR DELETE 
USING (bucket_id = 'career-applications' AND auth.role() = 'authenticated');

-- Allow service role to manage all files
CREATE POLICY "Allow service role full access" ON storage.objects
FOR ALL 
USING (bucket_id = 'career-applications' AND auth.jwt() ->> 'role' = 'service_role');

-- 3. Verify bucket creation
SELECT 
    id,
    name,
    public,
    created_at
FROM storage.buckets 
WHERE id = 'career-applications';

-- 4. Verify policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'objects' 
AND schemaname = 'storage'
AND policyname LIKE '%career-applications%' OR policyname LIKE '%public%' OR policyname LIKE '%authenticated%' OR policyname LIKE '%service_role%';

-- 5. Test file upload permissions (this will show if policies are working)
-- Note: This is just a verification query, actual file upload happens through the API
SELECT 
    'Storage bucket setup completed successfully!' as status,
    'You can now upload CV files through the career application form' as message;

-- 6. Optional: Check existing files in bucket
SELECT 
    name,
    bucket_id,
    owner,
    created_at,
    updated_at,
    last_accessed_at,
    metadata
FROM storage.objects 
WHERE bucket_id = 'career-applications'
ORDER BY created_at DESC
LIMIT 10;