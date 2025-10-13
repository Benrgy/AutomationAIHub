import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tool } from "./useToolSearch";

export const useTools = () => {
  return useQuery({
    queryKey: ['tools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('rating', { ascending: false });
      
      if (error) throw error;
      
      // Transform database format to match Tool interface
      return (data || []).map(tool => ({
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
      })) as Tool[];
    },
  });
};
