import { createFileRoute } from "@tanstack/react-router";

import { ProductGrid } from "@/components/site/ProductGrid";
import { SectionHeader } from "@/components/site/SectionHeader";
import { products } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LEBCO Hardware Catalogue" },
      {
        name: "description",
        content:
          "Browse LEBCO product range including Thali Stand, PVC Cutlery, Pullout, Pantry, Anti Slip Matt, Magic Corner, Wicker Basket, Bed Fitting and Table Bracket.",
      },
      { property: "og:title", content: "Products — LEBCO Hardware Catalogue" },
      {
        property: "og:description",
        content: "Browse LEBCO's practical hardware product range for kitchens, furniture and utility applications.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main>
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="LEBCO Catalogue"
            title="Our Product Range"
            description="Explore LEBCO's range of practical hardware solutions. Select any product to view details and specifications."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
