// components/contact/ContactForm.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Set loading state immediately
    setFormState({ status: 'loading' })

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      console.log('Emails sent successfully')
      setFormState({ 
        status: 'success',
        message: 'Thank you for reaching out. We\'ll get back to you within 24 hours.'
      })

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormState({ status: 'idle' })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        })
      }, 5000)

    } catch (error) {
      console.error('Error sending message:', error)
      setFormState({ 
        status: 'error',
        message: error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again.'
      })

      // Clear error state after 5 seconds
      setTimeout(() => {
        setFormState({ status: 'idle' })
      }, 5000)
    }
  }

  const handleChange = (field: string, value: string) => {
    // Only allow changes when not loading or in success state
    if (formState.status !== 'loading' && formState.status !== 'success') {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const isDisabled = formState.status === 'loading' || formState.status === 'success'

  // Success state
  if (formState.status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          {formState.message}
        </p>
      </motion.div>
    )
  }

  // Error state
  if (formState.status === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8 text-center"
      >
        <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-2">
          Failed to Send Message
        </h3>
        <p className="text-red-700 dark:text-red-300 mb-4">
          {formState.message}
        </p>
        <Button 
          onClick={() => setFormState({ status: 'idle' })}
          variant="outline"
          className="border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-300 dark:hover:bg-red-900/20"
        >
          Try Again
        </Button>
      </motion.div>
    )
  }

  return (
    <Card className={`border-0 bg-card/50 backdrop-blur-sm transition-opacity duration-200 ${
      formState.status === 'loading' ? 'opacity-75' : 'opacity-100'
    }`}>
      <CardHeader>
        <CardTitle className="text-2xl">Start Your Project</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your project and we&apos;ll get back to you with a detailed proposal.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe"
                disabled={isDisabled}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="john@example.com"
                disabled={isDisabled}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                disabled={isDisabled}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Your Company"
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Service Interested In</Label>
              <Select 
                value={formData.service} 
                onValueChange={(value) => handleChange('service', value)}
                disabled={isDisabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                  <SelectItem value="web-app">Web Application</SelectItem>
                  <SelectItem value="ecommerce">E-commerce Solution</SelectItem>
                  <SelectItem value="erp">ERP System</SelectItem>
                  <SelectItem value="iot">IoT Solution</SelectItem>
                  <SelectItem value="consulting">IT Consulting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Description *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell us about your project requirements, goals, and timeline..."
              rows={5}
              disabled={isDisabled}
              required
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full" 
            disabled={isDisabled}
          >
            {formState.status === 'loading' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>

          {/* Loading state overlay for visual feedback */}
          {formState.status === 'loading' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-lg flex items-center justify-center"
            >
              <div className="bg-background border rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  <span className="text-sm font-medium">Sending your message...</span>
                </div>
              </div>
            </motion.div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
