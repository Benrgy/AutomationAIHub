import { useState } from "react";
import { Search } from "lucide-react";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-12 -mt-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search AI automation tools for your business..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input pl-14 text-lg"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Try: workflow automation, marketing tools, HR software
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;