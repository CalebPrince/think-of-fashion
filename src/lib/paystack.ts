export type PaystackTransaction = {
  reference: string
  status: string
  [key: string]: unknown
}

type PaystackNewTransactionOptions = {
  key: string
  email: string
  amount: number
  currency?: string
  ref?: string
  metadata?: Record<string, unknown>
  onSuccess?: (transaction: PaystackTransaction) => void
  onCancel?: () => void
  onError?: (error: { message: string }) => void
}

declare global {
  interface Window {
    PaystackPop?: new () => {
      newTransaction: (options: PaystackNewTransactionOptions) => void
    }
  }
}

export const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY ?? ''

export function isPaystackConfigured() {
  return Boolean(PAYSTACK_PUBLIC_KEY) && PAYSTACK_PUBLIC_KEY.startsWith('pk_')
}

export function payWithPaystack(
  options: Omit<PaystackNewTransactionOptions, 'key'>
) {
  if (!window.PaystackPop) {
    throw new Error(
      'Paystack failed to load. Check your internet connection and try again.'
    )
  }
  const popup = new window.PaystackPop()
  popup.newTransaction({ key: PAYSTACK_PUBLIC_KEY, ...options })
}

export function generateReference(prefix = 'TOF') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
}
