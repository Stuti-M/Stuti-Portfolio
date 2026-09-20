import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { CommandPalette } from "./CommandPalette";
import { RecruiterModeModal } from "./RecruiterModeModal";

interface CommandPaletteContextType {
  isCommandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleCommandPalette: () => void;
  isRecruiterModeOpen: boolean;
  openRecruiterMode: () => void;
  closeRecruiterMode: () => void;
  toggleRecruiterMode: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextType | null>(null);

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModeOpen, setIsRecruiterModeOpen] = useState(false);

  const openCommandPalette = () => setIsCommandPaletteOpen(true);
  const closeCommandPalette = () => setIsCommandPaletteOpen(false);
  const toggleCommandPalette = () => setIsCommandPaletteOpen((prev) => !prev);

  const openRecruiterMode = () => setIsRecruiterModeOpen(true);
  const closeRecruiterMode = () => setIsRecruiterModeOpen(false);
  const toggleRecruiterMode = () => setIsRecruiterModeOpen((prev) => !prev);

  // Global Keyboard Shortcut: Cmd+K / Ctrl+K for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <CommandPaletteContext.Provider
      value={{
        isCommandPaletteOpen,
        openCommandPalette,
        closeCommandPalette,
        toggleCommandPalette,
        isRecruiterModeOpen,
        openRecruiterMode,
        closeRecruiterMode,
        toggleRecruiterMode,
      }}
    >
      {children}

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={closeCommandPalette}
        onOpenRecruiterMode={openRecruiterMode}
      />

      {/* Global Recruiter Mode Modal */}
      <RecruiterModeModal
        isOpen={isRecruiterModeOpen}
        onClose={closeRecruiterMode}
      />
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error("useCommandPalette must be used within a CommandPaletteProvider");
  }
  return ctx;
}
