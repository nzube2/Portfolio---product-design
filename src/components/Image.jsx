import React from "react";
import dimensions from "../data/imageDimensions";
export default function Image({
  src,
  alt = "",
  width,
  height,
  loading,
  className = "",
  ...props
}) {
  const size = dimensions[src];
  const aboveFold = /hero|logo/.test(className);
  return (
    <img
      src={src}
      alt={alt}
      width={size?.[0] ?? width}
      height={size?.[1] ?? height}
      loading={loading ?? (aboveFold ? "eager" : "lazy")}
      decoding="async"
      className={className}
      {...props}
    />
  );
}
