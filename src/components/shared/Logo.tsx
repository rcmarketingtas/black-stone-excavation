import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-8 max-w-[10rem] md:h-9 md:max-w-[11rem]",
  md: "h-10 max-w-[12.5rem] md:h-11 md:max-w-[14rem]",
  lg: "h-12 max-w-[15rem] md:h-14 md:max-w-[17.5rem]",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
}

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <picture className={cn("inline-flex shrink-0 items-center", className)}>
      <source srcSet="/logo-nav.webp" type="image/webp" />
      <img
        src="/logo-nav.png"
        alt="Blackstone Excavations"
        width={602}
        height={122}
        className={cn("h-auto w-auto max-w-full object-contain object-left", sizeClasses[size])}
        decoding="async"
      />
    </picture>
  );
}
