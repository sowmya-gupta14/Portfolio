"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Get In Touch</h2>
        <p className="text-base text-muted-foreground mb-8">
          Have a question or want to collaborate? Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-muted/30 p-6 rounded-lg border border-border">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="What is this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Your message..."
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          {submitStatus === "success" && (
            <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-md p-3">
              ✓ Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
              ✗ Failed to send message. Please try again or reach out directly.
            </p>
          )}
        </form>

        <div className="space-y-3 mt-6">
          <a
            href="mailto:sowmya14gupta@gmail.com"
            className="block p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-base font-semibold group-hover:text-primary transition-colors">
              sowmya14gupta@gmail.com
            </p>
          </a>
          <a
            href="tel:+917838649696"
            className="block p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group"
          >
            <p className="text-xs text-muted-foreground mb-1">Phone</p>
            <p className="text-base font-semibold group-hover:text-primary transition-colors">+91 7838649696</p>
          </a>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/sowmya-gupta-585045239"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.424-.103.249-.129.597-.129.946v5.435h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.713 0-.951.77-1.713 1.958-1.713 1.187 0 1.915.762 1.915 1.713 0 .952-.728 1.713-1.958 1.713zm1.581 11.597H3.635V9.579h3.283v10.873zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/sowmya-gupta14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/sowmya_14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <span className="sr-only">LeetCode</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.102 17.93h-2.995v-5.304h2.995v5.304zM17.712 12.73h-2.996V9.43h2.996v3.3zM20.474 2H3.526c-.98 0-1.774.796-1.774 1.774v16.452c0 .98.794 1.774 1.774 1.774h16.948c.98 0 1.774-.794 1.774-1.774V3.774c0-.978-.794-1.774-1.774-1.774zM8.885 18.38c-.633 0-1.146-.514-1.146-1.147s.514-1.146 1.146-1.146 1.147.514 1.147 1.146-.514 1.147-1.147 1.147z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
