import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { businessInfo, whatsappHref } from "@/data/products";
import { SpecTable } from "@/components/site/SpecTable";

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rounded-lg border border-border bg-card p-5">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 leading-6">
            <CheckCircle aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-strong" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  return (
    <main>
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-catalogue-sm">
            <img src={product.image} alt={`${product.name} product placeholder`} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">LEBCO Product Catalogue</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-5xl">{product.name}</h1>
            {product.title ? <p className="mt-4 text-base font-medium leading-7 text-foreground">{product.title}</p> : null}
            <p className="mt-5 text-base leading-8 text-muted-foreground">{product.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> Enquire Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={businessInfo.phoneHref}>Call {businessInfo.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <div className="space-y-6">
            <DetailList title="Features" items={product.features} />
            {product.specifications?.map((table) => <SpecTable key={table.title} table={table} />)}
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
              <h2 className="text-lg font-semibold text-foreground">Product Summary</h2>
              <dl className="mt-4 space-y-4 text-sm">
                {product.sizes ? (
                  <div>
                    <dt className="font-medium text-foreground">Sizes</dt>
                    <dd className="mt-1 text-muted-foreground">{product.sizes.join(" / ")}</dd>
                  </div>
                ) : null}
                {product.materials ? (
                  <div>
                    <dt className="font-medium text-foreground">Materials</dt>
                    <dd className="mt-1 text-muted-foreground">{product.materials.join(", ")}</dd>
                  </div>
                ) : null}
                {product.colours ? (
                  <div>
                    <dt className="font-medium text-foreground">Colours</dt>
                    <dd className="mt-1 text-muted-foreground">{product.colours.join(", ")}</dd>
                  </div>
                ) : null}
                {product.warranty ? (
                  <div>
                    <dt className="font-medium text-foreground">Warranty</dt>
                    <dd className="mt-1 text-muted-foreground">{product.warranty}</dd>
                  </div>
                ) : null}
                {product.packageContents ? (
                  <div>
                    <dt className="font-medium text-foreground">Package</dt>
                    <dd className="mt-1 text-muted-foreground">{product.packageContents}</dd>
                  </div>
                ) : null}
              </dl>
              <Button asChild className="mt-6 w-full">
                <a href={whatsappHref(product.name)} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> Enquire on WhatsApp
                </a>
              </Button>
            </section>
            <Button asChild variant="outline" className="w-full">
              <Link to="/products">
                View All Products <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </aside>
        </div>
      </section>
    </main>
  );
}
