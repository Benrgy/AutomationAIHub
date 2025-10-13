import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface SearchSectionProps {
  onSearchChange?: (query: string) => void;
  suggestions?: string[];
  resultsCount?: number;
  showCount?: boolean;
}

const SearchSection = ({ onSearchChange, suggestions = [], resultsCount, showCount = false }: SearchSectionProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
    setShowSuggestions(value.length > 0 && suggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    onSearchChange?.(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchValue("");
    onSearchChange?.("");
    setShowSuggestions(false);
  };

  return (
    <section className="py-12 -mt-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative" ref={searchRef}>
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground pointer-events-none z-10" />
            <Input
              type="text"
              value={searchValue}
              placeholder="Search AI automation tools for your business..."
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setShowSuggestions(searchValue.length > 0 && suggestions.length > 0)}
              className="search-input pl-14 pr-12 text-lg h-14"
            />
            {searchValue && (
              <button
                onClick={clearSearch}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-6 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3"
                  >
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="capitalize">{suggestion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Try: workflow automation, marketing tools, HR software
            </p>
            {showCount && resultsCount !== undefined && (
              <p className="text-sm font-medium text-foreground">
                {resultsCount} {resultsCount === 1 ? 'tool' : 'tools'} found
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;