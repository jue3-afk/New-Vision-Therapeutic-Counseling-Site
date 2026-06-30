'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Mail, Phone } from 'lucide-react'
import { BookButton } from '@/components/book-button'
import { siteContent } from '@/lib/site-content'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email address'),
  subject: z.string().min(2, 'Add a short subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-balance">
              Contact
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Reach out to schedule a consultation or ask a question about services, availability, or next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid gap-16 xl:grid-cols-[1.2fr_0.8fr] xl:gap-20">
          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              <div className="border-l-4 border-primary/30 pl-5">
                <Phone className="mb-4 w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <a href={siteContent.phoneHref} className="text-muted-foreground transition-colors hover:text-primary">
                  {siteContent.phoneDisplay}
                </a>
              </div>

              <div className="border-l-4 border-primary/30 pl-5">
                <Mail className="mb-4 w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a href={`mailto:${siteContent.contactEmail}`} className="text-muted-foreground transition-colors hover:text-primary">
                  {siteContent.contactEmail}
                </a>
              </div>

              <div className="border-l-4 border-primary/30 pl-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Verified Profile</h3>
                <div className="mt-4">
                  <a href="https://www.psychologytoday.com/profile/395428" className="sx-verified-seal"></a>
                  <script
                    type="text/javascript"
                    src="https://member.psychologytoday.com/verified-seal.js"
                    data-badge="14"
                    data-id="395428"
                    data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xNC9wcm9maWxlLzM5NTQyOD9jYWxsYmFjaz1zeGNhbGxiYWNr"
                  ></script>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-input/50 bg-card/80 p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-foreground">Send a message</h2>
              <p className="mt-3 text-muted-foreground">Use this form to send your question or comment directly to the practice inbox.</p>
              <ContactForm />
            </div>
          </div>

          <div className="rounded-3xl border border-input/50 bg-secondary/70 p-8 shadow-sm">
            <h2 className="text-3xl font-semibold text-foreground">Book a consultation</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {siteContent.contactCta}
            </p>
            <div className="mt-8">
              <BookButton variant="large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setStatus('sending')
    setStatusMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const payload = await response.json()
        throw new Error(payload?.error || 'Failed to send message')
      }

      setStatus('success')
      setStatusMessage('Your message was sent successfully. We will respond soon.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setStatusMessage(
        error instanceof Error ? error.message : 'Unable to send your message. Please try again later.',
      )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Reason for reaching out" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your comment or question here..." rows={6} {...field} />
              </FormControl>
              <FormDescription>Include any details about your needs or appointment preferences.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {statusMessage ? (
          <div
            className={`rounded-2xl border p-4 text-sm ${
              status === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-destructive/30 bg-destructive/10 text-destructive-900'
            }`}
          >
            {statusMessage}
          </div>
        ) : null}

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </Form>
  )
}
