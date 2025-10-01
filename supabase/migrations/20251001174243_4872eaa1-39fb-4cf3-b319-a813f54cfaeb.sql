-- Create posts table for blog content
CREATE TABLE public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  meta_title TEXT,
  meta_description TEXT,
  category TEXT,
  featured_image TEXT,
  featured_image_alt TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view published posts
CREATE POLICY "Published posts are viewable by everyone"
ON public.posts
FOR SELECT
USING (status = 'published');

-- Policy: Authenticated users can view their own drafts
CREATE POLICY "Users can view their own drafts"
ON public.posts
FOR SELECT
USING (auth.uid() = author_id);

-- Policy: Authenticated users can create posts
CREATE POLICY "Authenticated users can create posts"
ON public.posts
FOR INSERT
WITH CHECK (auth.uid() = author_id);

-- Policy: Users can update their own posts
CREATE POLICY "Users can update their own posts"
ON public.posts
FOR UPDATE
USING (auth.uid() = author_id);

-- Policy: Users can delete their own posts
CREATE POLICY "Users can delete their own posts"
ON public.posts
FOR DELETE
USING (auth.uid() = author_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW
EXECUTE FUNCTION public.update_posts_updated_at();

-- Create index on slug for faster lookups
CREATE INDEX idx_posts_slug ON public.posts(slug);

-- Create index on status for published posts queries
CREATE INDEX idx_posts_status ON public.posts(status);

-- Create index on author_id for user's posts queries
CREATE INDEX idx_posts_author_id ON public.posts(author_id);