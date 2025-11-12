import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { RegionSelector } from "./RegionSelector";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold">AutomationAIHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="navigation">
            <Link to="/tools" className="text-foreground hover:text-primary transition-colors" aria-label="Browse AI automation tools">
              Tools
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors" aria-label="Browse tools by category">
              Categories
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors" aria-label="Read automation guides and articles">
              Blog
            </Link>
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors" aria-label="Download free automation resources">
              Resources
            </Link>
            <Link to="/submit" className="text-foreground hover:text-primary transition-colors" aria-label="Submit your AI tool">
              Submit Tool
            </Link>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <RegionSelector />
            <Button variant="ghost" size="icon" aria-label="Search tools">
              <Search className="h-5 w-5" />
            </Button>
            {user ? (
              <>
                {isAdmin && (
                  <>
                    <Link to="/tools/admin">
                      <Button variant="outline">
                        Tools Admin
                      </Button>
                    </Link>
                    <Link to="/admin">
                      <Button variant="outline">
                        Blog Admin
                      </Button>
                    </Link>
                  </>
                )}
                <Button variant="ghost" size="icon" onClick={signOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="outline">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/tools" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                to="/categories" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/resources" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/submit" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit Tool
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <div className="py-2">
                  <RegionSelector />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                {user ? (
                  <>
                    {isAdmin && (
                      <>
                        <Link to="/tools/admin" onClick={() => setIsMenuOpen(false)}>
                          <Button variant="outline" className="w-full">
                            Tools Admin
                          </Button>
                        </Link>
                        <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                          <Button variant="outline" className="w-full">
                            Blog Admin
                          </Button>
                        </Link>
                      </>
                    )}
                    <Button variant="outline" className="w-full" onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;