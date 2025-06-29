import { NetworkSection } from "@/components/network"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function OmunactionsWebsite() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">Omunactions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Next-Generation
                  <span className="text-emerald-600"> Telecommunications</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Connecting businesses and communities with reliable, high-speed telecommunications infrastructure.
                  From fiber networks to wireless solutions, we deliver the connectivity you need.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Our Telecommunications Services
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive telecommunications solutions designed to keep you connected with cutting-edge technology
                  and reliable infrastructure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <CardHeader>
                  <Zap className="h-10 w-10 text-emerald-600" />
                  <CardTitle>Fiber Network Infrastructure</CardTitle>
                  <CardDescription>
                    High-speed fiber optic networks delivering ultra-fast internet and data transmission for businesses
                    and residential areas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Fiber Installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Network Maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Speed Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-emerald-600" />
                  <CardTitle>Business Communications</CardTitle>
                  <CardDescription>
                    Complete business communication solutions including VoIP, video conferencing, and unified
                    communications platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      VoIP Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Video Conferencing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Unified Communications
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <CardHeader>
                  <Star className="h-10 w-10 text-emerald-600" />
                  <CardTitle>Wireless & Mobile Solutions</CardTitle>
                  <CardDescription>
                    Advanced wireless infrastructure and mobile connectivity solutions for seamless communication
                    anywhere.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      5G Networks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Cell Tower Installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Mobile Device Management
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Network Coverage Section */}
        <NetworkSection />

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Leading Telecommunications Provider
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With decades of experience in telecommunications infrastructure, we've built and maintained networks
                    that connect millions of users. Our commitment to reliability and innovation makes us the trusted
                    choice for connectivity solutions.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">24/7 Network Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">Scalable Infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-medium">Expert Technical Support</span>
                  </div>
                </div>
                <Button className="w-fit bg-emerald-600 hover:bg-emerald-700">Learn About Our Process</Button>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 lg:order-last flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-24 w-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">1M+ Connections</h3>
                  <p className="text-gray-600">
                    Reliable telecommunications infrastructure serving communities nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Get In Touch</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First name
                          </label>
                          <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last name
                          </label>
                          <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea className="min-h-[100px]" id="message" placeholder="Tell us about your project..." />
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-gray-600">info@omunactions.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Office</p>
                          <p className="text-sm text-gray-600">
                            123 Business Ave, Suite 100
                            <br />
                            New York, NY 10001
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2024 Omunactions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
