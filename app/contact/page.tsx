'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@kreativekommit.com',
    href: 'mailto:hello@kreativekommit.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+44 7490 006357',
    href: 'tel:+447490006357',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Lancashire, UK',
    href: '#',
  },
];

const projectTypes = [
  'Website Redesign',
  'E-commerce Platform',
  'Mobile App',
  'SEO Optimisation',
  'Performance Audit',
  'Ongoing Maintenance',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data before sending
      if (!formData.name || !formData.email || !formData.projectType || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Create a clean form data object
      const cleanFormData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message.trim(),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanFormData),
      });

      if (response.ok) {
        const result = await response.json();
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact KreativeKommit',
    description: 'Get in touch with KreativeKommit for your web design and development needs',
    url: 'https://kreativekommit.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'KreativeKommit',
      email: 'hello@kreativekommit.com',
      telephone: '+447490006357',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lancashire',
        addressRegion: 'UK',
        addressCountry: 'GB',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-primary-100">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
                  Let's Talk
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Whether you're starting from scratch or need to revamp your existing website,
                  we're here to help bring your vision to life.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-center space-x-4 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-800 dark:text-primary-300">
                        {info.title}
                      </div>
                      {info.href === '#' ? (
                        <div className="text-gray-600 dark:text-gray-400">{info.value}</div>
                      ) : (
                        <a
                          href={info.href}
                          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-600 mr-2" />
                    Quick Response
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    We typically respond within 24 hours and offer free initial consultations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-black dark:text-primary-100">
                    Start Your Project
                  </CardTitle>
                  <CardDescription className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Tell us about your project and we'll get back to you with a detailed proposal.
                  </CardDescription>

                </CardHeader>

                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-black dark:text-primary-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-primary-700 dark:text-white transition-colors"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-black dark:text-primary-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-primary-700 dark:text-white transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-black dark:text-primary-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-primary-700 dark:text-white transition-colors"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-black dark:text-primary-300 mb-2">
                            Project Type *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleInputChange}
                           className="w-full px-4 py-3 border border-primary-200 rounded-lg text-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-primary-700 transition-colors"

                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-black dark:text-primary-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg text-gray-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-primary-700 transition-colors"

                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under £5,000</option>
                          <option value="5k-10k">£5,000 - £10,000</option>
                          <option value="10k-25k">£10,000 - £25,000</option>
                          <option value="25k-50k">£25,000 - £50,000</option>
                          <option value="50k-plus">£50,000+</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black dark:text-primary-300 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-primary-700 dark:text-white transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}