import { siteConfig } from "@/lib/constants";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bilal Abubakari",
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.jpg`,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    jobTitle: "Fullstack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "AmaliTech Services GmbH",
    },
    description: siteConfig.description,
    knowsAbout: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Spring Boot",
      "Software Architecture",
      "Enterprise Software Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Ghana",
    },
    nationality: {
      "@type": "Country",
      name: "Ghana",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: "Bilal Abubakari",
    },
  };
}

