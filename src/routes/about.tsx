import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, CheckCircle, Ruler, Wrench } from "lucide-react";

import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/data/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — LEBCO" },
      {
        name: "description",
        content:
          "Learn about LEBCO, a hardware business offering products for modular kitchens, furniture and utility applications.",
      },
      { property: "og:title", content: "About Us — LEBCO" },
      {
        property: "og:description",
        content: "LEBCO provides practical hardware solutions for kitchens, furniture and everyday utility applications.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="About LEBCO"
            title="Hardware Solutions for Modern Spaces"
            description="LEBCO provides practical hardware solutions for kitchens, furniture and everyday utility applications."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              LEBCO focuses on hardware products used in modular kitchens, furniture fittings and utility spaces. The catalogue includes kitchen storage fittings, drawer accessories, corner solutions, baskets, bed fittings and table brackets.
            </p>
            <p>
              The product range is presented clearly so customers can review available specifications and contact LEBCO for product enquiries through WhatsApp, phone or email.
            </p>
            <Button asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
          <aside className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
            <h2 className="text-lg font-semibold text-foreground">Applications</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                { icon: Boxes, text: "Modular kitchen storage" },
                { icon: Wrench, text: "Furniture hardware" },
                { icon: Ruler, text: "Utility fittings" },
                { icon: CheckCircle, text: "Everyday practical use" },
              ].map((item) => (
                <li key={item.text} className="flex gap-3">
                  <item.icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-6 shadow-catalogue-sm">
            <h2 className="text-xl font-semibold text-foreground">Contact LEBCO</h2>
            <p className="mt-3 text-muted-foreground">Phone: {businessInfo.phone}</p>
            <p className="mt-2 text-muted-foreground">WhatsApp: {businessInfo.whatsapp}</p>
            <p className="mt-2 break-all text-muted-foreground">Email: {businessInfo.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
