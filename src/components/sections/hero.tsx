"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui";
import Image from "next/image";
import { MAX_WIDTH_CONTAINER } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className={cn("relative py-32", MAX_WIDTH_CONTAINER)}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>{" "}
              Available for opportunities
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              Building Scalable Systems with{" "}
              <span className="text-blue-600">Precision</span> and{" "}
              <span className="text-blue-600">Intent</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl lg:mx-0 dark:text-slate-400"
            >
              Fullstack Software Engineer specializing in building scalable,
              enterprise-grade systems. Currently contributing to large-scale
              solutions at Telekom through AmaliTech.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button size="lg" asChild>
                <a href="#projects">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <FileText className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100 shadow-2xl sm:h-96 sm:w-96 dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/My-profile-avatar.png"
                alt="Bilal Abubakari"
                fill
                className="object-contain"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -right-2 -bottom-2 -z-10 h-full w-full rounded-2xl border-2 border-blue-600/20" />
              <div className="absolute -right-4 -bottom-4 -z-20 h-full w-full rounded-2xl border-2 border-blue-600/10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-10 w-6 rounded-full border-2 border-slate-300 p-1 dark:border-slate-700"
            >
              <div className="mx-auto h-2 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
