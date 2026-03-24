"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui";
import { education } from "@/data/resume";

export function EducationSection() {
  return (
    <Section id="education" className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Education</SectionTitle>
            <SectionDescription>
              My academic background and continuous learning journey.
            </SectionDescription>
          </motion.div>
        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                <GraduationCap className="h-6 w-6" />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="mt-1 font-medium text-blue-600">
                  {edu.institution}
                </p>

                {/* Meta info */}
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span>Achievements</span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={`${i}-${achievement}`}
                          className="text-sm text-slate-600 dark:text-slate-400"
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Certifications placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-dashed border-slate-300 bg-slate-50/50 p-6 dark:border-slate-700 dark:bg-slate-900/50"
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-200 text-slate-500 dark:bg-slate-800">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-700 dark:text-slate-300">
                Continuous Learning
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Regularly completing courses and certifications in cloud
                technologies, system design, and emerging frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

