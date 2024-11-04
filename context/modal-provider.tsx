"use client";

import { useEffect, useState } from "react";

import ProModal from "@/components/pro-modal";
import BirthDayModal from "@/components/birthday-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProModal />
      <BirthDayModal />
    </>
  );
};

export default ModalProvider;
