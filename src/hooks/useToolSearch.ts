import { useState, useEffect, useMemo } from "react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  pricing: string;
  rating: number;
  users: string;
  trialAvailable: boolean;
  setupTime: string;
  website: string;
}

interface UseToolSearchProps {
  tools: Tool[];
  category?: string;
  searchQuery?: string;
  limit?: number;
}

export const useToolSearch = ({ tools, category = "popular", searchQuery = "", limit }: UseToolSearchProps) => {
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);

  // Get search suggestions based on current query
  const suggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase();
    const suggestionSet = new Set<string>();

    tools.forEach(tool => {
      // Add tool name if it matches
      if (tool.name.toLowerCase().includes(query)) {
        suggestionSet.add(tool.name);
      }
      
      // Add category if it matches
      if (tool.category.toLowerCase().includes(query)) {
        suggestionSet.add(tool.category);
      }

      // Extract keywords from description
      const words = tool.description.toLowerCase().split(' ');
      words.forEach(word => {
        if (word.length > 3 && word.includes(query)) {
          suggestionSet.add(word.replace(/[^a-z]/g, ''));
        }
      });
    });

    return Array.from(suggestionSet).slice(0, 5);
  }, [searchQuery, tools]);

  useEffect(() => {
    let filtered = tools;

    // Filter by category
    if (category !== "popular" && category !== "all") {
      filtered = filtered.filter(
        (tool) => tool.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((tool) => {
        const matchesName = tool.name.toLowerCase().includes(query);
        const matchesDescription = tool.description.toLowerCase().includes(query);
        const matchesCategory = tool.category.toLowerCase().includes(query);
        return matchesName || matchesDescription || matchesCategory;
      });
    }

    // Sort by rating and popularity
    filtered.sort((a, b) => {
      const ratingDiff = b.rating - a.rating;
      if (Math.abs(ratingDiff) > 0.1) return ratingDiff;
      
      // Extract numeric value from users string (e.g., "2.2M+" -> 2.2)
      const getUserCount = (users: string) => {
        const match = users.match(/[\d.]+/);
        const num = match ? parseFloat(match[0]) : 0;
        if (users.includes('M')) return num * 1000000;
        if (users.includes('K')) return num * 1000;
        return num;
      };
      
      return getUserCount(b.users) - getUserCount(a.users);
    });

    // Apply limit if specified
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    setFilteredTools(filtered);
  }, [tools, category, searchQuery, limit]);

  return {
    filteredTools,
    suggestions,
    totalCount: filteredTools.length,
    hasResults: filteredTools.length > 0,
  };
};
