-- Add region-specific metadata to tools table
ALTER TABLE public.tools
ADD COLUMN supported_regions text[] DEFAULT ARRAY['US', 'UK', 'CA'],
ADD COLUMN compliance_tags text[] DEFAULT ARRAY[]::text[],
ADD COLUMN regional_features jsonb DEFAULT '{}'::jsonb;

-- Add indexes for better query performance
CREATE INDEX idx_tools_supported_regions ON public.tools USING GIN(supported_regions);
CREATE INDEX idx_tools_compliance_tags ON public.tools USING GIN(compliance_tags);