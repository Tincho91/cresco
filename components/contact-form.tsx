"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server here
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      // Reset form after successful submission
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#084CA1]"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-gray-700 mb-2">
            Azienda *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#084CA1]"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#084CA1]"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#084CA1]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-2">
          Oggetto *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#084CA1]"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#084CA1]"
          required
        ></textarea>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleCheckboxChange}
          className="mt-1 mr-2"
          required
        />
        <label htmlFor="privacy" className="text-sm text-gray-700">
          Ho letto e accetto la{" "}
          <a href="#" className="text-[#084CA1] underline">
            Privacy Policy
          </a>{" "}
          *
        </label>
      </div>

      {submitStatus === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Messaggio inviato con successo! Ti risponderemo al più presto.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Si è verificato un errore nell'invio del messaggio. Riprova più tardi.
        </div>
      )}

      <button
        type="submit"
        className="bg-[#084CA1] text-white px-6 py-3 font-bold hover:bg-[#084CA1]/90 transition-colors disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Invio in corso..." : "INVIA MESSAGGIO"}
      </button>
    </form>
  )
}

