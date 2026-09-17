import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { businessInfo, whatsappHref } from "@/data/products";

const footerLinks = [
  { label: "Home", to: "/" as const },
  { label: "Products", to: "/products" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_0.8fr_1.3fr] lg:px-8">
        <div>
          <Link to="/" className="text-2xl font-bold tracking-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">
            {businessInfo.company}
          </Link>
          <p className="mt-3 text-sm leading-6 text-primary-foreground/80">{businessInfo.tagline}</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">Links</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3"><Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><a href={businessInfo.phoneHref} className="hover:text-primary-foreground">{businessInfo.phone}</a></li>
            <li className="flex gap-3"><MessageCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><a href={whatsappHref()} target="_blank" rel="noreferrer" className="hover:text-primary-foreground">{businessInfo.whatsapp}</a></li>
            <li className="flex gap-3"><Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><a href={businessInfo.emailHref} className="break-all hover:text-primary-foreground">{businessInfo.email}</a></li>
            <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><span>{businessInfo.footerAddress}</span></li>
            <li className="flex gap-3"><Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0" /><span>{businessInfo.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-4 py-4 text-center text-sm text-primary-foreground/75">
        © 2026 LEBCO. All rights reserved.
      </div>
    </footer>
  );
}
