import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { useRegion, type Region } from "@/contexts/RegionContext";
import { Badge } from "./ui/badge";

const regions = [
  { code: 'US' as Region, name: 'United States', flag: '🇺🇸' },
  { code: 'UK' as Region, name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA' as Region, name: 'Canada', flag: '🇨🇦' },
];

export const RegionSelector = () => {
  const { region, detectedRegion, setRegion, isManualOverride } = useRegion();

  const currentRegion = regions.find(r => r.code === region);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentRegion?.flag} {currentRegion?.code}</span>
          <span className="sm:hidden">{currentRegion?.flag}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 bg-popover border-border z-50">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-foreground">Select Region</h4>
            <p className="text-xs text-muted-foreground">
              Choose your region to see relevant tools and compliance info
            </p>
          </div>

          {detectedRegion && (
            <div className="flex items-center justify-between p-2 rounded-md bg-muted/30">
              <span className="text-xs text-muted-foreground">
                Detected: {regions.find(r => r.code === detectedRegion)?.flag} {detectedRegion}
              </span>
            </div>
          )}

          <div className="space-y-2">
            {regions.map((r) => (
              <button
                key={r.code}
                onClick={() => setRegion(r.code)}
                className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  region === r.code
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-card hover:bg-muted/50 text-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.flag}</span>
                  <div className="text-left">
                    <div className="font-medium text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.code}</div>
                  </div>
                </div>
                {region === r.code && (
                  <Badge variant="default" className="text-xs">Active</Badge>
                )}
              </button>
            ))}
          </div>

          {isManualOverride && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRegion(null)}
              className="w-full text-xs"
            >
              Reset to Auto-Detect
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
