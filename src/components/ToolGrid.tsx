import { useEffect } from "react";
import ToolCard from "./ToolCard";
import { useToolSearch } from "@/hooks/useToolSearch";
import { useTools } from "@/hooks/useTools";
import { Loader2 } from "lucide-react";

export interface ToolGridProps {
  category?: string;
  searchQuery?: string;
  limit?: number;
  onResultsChange?: (count: number, suggestions: string[]) => void;
}

const ToolGrid = ({ category = "popular", searchQuery = "", limit, onResultsChange }: ToolGridProps) => {
  const { data: tools, isLoading, error } = useTools();

  // Map category slugs to full category names
  const categoryMap: { [key: string]: string } = {
    workflow: "Workflow Automation",
    business: "Business Operations",
    marketing: "Marketing Automation",
    hr: "HR Automation",
    sales: "Sales Automation",
    analytics: "Data & Analytics",
    integration: "Integration Platforms"
  };
  
  const fullCategoryName = category !== "popular" && category !== "all" 
    ? categoryMap[category] || category 
    : category;

  const { filteredTools, suggestions, totalCount } = useToolSearch({
    tools: tools || [],
    category: fullCategoryName,
    searchQuery,
    limit,
  });

  // Notify parent of results changes
  useEffect(() => {
    onResultsChange?.(totalCount, suggestions);
  }, [totalCount, suggestions, onResultsChange]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive text-lg">Failed to load tools</p>
        <p className="text-sm text-muted-foreground mt-2">Please try again later.</p>
      </div>
    );
  }

  if (filteredTools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No tools found matching your criteria.</p>
        <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolGrid;
