import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
          {
            "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900":
              variant === "default",
            "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100":
              variant === "secondary",
            "border border-slate-200 text-slate-900 dark:border-slate-700 dark:text-slate-100":
              variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };

