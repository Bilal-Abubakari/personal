"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, SectionTitle } from "@/components/ui";

export function AboutSection() {
  return (
    <Section id="about" className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>
              Engineering with Structure. Delivering with Impact.
            </SectionTitle>
          </motion.div>
        </SectionHeader>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I am a fullstack software engineer with over five years of
              experience designing and delivering scalable, production-grade
              systems. My work spans enterprise e-commerce platforms, industrial
              configuration systems, telemedicine applications, and real-time
              booking platforms.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Through AmaliTech, I have contributed to international teams and
              German enterprises including Diva-e, Igus, and Telekom. My
              experience working in structured Scrum environments has
              strengthened my ability to deliver reliable, maintainable software
              under real-world constraints.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I believe good engineering is not just about writing code — it is
              about clarity, maintainability, scalability, and long-term
              thinking.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I approach every system with architectural discipline, performance
              awareness, and strong attention to detail.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 dark:border-slate-800">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  5+
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Years of Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  10+
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  5+
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Enterprise Clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
