"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary to-[#2A4E6E] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The New Innovation Reality
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Transforming ideas into reality through cutting-edge technology and innovative solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90"
            >
              <a href="/contact">Get Started</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 hover:bg-white/20"
            >
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}