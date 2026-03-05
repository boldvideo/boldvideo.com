"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ModalProvider } from "@/components/modal-context";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <Header />
      {children}
      <Footer />
    </ModalProvider>
  );
}
