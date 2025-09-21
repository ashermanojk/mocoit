"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MocoitLogoWhite from "@/public/logo/MOCOIT_Logo_white.png";
import MocoitLogoBlack from "@/public/logo/MOCOIT_Logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/technology", label: "Technology" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="block relative"
            >
              {/* Desktop Logo */}
              <div className="hidden sm:block">
                <Image
                  src={MocoitLogoWhite}
                  alt="MOCOIT Labs Logo"
                  width={140}
                  height={40}
                  className="hidden dark:block h-8 lg:h-10 w-auto"
                  priority
                />
                <Image
                  src={MocoitLogoBlack}
                  alt="MOCOIT Labs Logo"
                  width={140}
                  height={40}
                  className="block dark:hidden h-8 lg:h-10 w-auto"
                  priority
                />
              </div>
              {/* Mobile Logo */}
              <div className="block sm:hidden">
                <Image
                  src={MocoitLogoWhite}
                  alt="MOCOIT Labs Logo"
                  width={120}
                  height={32}
                  className="hidden dark:block h-7 w-auto"
                  priority
                />
                <Image
                  src={MocoitLogoBlack}
                  alt="MOCOIT Labs Logo"
                  width={120}
                  height={32}
                  className="block dark:hidden h-7 w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-foreground/80 font-medium transition-colors duration-200 px-2 py-1 hover:text-primary focus:outline-none group"
                >
                  <span className="transition-all duration-200 group-hover:decoration-primary group-hover:scale-105">
                    {item.label}
                  </span>
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            <AnimatedThemeToggler className="ml-6" />
            <Link href="/contact">
              <Button className="ml-4 bg-primary hover:bg-primary/90 transition-colors duration-200">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button & theme toggler */}
          <div className="flex lg:hidden items-center gap-2">
            <AnimatedThemeToggler />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in-down">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground/80 font-medium rounded-md transition-colors hover:bg-primary/10 hover:text-primary active:bg-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
