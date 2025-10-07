"use client"

import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Facebook, Globe } from "lucide-react" // Added Globe, removed unneeded
import { motion } from "framer-motion"
// Removed FeaturedCollections import
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header
      <div className="header-height"></div> */}

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/covers/Img3.jpg"
          alt="Contact Chayachobi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Contact</h1>
          <p className="text-white/90 text-lg max-w-2xl">Part of your vision</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-primary/60 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <motion.div
              className="space-y-6 mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                {
                  icon: <Mail className="text-primary mt-1" size={20} />,
                  title: "Email",
                  content: "chayachobi2022@gmail.com",
                },
                {
                    icon: <Phone className="text-primary mt-1" size={20} />,
                    title: "Phone",
                    content: "+91 9064142143",
                },
                {
                  icon: <MapPin className="text-primary mt-1" size={20} />,
                  title: "Location",
                  content: "Katwa, Purba Barddhaman, 713130",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-primary/60">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl mb-4">Keep Up To Date</h3>
              <div className="flex flex-wrap gap-1">
                {[
                  { icon: <Instagram size={26} />, label: "Instagram", href: "https://www.instagram.com/chayachobi_india/" },
                  { icon: <Facebook size={26} />, label: "Facebook", href: "https://www.facebook.com/Chayachobi07/" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-secondary rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* This is the new section with the Globe icon */}
         <motion.div
  className="flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
>
  <div className="relative w-full max-w-md h-[400px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
    <Image
      src="/covers/Img1.jpg"
      alt="Contact Chayachobi"
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
      priority
    />
  </div>
</motion.div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                question: "Do you offer prints of your photographs?",
                answer:
                  "Yes, most of my photographs are available as fine art prints. You can inquire about specific images through my social media channels or by email.",
              },
              {
                question: "Are you available for commercial photography?",
                answer:
                  "Absolutely. I work with brands and publications on commercial projects. Please reach out with details about your project for a custom quote.",
              },
              {
                question: "Do you offer photography workshops?",
                answer:
                  "Yes, I regularly host workshops both in-person and online. Follow me on social media to be notified when new workshop dates are announced.",
              },
              {
                question: "Can I license your photos for my website/publication?",
                answer:
                  "Yes, licensing options are available for both digital and print use. Please contact me with details about your intended use for licensing information.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-xl mb-2">{item.question}</h3>
                <p className="text-primary/60">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections section has been removed */}
    </div>
  )
}