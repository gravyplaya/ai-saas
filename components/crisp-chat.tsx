"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1d516332-4a23-4b93-8e04-f84f32b86846");
  }, []);

  return null;
};
