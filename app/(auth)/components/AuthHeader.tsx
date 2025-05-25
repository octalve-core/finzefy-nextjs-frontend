"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AuthHeader = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="cursor-pointer">
      <Image src="/backArrow.svg" alt="Back" width={16} height={30} />
    </button>
  );
};
