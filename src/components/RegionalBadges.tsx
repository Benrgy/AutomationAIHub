import { Badge } from "./ui/badge";
import { Shield, Globe, Languages } from "lucide-react";

interface RegionalBadgesProps {
  complianceTags?: string[];
  regionalFeatures?: Record<string, any>;
  userRegion?: 'US' | 'UK' | 'CA';
  className?: string;
}

const RegionalBadges = ({ complianceTags = [], regionalFeatures = {}, userRegion, className = "" }: RegionalBadgesProps) => {
  const getRegionRelevantBadges = () => {
    const badges: Array<{ icon: React.ReactNode; label: string; variant?: "default" | "secondary" | "outline" }> = [];

    // Show compliance badges relevant to the region
    if (userRegion === 'UK' && complianceTags.includes('GDPR')) {
      badges.push({
        icon: <Shield className="w-3 h-3" />,
        label: "GDPR Compliant",
        variant: "default"
      });
    }

    if (userRegion === 'US' && complianceTags.includes('HIPAA')) {
      badges.push({
        icon: <Shield className="w-3 h-3" />,
        label: "HIPAA Compliant",
        variant: "default"
      });
    }

    if (userRegion === 'CA' && (regionalFeatures.bilingual || regionalFeatures.french_support)) {
      badges.push({
        icon: <Languages className="w-3 h-3" />,
        label: "Bilingual",
        variant: "default"
      });
    }

    // Show general compliance badges
    if (complianceTags.includes('SOC2')) {
      badges.push({
        icon: <Shield className="w-3 h-3" />,
        label: "SOC2",
        variant: "secondary"
      });
    }

    if (regionalFeatures.uk_data_residency && userRegion === 'UK') {
      badges.push({
        icon: <Globe className="w-3 h-3" />,
        label: "UK Data",
        variant: "default"
      });
    }

    return badges;
  };

  const badges = getRegionRelevantBadges();

  if (badges.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {badges.map((badge, index) => (
        <Badge key={index} variant={badge.variant || "secondary"} className="text-xs flex items-center gap-1">
          {badge.icon}
          {badge.label}
        </Badge>
      ))}
    </div>
  );
};

export default RegionalBadges;
