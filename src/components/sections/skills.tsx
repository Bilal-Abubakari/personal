"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Boxes,
  Database,
  Settings,
  Users,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Badge,
} from "@/components/ui";
import { skills } from "@/data/resume";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  Architecture: <Boxes className="h-5 w-5" />,
  Databases: <Database className="h-5 w-5" />,
  "DevOps & Tools": <Settings className="h-5 w-5" />,
  Practices: <Users className="h-5 w-5" />,
};

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Technical Expertise</SectionTitle>
            <SectionDescription>
              A comprehensive overview of my technical skills, organized by
              domain and proficiency level.
            </SectionDescription>
          </motion.div>
        </SectionHeader>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                  {categoryIcons[skillGroup.category] || (
                    <Code2 className="h-5 w-5" />
                  )}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional expertise note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30"
        >
          <p className="text-center text-slate-700 dark:text-slate-300">
            <span className="font-medium">Continuous Learning:</span> I actively
            stay updated with emerging technologies and best practices through
            documentation, technical blogs, and hands-on experimentation. My
            approach to learning emphasizes understanding fundamentals deeply
            before adopting new tools.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

