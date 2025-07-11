"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Image from "next/image"

// Import the background image correctly
import bgImage from "../../pictures/background/about-us.jpg"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-cover bg-center relative">
        {/* Background Image with Next.js Image component */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-slate-800 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5DEB3]">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to assist you! Whether you have questions, feedback, or need support, reach out to us and we&apos;ll respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="mt-1 h-32"
                    />
                  </div>
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531676!3d-37.81627927975175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e4d1a7f1c8!2s123%20Collins%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1698791234567!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-900">Contact Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Reach out to us through your preferred method. We&apos;re always here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-10 w-10 text-slate-900 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
                <p className="text-gray-600">Mon-Fri, 9AM-5PM</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <Mail className="h-10 w-10 text-slate-900 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">support@datacellular.com</p>
                <p className="text-gray-600">24/7 Support</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <MapPin className="h-10 w-10 text-slate-900 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">123 Commerce Street</p>
                <p className="text-gray-600">Melbourne, VIC 3000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Need Help? We&apos;re Here!</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Contact us anytime for assistance with your shopping needs or inquiries about our products.
          </p>
          <Button className="bg-white text-slate-900 hover:bg-gray-100 px-6 py-3 text-base">
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  )
}