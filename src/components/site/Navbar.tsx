import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { businessInfo, whatsappHref } from "@/data/products";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Products", to: "/products" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-md bg-primary text-base font-bold text-primary-foreground">L</span>
          <span className="text-xl font-bold tracking-normal text-foreground">{businessInfo.company}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm font-medium transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href={whatsappHref()} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Enquire Now
            </a>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3">
              <a href={whatsappHref()} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <MessageCircle aria-hidden="true" /> Enquire Now
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
