import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/button";
import { businessInfo, whatsappHref } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LEBCO — Phone, WhatsApp, Email and Address" },
      {
        name: "description",
        content:
          "Contact LEBCO for hardware product enquiries by phone, WhatsApp or email. View business hours and Bhiwandi address.",
      },
      { property: "og:title", content: "Contact LEBCO — Phone, WhatsApp, Email and Address" },
      {
        property: "og:description",
        content: "Contact LEBCO for hardware product enquiries by WhatsApp, phone or email.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section className="border-b border-border bg-catalogue-panel">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="Contact LEBCO"
            title="Product Enquiries"
            description="Reach LEBCO through WhatsApp, phone or email for product information and catalogue enquiries."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8 lg:py-16">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "Phone", value: businessInfo.phone, href: businessInfo.phoneHref },
            { icon: MessageCircle, label: "WhatsApp", value: businessInfo.whatsapp, href: whatsappHref(), external: true },
            { icon: Mail, label: "Email", value: businessInfo.email, href: businessInfo.emailHref },
            { icon: MapPin, label: "Address", value: businessInfo.address },
            { icon: Clock, label: "Business Hours", value: businessInfo.hours },
          ].map((item) => (
            <section key={item.label} className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm">
              <div className="flex gap-3">
                <item.icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-strong" />
                <div>
                  <h2 className="font-semibold text-foreground">{item.label}</h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="mt-1 block break-words text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 leading-7 text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            </section>
          ))}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <Button asChild>
              <a href={businessInfo.phoneHref}>Call</a>
            </Button>
            <Button asChild>
              <a href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp</a>
            </Button>
            <Button asChild variant="outline">
              <a href={businessInfo.emailHref}>Email</a>
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Enquiry Form</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Fill the details below to prepare an enquiry message. Use WhatsApp, call or email to send it to LEBCO.
          </p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
