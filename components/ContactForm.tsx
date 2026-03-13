'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', intent: 'general', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return setStatus('Please complete all required fields.')
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    setStatus(res.ok ? 'Message sent successfully!' : 'Something went wrong.')
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-xl bg-white p-6 shadow-md">
      <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <select
        value={form.intent}
        onChange={(e) => setForm({ ...form, intent: e.target.value })}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        <option value="general">General Inquiry</option>
        <option value="catering">Catering</option>
        <option value="private-event">Private Event</option>
      </select>
      <textarea
        placeholder="How can we help?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      <Button type="submit" className="bg-[#722F37] text-white hover:bg-[#5a242b]">Send Message</Button>
      {status && <p className="text-sm text-[#606C38]">{status}</p>}
    </form>
  )
}
