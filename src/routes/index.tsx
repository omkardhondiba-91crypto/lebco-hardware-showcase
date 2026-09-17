import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, CheckCircle, MessageCircle, ShieldCheck, Wrench } from "lucide-react";

import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { businessInfo, featuredProducts, heroImage, products, whatsappHref } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEBCO — Hardware Products for Kitchens, Furniture and Utility Use" },
      {
        name: "description",
        content:
          "Explore LEBCO hardware products for modular kitchens, furniture and utility applications. Enquire by WhatsApp, phone or email.",
      },
      { property: "og:title", content: "LEBCO — Hardware Products for Kitchens, Furniture and Utility Use" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Explore LEBCO hardware products for modular kitchens, furniture and utility applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">{businessInfo.company}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Quality Hardware. Built for Everyday Use.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Explore our range of kitchen, furniture and utility hardware solutions designed for practical and durable use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/products">
                  View Products <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-catalogue">
            <img src={heroImage} alt="LEBCO hardware product catalogue display" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_0.2fr] lg:px-8">
          <div>
            <SectionHeader
              title="Hardware Solutions for Modern Spaces"
              description="LEBCO provides practical hardware solutions for kitchens, furniture and everyday utility applications."
            />
          </div>
          <div className="flex items-start lg:justify-end">
            <Button asChild variant="outline">
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            title="Our Product Range"
            description="Explore LEBCO's range of practical hardware solutions."
          />
          <Button asChild variant="outline" className="md:shrink-0">
            <Link to="/products">View Complete Catalogue</Link>
          </Button>
        </div>
        <ProductGrid products={products} />
      </section>

      <section className="border-y border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            title="Featured Products"
            description="Selected LEBCO hardware products for kitchen, furniture and utility applications."
          />
          <div className="mt-9 space-y-8">
            {featuredProducts.map((product, index) => (
              <article key={product.slug} className="grid gap-6 rounded-lg border border-border bg-card p-5 shadow-catalogue-sm md:grid-cols-2 md:items-center md:p-6">
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  <img src={product.image} alt={`${product.name} product placeholder`} className="aspect-[4/3] w-full rounded-md border border-border object-cover" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{product.description}</p>
                  {product.keySpecification ? (
                    <p className="mt-4 border-l-2 border-accent px-4 py-2 text-sm font-medium text-foreground">
                      {product.keySpecification}
                    </p>
                  ) : null}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="outline">
                      <Link to="/products/$slug" params={{ slug: product.slug }}>
                        View Details <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild>
                      <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                        <MessageCircle aria-hidden="true" /> Enquire Now
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeader
          title="Why LEBCO"
          description="Practical hardware choices for modular kitchens, furniture and everyday utility needs."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: ShieldCheck, text: "Durable construction" },
            { icon: Wrench, text: "Practical hardware solutions" },
            { icon: Boxes, text: "Space-saving designs" },
            { icon: CheckCircle, text: "Rust-resistant options" },
            { icon: ShieldCheck, text: "Heavy-duty options" },
            { icon: Wrench, text: "Easy installation" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
              <item.icon aria-hidden="true" className="size-5 shrink-0 text-accent-strong" />
              <p className="font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
