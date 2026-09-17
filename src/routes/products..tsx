import { createFileRoute, notFound } from "@tanstack/react-router";

import { ProductDetail } from "@/components/site/ProductDetail";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/products/")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    const title = product ? `${product.name} — LEBCO Product Details` : "Product Details — LEBCO";
    const description = product
      ? `View ${product.name} details, specifications and enquiry options from LEBCO.`
      : "View LEBCO product details and enquiry options.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
