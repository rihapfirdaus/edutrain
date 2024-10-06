import Image from "next/image";

interface ImageUserProps {
  size?: "s" | "md" | "lg" | "xl";
  shape?: "circle" | "squircle" | "square";
  src?: string;
  alt?: string;
  className?: string;
}

export default function ImageUser({
  size = "xl",
  shape = "square",
  src,
  alt,
  className,
}: ImageUserProps) {
  const sizeClasses = {
    s: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const shapeClasses = {
    circle: "rounded-full",
    squircle: "rounded-2xl",
    square: "rounded-none",
  };

  return (
    <Image
      src={src || "/default_user.png"}
      alt={alt || "Profile Picture"}
      width={64}
      height={64}
      priority={true}
      className={`bg-[#d4d4d4] border object-cover object-center ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    />
  );
}
