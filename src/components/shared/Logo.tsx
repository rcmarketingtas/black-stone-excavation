import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

const sizeClasses: Record<LogoSize, { main: string; sub: string; icon: string }> = {
  sm: {
    main: "text-base leading-none tracking-[0.14em] md:text-lg",
    sub: "mt-0.5 text-[7px] tracking-[0.45em] md:text-[8px]",
    icon: "h-3 w-5 -top-3 md:h-3.5 md:w-6 md:-top-3.5",
  },
  md: {
    main: "text-lg leading-none tracking-[0.14em] md:text-xl",
    sub: "mt-1 text-[8px] tracking-[0.5em] md:text-[9px]",
    icon: "h-3.5 w-6 -top-3.5 md:h-4 md:w-7 md:-top-4",
  },
  lg: {
    main: "text-2xl leading-none tracking-[0.14em] md:text-3xl",
    sub: "mt-1.5 text-[10px] tracking-[0.52em] md:text-xs",
    icon: "h-4 w-7 -top-4 md:h-5 md:w-9 md:-top-5",
  },
};

function ExcavatorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 18H14L17 13H28L31 10H38L41 13H44L42 16H38L35 18H17L14 16H8L6 18H4Z"
        fill="currentColor"
      />
      <rect x="10" y="18" width="12" height="5" rx="0.5" fill="currentColor" />
      <path
        d="M31 10L36 4H39L42 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="24.5" r="3" fill="currentColor" />
      <circle cx="24" cy="24.5" r="3" fill="currentColor" />
      <circle cx="34" cy="24.5" r="3" fill="currentColor" />
    </svg>
  );
}

interface LogoProps {
  size?: LogoSize;
  className?: string;
  showIcon?: boolean;
}

export function Logo({ size = "md", className, showIcon = true }: LogoProps) {
  const sizes = sizeClasses[size];

  return (
    <div className={cn("inline-flex flex-col items-center text-white", className)}>
      <span
        className={cn(
          "font-serif font-bold uppercase",
          sizes.main,
          "logo-stone-text"
        )}
      >
        BLACKST
        <span className="relative inline-block">
          O
          {showIcon && (
            <ExcavatorIcon
              className={cn(
                "pointer-events-none absolute left-1/2 -translate-x-1/2 text-accent",
                sizes.icon
              )}
            />
          )}
        </span>
        NE
      </span>
      <span
        className={cn(
          "font-sans font-normal uppercase text-white/90",
          sizes.sub
        )}
      >
        EXCAVATIONS
      </span>
    </div>
  );
}
