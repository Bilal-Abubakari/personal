"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Badge,
  Button,
} from "@/components/ui";
import { experiences } from "@/data/resume";

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Work Experience</SectionTitle>
            <SectionDescription>
              A timeline of my professional journey, including enterprise
              engagements through AmaliTech with leading German companies.
            </SectionDescription>
          </motion.div>
        </SectionHeader>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2 dark:bg-slate-800" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid gap-8 md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-0 h-3 w-3 -translate-x-1 rounded-full border-2 border-blue-600 bg-white md:left-1/2 md:-translate-x-1/2 dark:bg-slate-950" />

                {/* Content */}
                <div
                  className={`ml-6 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    {/* Header */}
                    <div
                      className={`flex flex-col gap-2 ${index % 2 === 0 ? "md:items-end" : ""}`}
                    >
                      <div
                        className={`flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.link && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            asChild
                          >
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Visit Website"
                            >
                              <ExternalLink className="h-4 w-4 text-blue-600" />
                            </a>
                          </Button>
                        )}
                      </div>
                      <div
                        className={`flex items-center gap-2 text-blue-600 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div
                      className={`mt-3 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mt-4 text-slate-600 dark:text-slate-400 ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={`${i}-${achievement}`}
                          className={`flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Outsourced projects */}
                    {exp.outsourcedTo && exp.outsourcedTo.length > 0 && (
                      <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
                        <p
                          className={`text-sm font-medium text-slate-900 dark:text-white ${index % 2 === 0 ? "md:text-right" : ""}`}
                        >
                          Enterprise Engagements:
                        </p>
                        <div className="mt-4 space-y-4">
                          {exp.outsourcedTo.map((outsourced) => (
                            <div
                              key={outsourced.company}
                              className="rounded-md bg-slate-50 p-4 dark:bg-slate-800/50"
                            >
                              <h4
                                className={`font-medium text-slate-900 dark:text-white ${index % 2 === 0 ? "md:text-right" : ""}`}
                              >
                                {outsourced.company}
                              </h4>
                              <p
                                className={`mt-1 text-sm text-slate-600 dark:text-slate-400 ${index % 2 === 0 ? "md:text-right" : ""}`}
                              >
                                {outsourced.description}
                              </p>
                              <div
                                className={`mt-2 flex flex-wrap gap-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                              >
                                {outsourced.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
