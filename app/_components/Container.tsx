import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "xl:max-w-screen-xl mx-auto px-3 transition-all sm:px-10 md:px-44",
        className
      )}
    >
      {children}
    </div>
  );
}
