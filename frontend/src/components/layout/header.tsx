'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NewtraceLogo } from "@/components/icons/newtrace-logo";
import { AnimatedButton } from "@/components/ui/animated-button";
import { siteConfig, type NavItem } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ProductEnquiryButton } from "./product-enquiry-button";

// In your header.tsx file
interface HeaderProps {
  onProductEnquiryClick?: () => void;  // Make it optional with ?
}

export function Header({ onProductEnquiryClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background text-foreground",
    isScrolled ? "shadow-md" : ""
  );

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:text-primary";

  const dropdownTriggerClasses = "text-sm font-medium px-3 py-2 flex items-center text-foreground hover:text-primary";
  
  const mobileMenuIconColor = "text-foreground hover:text-primary";

  return (
    <header className={headerClasses}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="GreenTrace Home">
              <NewtraceLogo className="h-8 w-auto text-primary" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1 items-center">
            {siteConfig.mainNav.map((item) =>
              item.items ? (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={dropdownTriggerClasses}>
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background border-border shadow-lg">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.title} asChild>
                        <Link href={subItem.href} className="text-sm text-foreground hover:bg-muted">
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={linkClasses}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <AnimatedButton 
                onClick={() => onProductEnquiryClick?.()}  
                variant="primary" // Lime green with blue border
              >
                Product Enquiry
              </AnimatedButton>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={cn("p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary", mobileMenuIconColor)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 shadow-lg pb-4 bg-background text-foreground">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {siteConfig.mainNav.map((item) =>
              item.items ? (
                <div key={item.title} className="py-1">
                  <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.title}</h3>
                  {item.items.map((subItem) => (
                     <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>
          <div className="px-4 pt-4">
             <AnimatedButton 
                onClick={() => { 
                  onProductEnquiryClick?.(); 
                  toggleMobileMenu(); 
                }} 
                variant="primary" 
                className="w-full"
            >
                Product Enquiry
              </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
}

// Remove the duplicate Header function below
// export function Header() { ... }
