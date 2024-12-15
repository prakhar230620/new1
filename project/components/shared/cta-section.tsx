"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-accent text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join us in shaping the future of innovation. Let&apos;s transform your ideas into reality.
        </p>
        <Button
          asChild
          className="bg-white text-accent hover:bg-gray-100"
        >
          <a href="/contact">Contact Us Today</a>
        </Button>
      </motion.div>
    </section>
  );
}