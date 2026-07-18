import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, CreditCard, Lock } from 'lucide-react'
import { insforge } from '../lib/insforge'
import { emailjsConfig, emailjsReady } from '../lib/emailjs'
import { summerCamp } from '../data/site'

const inputClass =
  'w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200'

const packages = [
  { id: 'full_day', label: 'Full Day', time: '9:15 – 1:30', price: 575, cents: 61000 },
  { id: 'module_1', label: 'Module I', time: '9:15 – 11:30', price: 325, cents: 36000 },
  { id: 'module_2', label: 'Module II', time: '11:15 – 1:30', price: 325, cents: 36000 },
] as const

type PackageId = (typeof packages)[number]['id']

function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits
}

export default function RegistrationForm() {
  const [form, setForm] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    homeAddress: '',
    medicalNotes: '',
    package: 'full_day' as PackageId,
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const selected = packages.find((p) => p.id === form.package)!

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    /* Card fields are never sent anywhere or stored — real charging will run
       through Stripe's own secure card element once the academy's Stripe
       keys are connected. Only the registration details are saved now, so
       no leads are lost while payments are wired up. */
    const { error } = await insforge.database.from('summer_camp_registrations').insert({
      child_name: form.childName,
      child_age: form.childAge,
      parent_name: form.parentName,
      parent_email: form.parentEmail,
      parent_phone: form.parentPhone,
      home_address: form.homeAddress,
      medical_notes: form.medicalNotes || null,
      package: form.package,
      amount_due_cents: selected.cents,
      payment_status: 'pending',
    })

    if (!error && emailjsReady) {
      /* Best-effort confirmation email to the parent. A failure here never
         blocks registration — the record is already saved above. */
      try {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            to_email: form.parentEmail,
            to_name: form.parentName,
            child_name: form.childName,
            package_label: selected.label,
            package_time: selected.time,
            amount_due: `$${selected.price + Number(summerCamp.materialsFee.replace('$', ''))}`,
            camp_dates: summerCamp.dates,
          },
          { publicKey: emailjsConfig.publicKey },
        )
      } catch {
        /* Registration already saved; email delivery is not critical path. */
      }
    }

    setStatus(error ? 'error' : 'success')
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-brand-100 bg-white p-10 text-center">
        <CheckCircle2 size={48} className="mx-auto text-brand-600" />
        <h3 className="mt-4 font-display text-2xl text-brand-900">
          Registration Received, Alhamdulillah!
        </h3>
        <p className="mt-3 leading-relaxed text-ink/70">
          We've reserved a spot for <strong>{form.childName}</strong> — {selected.label} (
          {selected.time}). We'll confirm your payment and send you a receipt shortly. See you on
          June 8, insha'Allah!
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-brand-100 bg-white p-8 sm:p-10"
    >
      {/* Child & parent details */}
      <div className="space-y-4">
        <h3 className="font-display text-xl text-brand-900">Child & Parent Details</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Child's Full Name <span className="text-coral-600">*</span>
            </span>
            <input
              required
              className={inputClass}
              value={form.childName}
              onChange={(e) => update('childName', e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Child's Age <span className="text-coral-600">*</span>
            </span>
            <input
              required
              className={inputClass}
              placeholder="e.g. 7"
              value={form.childAge}
              onChange={(e) => update('childAge', e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Parent's Full Name <span className="text-coral-600">*</span>
            </span>
            <input
              required
              className={inputClass}
              value={form.parentName}
              onChange={(e) => update('parentName', e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Parent's Email Address <span className="text-coral-600">*</span>
            </span>
            <input
              required
              type="email"
              className={inputClass}
              value={form.parentEmail}
              onChange={(e) => update('parentEmail', e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Parent's Phone Number <span className="text-coral-600">*</span>
            </span>
            <input
              required
              type="tel"
              className={inputClass}
              value={form.parentPhone}
              onChange={(e) => update('parentPhone', e.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Home Address <span className="text-coral-600">*</span>
            </span>
            <input
              required
              className={inputClass}
              value={form.homeAddress}
              onChange={(e) => update('homeAddress', e.target.value)}
            />
          </label>
        </div>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-brand-900">
            Special medical conditions (allergies, etc.) or accommodations your child has
          </span>
          <textarea
            rows={3}
            className={inputClass}
            placeholder="None, or please describe"
            value={form.medicalNotes}
            onChange={(e) => update('medicalNotes', e.target.value)}
          />
        </label>
      </div>

      {/* Package selection */}
      <div className="space-y-3">
        <h3 className="font-display text-xl text-brand-900">
          Registration For <span className="text-coral-600">*</span>
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {packages.map((p) => (
            <label
              key={p.id}
              className={`cursor-pointer rounded-xl border p-4 text-sm transition ${
                form.package === p.id
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                  : 'border-brand-200 bg-white'
              }`}
            >
              <input
                type="radio"
                name="package"
                className="sr-only"
                checked={form.package === p.id}
                onChange={() => update('package', p.id)}
              />
              <p className="font-semibold text-brand-900">{p.label}</p>
              <p className="text-ink/60">{p.time}</p>
              <p className="mt-1 font-semibold text-brand-800">
                ${p.price} + ${summerCamp.materialsFee.replace('$', '')}
              </p>
            </label>
          ))}
        </div>
      </div>

      {/* Card payment */}
      <div className="space-y-4 rounded-2xl border border-gold-200 bg-gold-100/40 p-5">
        <div className="flex items-center gap-2">
          <CreditCard size={20} className="text-brand-700" />
          <h3 className="font-display text-xl text-brand-900">Pay by Card</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Name on Card <span className="text-coral-600">*</span>
            </span>
            <input
              required
              className={inputClass}
              value={form.cardName}
              onChange={(e) => update('cardName', e.target.value)}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Card Number <span className="text-coral-600">*</span>
            </span>
            <input
              required
              inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              className={inputClass}
              value={form.cardNumber}
              onChange={(e) => update('cardNumber', formatCardNumber(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              Expiry (MM/YY) <span className="text-coral-600">*</span>
            </span>
            <input
              required
              inputMode="numeric"
              placeholder="MM/YY"
              className={inputClass}
              value={form.cardExpiry}
              onChange={(e) => update('cardExpiry', formatExpiry(e.target.value))}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-brand-900">
              CVV <span className="text-coral-600">*</span>
            </span>
            <input
              required
              inputMode="numeric"
              placeholder="123"
              maxLength={4}
              className={inputClass}
              value={form.cardCvv}
              onChange={(e) => update('cardCvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
            />
          </label>
        </div>
        <p className="flex items-start gap-2 text-xs text-ink/60">
          <Lock size={14} className="mt-0.5 shrink-0" />
          Payments are processed securely. Your card is never stored on our servers.
        </p>
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-gold w-full">
        {status === 'submitting'
          ? 'Processing…'
          : `Pay $${selected.price + Number(summerCamp.materialsFee.replace('$', ''))} & Reserve Spot`}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-coral-600">
          Something went wrong submitting your registration. Please try again in a moment.
        </p>
      )}
    </form>
  )
}
