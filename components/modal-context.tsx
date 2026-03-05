"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { RequestAccessModal } from "@/components/request-access-modal";

const ModalContext = createContext<{ openModal: () => void }>({
  openModal: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      {isOpen && (
        <RequestAccessModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </ModalContext.Provider>
  );
}
