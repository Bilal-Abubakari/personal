import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/ui";
import { siteConfig, MAX_WIDTH_CONTAINER } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
			<div className={cn(MAX_WIDTH_CONTAINER, "py-12")}>
				<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
					{/* Brand */}
					<div className="flex flex-col items-center gap-2 md:items-start">
						<Link
							href="/"
							className="text-lg font-semibold text-slate-900 dark:text-white"
						>
							{siteConfig.name.split(" ")[0]}
							<span className="text-blue-600">.</span>
						</Link>
						<p className="text-sm text-slate-600 dark:text-slate-400">
							Building scalable systems with precision.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-4">
						<a
							href={siteConfig.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
							aria-label="GitHub"
						>
							<GitHubIcon className="h-5 w-5" />
						</a>
						<a
							href={siteConfig.links.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
							aria-label="LinkedIn"
						>
							<LinkedInIcon className="h-5 w-5" />
						</a>
						<a
							href={siteConfig.links.x}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
							aria-label="Twitter"
						>
							<XIcon className="h-5 w-5" />
						</a>
						<a
							href={`mailto:${siteConfig.links.email}`}
							className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
							aria-label="Email"
						>
							<Mail className="h-5 w-5" />
						</a>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
					<p className="text-sm text-slate-600 dark:text-slate-400">
						© {currentYear} {siteConfig.name}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
