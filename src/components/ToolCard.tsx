import { ExternalLink, Star, Users, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
import { useGeolocation } from '@/hooks/useGeolocation';
import { formatPricing } from '@/utils/regionalContent';
import RegionalBadges from './RegionalBadges';

interface ToolCardProps {
  tool: {
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
    supported_regions?: string[];
    compliance_tags?: string[];
    regional_features?: Record<string, any>;
  };
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const { location } = useGeolocation();
  const region = location?.region || 'US';
  const displayPricing = formatPricing(tool.pricing, region);

  return (
    <article className="tool-card group" itemScope itemType="https://schema.org/SoftwareApplication">
      <Link to={`/tools/${tool.id}`} className="block" itemProp="url">
      {/* Tool Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
          <img 
            src={tool.logo} 
            alt={`${tool.name} - ${tool.category} automation tool logo`} 
            className="h-8 w-8 rounded-lg"
            loading="lazy"
            width={32}
            height={32}
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21,15 16,10 5,21'/%3E%3C/svg%3E";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors" itemProp="name">
            {tool.name}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{tool.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">•</span>
            <span className="text-sm text-muted-foreground">{tool.category}</span>
          </div>
        </div>
        {tool.trialAvailable && (
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Free Trial
          </Badge>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3" itemProp="description">
        {tool.description}
      </p>
      
      <RegionalBadges 
        complianceTags={tool.compliance_tags}
        regionalFeatures={tool.regional_features}
        userRegion={location?.region}
        className="mb-4"
      />
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      <meta itemProp="operatingSystem" content="Web" />
      <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
        <meta itemProp="ratingValue" content={tool.rating.toString()} />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="worstRating" content="1" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{tool.users}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{tool.setupTime}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Starting at</span>
          <span className="font-semibold text-lg">{displayPricing}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <Button 
          className="flex-1 btn-hero" 
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            // Handle trial signup
          }}
        >
          Start Free Trial
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="btn-secondary-hero"
          onClick={(e) => {
            e.preventDefault();
            window.open(tool.website, '_blank');
          }}
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      </Link>
    </article>
  );
};

export default ToolCard;