"use client";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3",
        className
      )}
      style={{ gap: "16px" }}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      className
    )}
    style={{
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-card)",
    }}
    {...props}
  >
    <div>{background}</div>
    <div style={{ padding: "20px" }}>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col transition-all duration-300 lg:group-hover:-translate-y-10"
        style={{ gap: "4px" }}
      >
        <Icon
          className="origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
          style={{ width: "48px", height: "48px", color: "var(--accent)" }}
        />
        <h3 className="font-semibold" style={{ fontSize: "20px", color: "var(--foreground)" }}>
          {name}
        </h3>
        <p style={{ color: "var(--muted)", fontSize: "14px", maxWidth: "32rem" }}>
          {description}
        </p>
      </div>

      {href && cta && (
        <div className="pointer-events-none flex w-full transform-gpu flex-row items-center transition-all duration-300 group-hover:opacity-100 lg:hidden">
          <a
            href={href}
            className="pointer-events-auto flex items-center text-sm font-medium"
            style={{ color: "var(--accent)", gap: "8px" }}
          >
            {cta}
            <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
          </a>
        </div>
      )}
    </div>

    {href && cta && (
      <div className="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
        style={{ padding: "20px" }}
      >
        <a
          href={href}
          className="pointer-events-auto flex items-center text-sm font-medium"
          style={{ color: "var(--accent)", gap: "8px" }}
        >
          {cta}
          <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
        </a>
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3" />
  </div>
);

export { BentoCard, BentoGrid };
