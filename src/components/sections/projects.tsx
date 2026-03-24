"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button,
  GitHubIcon,
} from "@/components/ui";
import { projects } from "@/data/resume";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle>Selected Projects</SectionTitle>
            <SectionDescription>
              A selection of projects showcasing my experience building
              production-grade systems across various domains.
            </SectionDescription>
          </motion.div>
        </SectionHeader>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  {/* Case study details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                        Context
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {project.context}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                        Problem
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                        Solution
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-600">
                        Impact
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-3">
                    {project.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon className="mr-2 h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Bilal-Abubakari"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
