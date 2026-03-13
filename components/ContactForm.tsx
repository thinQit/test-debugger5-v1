"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import Textarea from "@/components/ui/textarea";

interface ContactFormProps {
  apiRoute?: string;
}

export default function ContactForm({ apiRoute = "/api/contact" }: Partial<ContactFormProps>) {
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-4 rounded-xl border bg-card p-6 shadow-md"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData(e.currentTarget);
        await fetch(apiRoute, { method: "POST", body: JSON.stringify(Object.fromEntries(fd.entries())) });
        setLoading(false);
      }}
    >
      <Input name="name" required placeholder="Your name" />
      <Input name="email" required type="email" placeholder="Email address" />
      <Select name="topic" defaultValue="General Inquiry">
        <option>General Inquiry</option>
        <option>Private Events</option>
        <option>Catering</option>
        <option>Press</option>
      </Select>
      <Textarea name="message" required placeholder="How can we help?" />
      <Button type="submit" disabled={loading} className="bg-[#722F37] text-white">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
