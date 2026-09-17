import { MessageCircle } from "lucide-react";

import { whatsappHref } from "@/data/products";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact LEBCO on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-catalogue transition hover:-translate-y-0.5 hover:shadow-catalogue-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  );
}
