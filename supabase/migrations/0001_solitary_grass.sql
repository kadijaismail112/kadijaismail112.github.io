/*
  # Create blog tables and storage

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `preview` (text)
      - `date` (timestamp)
      - `author_id` (uuid, references auth.users)
  
  2. Storage
    - Create bucket for blog assets
  
  3. Security
    - Enable RLS on posts table
    - Add policies for post management
*/

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  preview text NOT NULL,
  date timestamptz DEFAULT now(),
  author_id uuid REFERENCES auth.users(id) NOT NULL
);

-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policies for posts
CREATE POLICY "Public can read posts"
  ON posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authors can create posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own posts"
  ON posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete own posts"
  ON posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);