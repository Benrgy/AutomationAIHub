import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { BlogPost } from "@/pages/BlogAdmin";

interface BlogPostListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onRefresh: () => void;
}

const BlogPostList = ({ posts, onEdit, onRefresh }: BlogPostListProps) => {
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
      toast.success("Post deleted successfully");
      onRefresh();
    } catch (error: any) {
      toast.error("Failed to delete post: " + error.message);
    }
  };

  if (posts.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          No posts yet. Click "New Post" to create your first blog post.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>{post.title}</CardTitle>
                  <Badge variant={post.status === "published" ? "default" : "secondary"}>
                    {post.status}
                  </Badge>
                </div>
                <CardDescription>
                  Slug: /{post.slug}
                  {post.category && ` • Category: ${post.category}`}
                </CardDescription>
                {post.excerpt && (
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                )}
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" onClick={() => onEdit(post)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => handleDelete(post.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          {(post.meta_title || post.meta_description) && (
            <CardContent>
              <div className="text-sm space-y-1">
                {post.meta_title && (
                  <p>
                    <strong>SEO Title:</strong> {post.meta_title}
                  </p>
                )}
                {post.meta_description && (
                  <p>
                    <strong>SEO Description:</strong> {post.meta_description}
                  </p>
                )}
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;
