import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { categories, getCategory } from '@/data/categories'
import { site } from '@/data/site'
import {
  generateReference,
  isPaystackConfigured,
  payWithPaystack,
  type PaystackTransaction,
} from '@/lib/paystack'

type FormState = {
  name: string
  email: string
  phone: string
  category: string
  date: string
  notes: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  category: '',
  date: '',
  notes: '',
}

export default function Booking() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('category')
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    category: getCategory(preselected ?? '') ? (preselected as string) : '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [confirmed, setConfirmed] = useState<{ reference: string } | null>(null)

  const selectedCategory = useMemo(
    () => getCategory(form.category),
    [form.category]
  )

  const paystackReady = isPaystackConfigured()

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function whatsappBookingUrl(reference?: string) {
    const lines = [
      `Hi Think Of Fashion, I'd like to book a fitting.`,
      `Name: ${form.name || '—'}`,
      `Service: ${selectedCategory?.title ?? '—'}`,
      `Preferred date: ${form.date || '—'}`,
      form.notes ? `Notes: ${form.notes}` : undefined,
      reference ? `Deposit reference: ${reference}` : undefined,
    ].filter(Boolean)
    return `${site.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  function validate() {
    if (!form.name.trim()) return 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.'
    if (!form.phone.trim()) return 'Please enter a phone number.'
    if (!selectedCategory) return 'Please choose a service.'
    if (!form.date) return 'Please choose a preferred date.'
    return null
  }

  function handlePay() {
    const error = validate()
    if (error) {
      toast.error(error)
      return
    }
    if (!paystackReady) {
      toast.error(
        'Online payment is not configured yet. Please book via WhatsApp instead.'
      )
      return
    }

    setSubmitting(true)
    const reference = generateReference()

    try {
      payWithPaystack({
        email: form.email,
        amount: selectedCategory!.depositGHS * 100,
        currency: 'GHS',
        ref: reference,
        metadata: {
          name: form.name,
          phone: form.phone,
          category: selectedCategory!.slug,
          preferredDate: form.date,
          notes: form.notes,
        },
        onSuccess: (transaction: PaystackTransaction) => {
          setSubmitting(false)
          setConfirmed({ reference: transaction.reference })
          toast.success('Deposit received — your fitting request is in.')
        },
        onCancel: () => {
          setSubmitting(false)
          toast.info('Payment cancelled.')
        },
        onError: (err) => {
          setSubmitting(false)
          toast.error(err.message || 'Payment failed. Please try again.')
        },
      })
    } catch (err) {
      setSubmitting(false)
      toast.error(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (confirmed) {
    return (
      <section className="container-page flex min-h-[70dvh] flex-col items-center justify-center gap-5 pb-24 pt-32 text-center">
        <CheckCircle2 className="size-14 text-accent" />
        <h1 className="text-3xl font-medium sm:text-4xl">Booking request received</h1>
        <p className="max-w-md text-muted-foreground">
          Thanks, {form.name.split(' ')[0]}. Your deposit reference is{' '}
          <span className="font-medium text-foreground">{confirmed.reference}</span>.
          We'll reach out on WhatsApp or by phone within 24 hours to confirm your
          fitting.
        </p>
        <a
          href={whatsappBookingUrl(confirmed.reference)}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-base font-medium text-accent-foreground hover:bg-accent/90"
        >
          <WhatsAppIcon className="size-4" />
          Send Details on WhatsApp
        </a>
      </section>
    )
  }

  return (
    <section className="container-page pb-16 pt-32 sm:pb-24 sm:pt-36">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Book a Fitting
          </span>
          <h1 className="mt-3 text-4xl font-medium sm:text-5xl">
            Reserve your consultation
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            A deposit secures your date and covers your first fitting. The
            balance is settled after your session, before delivery.
          </p>

          <form
            className="mt-10 flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault()
              handlePay()
            }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+233 24 000 0000"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Service</Label>
                <Select
                  value={form.category}
                  onValueChange={(v) => updateField('category', v)}
                >
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.slug} value={cat.slug}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date">Preferred date</Label>
                <Input
                  id="date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={form.date}
                  onChange={(e) => updateField('date', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Occasion, measurements you already have, travel location, etc."
                value={form.notes}
                onChange={(e) => updateField('notes', e.target.value)}
              />
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                disabled={submitting}
                className="h-12 flex-1 rounded-md bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
              >
                {submitting
                  ? 'Processing…'
                  : `Pay Deposit${
                      selectedCategory ? ` — GHS ${selectedCategory.depositGHS.toLocaleString()}` : ''
                    }`}
              </Button>
              <Button
                type="button"
                variant="outline"
                asChild
                className="h-12 flex-1 gap-2 rounded-md px-6 text-base"
              >
                <a href={whatsappBookingUrl()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4" />
                  Book via WhatsApp
                </a>
              </Button>
            </div>

            {!paystackReady && (
              <p className="text-xs text-muted-foreground">
                Online payment isn't set up yet — use "Book via WhatsApp" and
                we'll confirm your deposit directly.
              </p>
            )}
          </form>
        </div>

        <aside className="h-max rounded-lg border border-border bg-card p-6">
          <h2 className="font-serif text-xl">Deposit Guide</h2>
          <div className="mt-4 flex flex-col gap-3">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm transition-colors ${
                  form.category === cat.slug
                    ? 'border-accent bg-accent/5'
                    : 'border-border'
                }`}
              >
                <span>{cat.title}</span>
                <span className="font-medium">
                  GHS {cat.depositGHS.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Deposits are applied to your final invoice. Fully refundable if
            cancelled more than 48 hours before your fitting.
          </p>
        </aside>
      </div>
    </section>
  )
}
