"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";

interface ReservationFormProps {
  apiRoute?: string;
}

export default function ReservationForm({ apiRoute = "/api/reservation" }: Partial<ReservationFormProps>) {
  const [loading, setLoading] = useState(false);

  return (
    <form
      id="reservation-form"
      className="space-y-4 rounded-xl border bg-card p-6 shadow-md"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData(e.currentTarget);
        await fetch(apiRoute, { method: "POST", body: JSON.stringify(Object.fromEntries(fd.entries())) });
        setLoading(false);
      }}
    >
      <Input name="name" required placeholder="Full name" />
      <Input name="phone" required placeholder="Phone number" />
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="date" type="date" required />
        <Input name="time" type="time" required />
      </div>
      <Select name="partySize" defaultValue="2">
        <option value="1">1 guest</option>
        <option value="2">2 guests</option>
        <option value="4">4 guests</option>
        <option value="6">6 guests</option>
        <option value="8">8 guests</option>
        <option value="10">10 guests</option>
      </Select>
      <Button type="submit" disabled={loading} className="bg-[#722F37] text-white">
        {loading ? "Submitting..." : "Request Reservation"}
      </Button>
    </form>
  );
}
