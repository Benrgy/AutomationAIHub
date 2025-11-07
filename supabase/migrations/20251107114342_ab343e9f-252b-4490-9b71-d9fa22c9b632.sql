-- Add admin/editor policies for posts table to allow reviewing drafts
-- This addresses the security finding about draft post access

-- Allow admins to view all posts including drafts
CREATE POLICY "Admins can view all posts including drafts"
ON public.posts
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role = 'admin'
  )
);

-- Allow admins to update all posts
CREATE POLICY "Admins can update all posts"
ON public.posts
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role = 'admin'
  )
);

-- Allow admins to delete posts
CREATE POLICY "Admins can delete posts"
ON public.posts
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role = 'admin'
  )
);