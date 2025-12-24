import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "For Professionals", hasDropdown: true },
    { label: "For Students", hasDropdown: true },
    { label: "Community", hasDropdown: false },
  ];

  return (
    <>
      {/* Gradient Top Bar */}
      <div className="gradient-top-bar py-2 text-center">
        <p className="text-sm font-medium text-background/90">
          ✨ Become AI ready{" "}
          <a href="#programs" className="font-semibold underline underline-offset-2 hover:no-underline">
            check our AI courses
          </a>
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="VOCOPILOT" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="default" size="default">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 text-foreground hover:bg-secondary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="default" size="lg" className="w-full">
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
