/*
# Create contact_submissions and testimonials tables (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `phone` (text, not null)
  - `course` (text, not null)
  - `message` (text)
  - `created_at` (timestamptz, default now())
- `testimonials`
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `role` (text, not null)
  - `quote` (text, not null)
  - `rating` (integer, default 5)
  - `course` (text)
  - `approved` (boolean, default true)
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD for contact_submissions (public contact form).
- Allow anon + authenticated SELECT for testimonials; INSERT/UPDATE/DELETE for authenticated only.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  course text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contacts" ON contact_submissions;
CREATE POLICY "anon_insert_contacts" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contacts" ON contact_submissions;
CREATE POLICY "anon_select_contacts" ON contact_submissions FOR SELECT
  TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  quote text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  course text,
  approved boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_testimonials" ON testimonials;
CREATE POLICY "public_read_testimonials" ON testimonials FOR SELECT
  TO anon, authenticated USING (approved = true);

DROP POLICY IF EXISTS "authenticated_insert_testimonials" ON testimonials;
CREATE POLICY "authenticated_insert_testimonials" ON testimonials FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_testimonials" ON testimonials;
CREATE POLICY "authenticated_update_testimonials" ON testimonials FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_testimonials" ON testimonials;
CREATE POLICY "authenticated_delete_testimonials" ON testimonials FOR DELETE
  TO authenticated USING (true);
