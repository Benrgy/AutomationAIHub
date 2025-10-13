import { useState } from "react";
import { useTools, useCreateTool, useUpdateTool, useDeleteTool } from "@/hooks/useTools";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react";
import { Tool } from "@/hooks/useToolSearch";
import { toast } from "sonner";

const CATEGORIES = [
  "Workflow Automation",
  "Marketing Automation",
  "Business Operations",
  "HR Automation",
  "Sales Automation",
  "Data & Analytics",
  "Integration Platforms"
];

const ToolsAdmin = () => {
  const { data: tools, isLoading } = useTools();
  const createTool = useCreateTool();
  const updateTool = useUpdateTool();
  const deleteTool = useDeleteTool();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTool, setEditingTool] = useState<Tool | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "",
    category: CATEGORIES[0],
    pricing: "",
    rating: 4.5,
    users: "",
    trialAvailable: true,
    setupTime: "",
    website: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      logo: "",
      category: CATEGORIES[0],
      pricing: "",
      rating: 4.5,
      users: "",
      trialAvailable: true,
      setupTime: "",
      website: "",
    });
    setEditingTool(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingTool) {
        await updateTool.mutateAsync({ ...formData, id: editingTool.id });
        toast.success("Tool updated successfully!");
      } else {
        await createTool.mutateAsync(formData);
        toast.success("Tool created successfully!");
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast.error("Failed to save tool. Please try again.");
    }
  };

  const handleEdit = (tool: Tool) => {
    setEditingTool(tool);
    setFormData({
      name: tool.name,
      description: tool.description,
      logo: tool.logo,
      category: tool.category,
      pricing: tool.pricing,
      rating: tool.rating,
      users: tool.users,
      trialAvailable: tool.trialAvailable,
      setupTime: tool.setupTime,
      website: tool.website,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this tool?")) return;

    try {
      await deleteTool.mutateAsync(id);
      toast.success("Tool deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete tool. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Tools Management</h1>
            <p className="text-muted-foreground">
              Manage your AI automation tools directory
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="h-4 w-4 mr-2" />
                Add Tool
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingTool ? "Edit Tool" : "Add New Tool"}
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Tool Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="pricing">Pricing</Label>
                    <Input
                      id="pricing"
                      value={formData.pricing}
                      onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
                      placeholder="e.g., $19/mo or Free"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rating">Rating (0-5)</Label>
                    <Input
                      id="rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="users">Users</Label>
                    <Input
                      id="users"
                      value={formData.users}
                      onChange={(e) => setFormData({ ...formData, users: e.target.value })}
                      placeholder="e.g., 2.2M+ users"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="setupTime">Setup Time</Label>
                    <Input
                      id="setupTime"
                      value={formData.setupTime}
                      onChange={(e) => setFormData({ ...formData, setupTime: e.target.value })}
                      placeholder="e.g., 5 min setup"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="trial">Free Trial Available</Label>
                    <select
                      id="trial"
                      value={formData.trialAvailable.toString()}
                      onChange={(e) => setFormData({ ...formData, trialAvailable: e.target.value === "true" })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="logo">Logo URL</Label>
                  <Input
                    id="logo"
                    type="url"
                    value={formData.logo}
                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                    placeholder="https://..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://..."
                    required
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsDialogOpen(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={createTool.isPending || updateTool.isPending}
                  >
                    {(createTool.isPending || updateTool.isPending) && (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    )}
                    {editingTool ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-4">
            {tools?.map((tool) => (
              <Card key={tool.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <CardTitle>{tool.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {tool.category} • {tool.pricing}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(tool)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(tool.id)}
                        disabled={deleteTool.isPending}
                      >
                        {deleteTool.isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex gap-4 mt-3 text-sm">
                    <span>⭐ {tool.rating}</span>
                    <span>👥 {tool.users}</span>
                    <span>⏱️ {tool.setupTime}</span>
                    {tool.trialAvailable && (
                      <span className="text-primary">✓ Free Trial</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsAdmin;
