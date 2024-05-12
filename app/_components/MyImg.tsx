import { cn } from "@/lib/utils";
import Image from "next/image";

export default function MyImg({
  alt,
  height,
  src,
  width,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("w-full md:w-1/2", className)}
      />
    </div>
  );
}
