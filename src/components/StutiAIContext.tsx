import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { StutiAIModal } from "./StutiAIModal";
import { StutiAIFloatingLauncher } from "./StutiAIEntry";

interface StutiAIContextType {
  isOpen: boolean;
  openAI: (prompt?: string) => void;
  closeAI: () => void;
  activePrompt: string | undefined;
}

const StutiAIContext = createContext<StutiAIContextType | null>(null);

export function StutiAIProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState<string | undefined>(undefined);

  const routerState = useRouterState();
  const isAIPage = routerState?.location?.pathname === "/ai";

  const openAI = (prompt?: string) => {
    setActivePrompt(prompt);
    setIsOpen(true);
  };

  const closeAI = () => {
    setIsOpen(false);
    setActivePrompt(undefined);
  };

  return (
    <StutiAIContext.Provider value={{ isOpen, openAI, closeAI, activePrompt }}>
      {children}
      {/* Global Floating Launcher (only if not on the dedicated /ai route) */}
      {!isAIPage && <StutiAIFloatingLauncher onOpen={() => openAI()} />}

      {/* Global Stuti AI Command Console Modal */}
      {!isAIPage && (
        <StutiAIModal
          isOpen={isOpen}
          onClose={closeAI}
          initialPrompt={activePrompt}
        />
      )}
    </StutiAIContext.Provider>
  );
}

export function useStutiAI() {
  const ctx = useContext(StutiAIContext);
  if (!ctx) {
    throw new Error("useStutiAI must be used within a StutiAIProvider");
  }
  return ctx;
}
