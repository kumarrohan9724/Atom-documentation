"use client"

import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import useDisableRightClick from './useDisableRightClick';

export default function Footer() {
  useDisableRightClick(); // Disable right-click on images

  return (
    <motion.footer
      className="bg-background border-t border-border py-12 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <motion.div
          className="md:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/" className="inline-flex items-center mb-4">
            <img
              src="/Logo.webp"
              alt="Chayachobi Logo"
              className="w-16 h-16 object-cover rounded-full shadow-lg"
            />
          </Link>
          <p className="text-muted-foreground max-w-xs mb-4">
            Welcome to Chayachobi. Since 2022, we’ve captured moments that turn into timeless memories.
          </p>

          {/* Social Icons + ThemeToggle */}
          <div className="flex items-center space-x-4 mt-2">
            <motion.a
              href="https://www.instagram.com/chayachobi_india/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={28} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/Chayachobi07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={28} />
            </motion.a>

            {/* Theme toggle button */}
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-2xl mb-4">Contact</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-primary" /> 9064142143
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-primary" /> 
              <a href="mailto:chayachobi2022@gmail.com" className="hover:text-primary">
                chayachobi2022@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={20} className="text-primary" /> Katwa, Purba Barddhaman, 713130
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
        <motion.p
          className="text-center text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Chayachobi. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
