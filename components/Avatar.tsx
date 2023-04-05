"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src: string | null | undefined
}

const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      height={30}
      width={30}
      priority
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
