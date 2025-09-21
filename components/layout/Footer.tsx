"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import MocoitLogoWhite from "@/public/logo/MOCOIT_Logo_white.png"
import MocoitLogoBlack from "@/public/logo/MOCOIT_Logo.png"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={MocoitLogoWhite}
                  alt="MOCOIT Labs"
                  width={140}
                  height={40}
                  className="hidden dark:block h-8 w-auto"
                  priority
                />
                <Image
                  src={MocoitLogoBlack}
                  alt="MOCOIT Labs"
                  width={140}
                  height={40}
                  className="block dark:hidden h-8 w-auto"
                  priority
                />
              </Link>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Your trusted partner for digital transformation across mobile, cloud, and IoT solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="md:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm block"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 md:justify-end">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@mocoitlabs.com</span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+91 9496330047</span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Kerala, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground text-sm">
                © 2024 MOCOIT Labs LLP. All rights reserved.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Button variant="ghost" size="sm" onClick={scrollToTop}>
                <ArrowUp className="w-4 h-4 mr-1" />
                Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
