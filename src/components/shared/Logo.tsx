import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-8 w-auto md:h-9",
  md: "h-10 w-auto md:h-12",
  lg: "h-14 w-auto md:h-16",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
}

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <picture className={cn("inline-block shrink-0", className)}>
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt="Blackstone Excavations"
        width={6633}
        height={1219}
        className={cn("w-auto object-contain", sizeClasses[size])}
        decoding="async"
      />
    </picture>
  );
}
