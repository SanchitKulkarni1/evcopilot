import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import logoLight from "@/assets/logo_lightmode.png";
import logoDark from "@/assets/logo_darkmode.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "For Professionals", hasDropdown: true },
    { label: "For Students", hasDropdown: true },
    { label: "Community", hasDropdown: false },
    { label: "FAQ", hasDropdown: false, href: "/faq" },
  ];

  return (
    <>
      {/* ---------------- Top Gradient Bar ---------------- */}
      <div className="gradient-top-bar py-2 text-center">
        <p className="text-sm font-medium text-background/90">
          ✨ Become AI ready{" "}
          <a
            href="#programs"
            className="font-semibold underline underline-offset-2 hover:no-underline"
          >
            check our AI courses
          </a>
        </p>
      </div>

      {/* ---------------- Main Header ---------------- */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto flex min-h-[100px] items-center justify-between px-4 lg:px-8">

          {/* Logo */}
          <a href="/" className="flex h-full items-center py-3">
            <img
              src={logoLight}
              alt="EvoCopilot"
              className="block h-32 w-auto object-contain md:h-40 lg:h-48 dark:hidden"
            />
            <img
              src={logoDark}
              alt="EvoCopilot"
              className="hidden h-32 w-auto object-contain md:h-40 lg:h-48 dark:block"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden rounded-lg p-2 text-foreground hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ---------------- Mobile Menu ---------------- */}
        {isMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                )
              )}

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;