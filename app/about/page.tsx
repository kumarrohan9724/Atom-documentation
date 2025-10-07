"use client"

import Image from "next/image"
import { ArrowRight, Camera, Award, Users, Heart } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/covers/Img7.jpg"
          alt="About Chayachobi"
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">About Chayachobi</h1>
          <p className="text-white/90 text-lg max-w-2xl">Where every frame tells a story.</p>
        </motion.div>
      </section>
      <div className="header-height"></div>

      {/* Bio Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/covers/Img3.jpg"
              alt="Photographer portrait"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-primary mb-4">
              Welcome to Chayachobi. Founded in 2022, our journey began with a simple yet profound love for capturing
              fleeting moments and transforming them into timeless memories. We are storytellers at heart, dedicated to
              the art of visual narrative.
            </p>
            <p className="text-primary mb-4">
              We believe every picture holds a piece of time — a reflection of beauty, culture, and the raw emotions
              that define our lives. Our passion is to find these stories in every click of the shutter, preserving
              them with the care and artistry they deserve.
            </p>
            <p className="text-primary mb-6">
              From the quiet intimacy of personal portraits to the vibrant energy of grand celebrations, our mission is
              to create images that resonate deeply and stay close to the heart for generations to come.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Camera size={20} className="text-primary" />
                <span className="text-primary">High-End Digital & Film</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary" />
                <span className="text-primary">Portraits & Celebrations</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={20} className="text-primary" />
                <span className="text-primary">Passion-Driven Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-primary" />
                <span className="text-primary">5-Star Client Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emotion",
                description:
                  "Our primary focus is to capture the genuine emotion of a moment. We seek the unscripted laughs, the quiet tears, and the heartfelt glances that tell the real story.",
              },
              {
                title: "Timelessness",
                description:
                  "We create images that transcend trends. Our editing and composition style is classic and clean, ensuring your memories feel as fresh in 30 years as they do today.",
              },
              {
                title: "Connection",
                description:
                  "Photography is a collaboration. We strive to build a genuine connection with you, creating a comfortable space where your true self can shine through the lens.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-primary dark:text-primary-secondary bg-primary-secondary dark:bg-primary p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-primary-secondary dark:text-primary-foreground text-xl mb-4">{item.title}</h3>
                <p className="text-primary-secondary dark:text-primary-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              year: "2022",
              title: "The Beginning",
              description:
                "Chayachobi was founded with a mission to turn moments into timeless memories, starting with local portraits and intimate events.",
            },
            {
              year: "2023",
              title: "Expanding Our Canvas",
              description:
                "We expanded our services to include grand celebrations and brand storytelling, helping more clients preserve their most important milestones.",
            },
            {
              year: "2024",
              title: "Studio Opening",
              description:
                "Opened our first dedicated studio space, allowing for creative portrait sessions and client consultations in a personalized environment.",
            },
            {
              year: "Present",
              title: "Continuing the Story",
              description:
                "We continue to innovate and grow, constantly seeking new ways to frame the beauty of life while staying true to our core mission of heartfelt storytelling.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl">{item.year}</h3>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-medium text-2xl mb-2">{item.title}</h4>
                <p className="text-primary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">Let's Tell Your Story</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">
            Whether you're planning a wedding, a family portrait, or need creative content, we would be honored to
            help you frame your story.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>
            Get in Touch
          </AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}