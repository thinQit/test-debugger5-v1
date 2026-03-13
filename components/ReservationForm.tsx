'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ReservationForm() {
  const [form, setForm] = useState({ name: '', date: '', time: '', partySize: '2' })
  const [status, setStatus] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.date || !form.time) return setStatus('Please fill in required fields.')
    const res = await fetch('/api/reservations', { method: 'POST', body: JSON.stringify(form) })
    setStatus(res.ok ? 'Reservation request sent!' : 'Unable to submit request.')
  }

  return (
    <form id="reservations" onSubmit={submit} className="space-y-4 rounded-xl bg-white p-6 shadow-md">
      <Input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
      <select
        value={form.partySize}
        onChange={(e) => setForm({ ...form, partySize: e.target.value })}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        <option value="1">1 guest</option>
        <option value="2">2 guests</option>
        <option value="4">4 guests</option>
        <option value="6">6 guests</option>
      </select>
      <Button type="submit" className="bg-[#722F37] text-white hover:bg-[#5a242b]">Request Reservation</Button>
      {status && <p className="text-sm text-[#606C38]">{status}</p>}
    </form>
  )
}
