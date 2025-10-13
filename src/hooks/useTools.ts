import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tool } from "./useToolSearch";

export const useTools = () => {
  return useQuery({
    queryKey: ["tools"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tools")
        .select("*")
        .order("rating", { ascending: false });

      if (error) throw error;
      
      // Transform database format to match our Tool interface
      return (data || []).map((tool): Tool => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        logo: tool.logo,
        category: tool.category,
        pricing: tool.pricing,
        rating: Number(tool.rating),
        users: tool.users,
        trialAvailable: tool.trial_available,
        setupTime: tool.setup_time,
        website: tool.website,
      }));
    },
  });
};

export const useCreateTool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (tool: Omit<Tool, "id">) => {
      const { data, error } = await supabase
        .from("tools")
        .insert({
          name: tool.name,
          description: tool.description,
          logo: tool.logo,
          category: tool.category,
          pricing: tool.pricing,
          rating: tool.rating,
          users: tool.users,
          trial_available: tool.trialAvailable,
          setup_time: tool.setupTime,
          website: tool.website,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tools"] });
    },
  });
};

export const useUpdateTool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (tool: Tool) => {
      const { data, error } = await supabase
        .from("tools")
        .update({
          name: tool.name,
          description: tool.description,
          logo: tool.logo,
          category: tool.category,
          pricing: tool.pricing,
          rating: tool.rating,
          users: tool.users,
          trial_available: tool.trialAvailable,
          setup_time: tool.setupTime,
          website: tool.website,
        })
        .eq("id", tool.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tools"] });
    },
  });
};

export const useDeleteTool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error} = await supabase
        .from("tools")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tools"] });
    },
  });
};
