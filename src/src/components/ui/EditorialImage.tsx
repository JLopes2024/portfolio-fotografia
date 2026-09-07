import Image from "next/image";
import type { CSSProperties } from "react";

import type { PortfolioImage } from "@/lib/data";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  image: PortfolioImage;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function EditorialImage({
  image,
  sizes,
  className,
  imageClassName,
  priority = false,
}: EditorialImageProps) {
  const fit = image.fit ?? "cover";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fit === "contain" && "bg-[#171210]",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={
          {
            objectPosition: image.objectPosition ?? "50% 50%",
          } as CSSProperties
        }
        className={cn(
          fit === "contain" ? "object-contain" : "object-cover",
          imageClassName
        )}
      />
    </div>
  );
}
