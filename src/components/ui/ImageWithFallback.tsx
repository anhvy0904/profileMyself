"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "onError"> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait" | "auto";
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className,
  aspectRatio = "auto",
  priority = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  const handleError = () => {
    if (!hasError && fallbackSrc && fallbackSrc !== imgSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={cn("relative overflow-hidden bg-slate-900/10 dark:bg-slate-900/60", aspectClasses[aspectRatio], className)}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        priority={priority}
        onError={handleError}
        unoptimized
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          hasError && !fallbackSrc ? "opacity-0" : "opacity-100"
        )}
      />
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center bg-slate-900/50 backdrop-blur-sm text-slate-400 text-xs font-mono">
          <span>Visual Placeholder</span>
        </div>
      )}
    </div>
  );
};
