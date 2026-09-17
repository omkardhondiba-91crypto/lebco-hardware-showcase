import { useMemo, useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { businessInfo, products } from "@/data/products";

type FormState = {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const messageHref = useMemo(() => {
    const text = [
      "Hello LEBCO, I would like to send an enquiry.",
      form.name ? `Name: ${form.name}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.email ? `Email: ${form.email}` : "",
      form.product ? `Product Interested In: ${form.product}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [form]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: Errors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.product) nextErrors.product = "Please select a product.";
    if (!form.message.trim()) nextErrors.message = "Please enter your message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-5 shadow-catalogue-sm sm:p-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
          <Input id="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className="mt-2" />
          {errors.name ? <p id="name-error" className="mt-2 text-sm text-destructive">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
          <Input id="phone" type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className="mt-2" />
          {errors.phone ? <p id="phone-error" className="mt-2 text-sm text-destructive">{errors.phone}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
          <Input id="email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className="mt-2" />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-destructive">{errors.email}</p> : null}
        </div>
        <div>
          <label id="product-label" className="text-sm font-medium text-foreground">Product Interested In</label>
          <Select value={form.product} onValueChange={(value) => updateField("product", value)}>
            <SelectTrigger className="mt-2" aria-labelledby="product-label" aria-invalid={Boolean(errors.product)}>
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.slug} value={product.name}>{product.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.product ? <p className="mt-2 text-sm text-destructive">{errors.product}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
          <Textarea id="message" value={form.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className="mt-2 min-h-32" />
          {errors.message ? <p id="message-error" className="mt-2 text-sm text-destructive">{errors.message}</p> : null}
        </div>
      </div>

      {submitted ? (
        <div className="mt-5 rounded-md border border-accent bg-accent-soft p-4 text-sm leading-6 text-foreground" role="status">
          Your enquiry is ready. Please use WhatsApp, call or email to send it to LEBCO.
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button type="submit">Prepare Enquiry</Button>
        <Button asChild variant="outline">
          <a href={messageHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> Send on WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
}
