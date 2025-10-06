import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/pages/BlogAdmin";

const postSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  slug: z.string().trim().min(1, "Slug is required").max(200).regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  excerpt: z.string().trim().max(500).optional(),
  content: z.string().optional(),
  meta_title: z.string().trim().max(60).optional(),
  meta_description: z.string().trim().max(160).optional(),
  category: z.string().trim().max(100).optional(),
  featured_image: z.string().url().optional().or(z.literal("")),
  featured_image_alt: z.string().trim().max(200).optional(),
  status: z.enum(["draft", "published"]),
});

interface BlogPostEditorProps {
  post: BlogPost | null;
  onSave: () => void;
  onCancel: () => void;
  userId: string;
}

const BlogPostEditor = ({ post, onSave, onCancel, userId }: BlogPostEditorProps) => {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    meta_title: post?.meta_title || "",
    meta_description: post?.meta_description || "",
    category: post?.category || "",
    featured_image: post?.featured_image || "",
    featured_image_alt: post?.featured_image_alt || "",
    status: post?.status || "draft",
  });
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  useEffect(() => {
    if (!post && formData.title && !formData.slug) {
      const autoSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setFormData((prev) => ({ ...prev, slug: autoSlug }));
    }
  }, [formData.title, formData.slug, post]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validatedData = postSchema.parse(formData);

      setLoading(true);

      const postData = {
        title: validatedData.title,
        slug: validatedData.slug,
        excerpt: validatedData.excerpt || null,
        content: validatedData.content || null,
        meta_title: validatedData.meta_title || null,
        meta_description: validatedData.meta_description || null,
        category: validatedData.category || null,
        featured_image: validatedData.featured_image || null,
        featured_image_alt: validatedData.featured_image_alt || null,
        status: validatedData.status,
        author_id: userId,
        published_at: validatedData.status === "published" && !post?.published_at ? new Date().toISOString() : post?.published_at || null,
      };

      if (post) {
        // Update existing post
        const { error } = await supabase
          .from("posts")
          .update(postData)
          .eq("id", post.id);

        if (error) throw error;
        toast.success("Post updated successfully!");
      } else {
        // Create new post
        const { error } = await supabase.from("posts").insert([postData]);

        if (error) {
          if (error.message.includes("duplicate key")) {
            toast.error("A post with this slug already exists");
            return;
          }
          throw error;
        }
        toast.success("Post created successfully!");
      }

      onSave();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" onClick={onCancel} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Posts
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{post ? "Edit Post" : "Create New Post"}</CardTitle>
            <CardDescription>
              Fill in the details below to {post ? "update" : "create"} your blog post
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    required
                    disabled={loading}
                    maxLength={200}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleChange("slug", e.target.value)}
                    required
                    disabled={loading}
                    maxLength={200}
                    placeholder="my-blog-post"
                  />
                  <p className="text-sm text-muted-foreground">
                    URL: /blog/{formData.slug || "your-slug"}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    disabled={loading}
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleChange("status", value)}
                    disabled={loading}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Content</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleChange("excerpt", e.target.value)}
                    disabled={loading}
                    rows={3}
                    maxLength={500}
                    placeholder="A brief summary of your post..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleChange("content", e.target.value)}
                    disabled={loading}
                    rows={15}
                    placeholder="Write your blog post content here..."
                  />
                </div>
              </div>

              {/* SEO */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">SEO Settings</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Meta Title (max 60 characters)</Label>
                  <Input
                    id="meta_title"
                    value={formData.meta_title}
                    onChange={(e) => handleChange("meta_title", e.target.value)}
                    disabled={loading}
                    maxLength={60}
                    placeholder="Leave empty to use post title"
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.meta_title.length}/60 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta_description">Meta Description (max 160 characters)</Label>
                  <Textarea
                    id="meta_description"
                    value={formData.meta_description}
                    onChange={(e) => handleChange("meta_description", e.target.value)}
                    disabled={loading}
                    rows={3}
                    maxLength={160}
                    placeholder="Leave empty to use excerpt"
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.meta_description.length}/160 characters
                  </p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Featured Image</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="featured_image">Image URL</Label>
                  <Input
                    id="featured_image"
                    type="url"
                    value={formData.featured_image}
                    onChange={(e) => handleChange("featured_image", e.target.value)}
                    disabled={loading}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featured_image_alt">Image Alt Text</Label>
                  <Input
                    id="featured_image_alt"
                    value={formData.featured_image_alt}
                    onChange={(e) => handleChange("featured_image_alt", e.target.value)}
                    disabled={loading}
                    maxLength={200}
                    placeholder="Describe the image for accessibility"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : post ? "Update Post" : "Create Post"}
                </Button>
                <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPostEditor;
