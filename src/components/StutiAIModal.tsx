import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Terminal,
  X,
  Send,
  CornerDownLeft,
  RotateCcw,
  Volume2,
  VolumeX,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Bot,
  User,
  ShieldCheck,
  Cpu,
  Layers,
  Search,
  Maximize2,
  Minimize2,
} from "lucide-react";
import {
  queryStutiAI,
  SUGGESTED_PROMPTS,
  type AIResponse,
  type SuggestedPrompt,
} from "../lib/stuti-ai-engine";
import { audioFeedback } from "../lib/audio-feedback";

interface MessageItem {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  responsePayload?: AIResponse;
  isStreaming?: boolean;
}

interface StutiAIModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  isDedicatedPage?: boolean;
}

export function StutiAIModal({
  isOpen,
  onClose,
  initialPrompt,
  isDedicatedPage = false,
}: StutiAIModalProps) {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize initial message or initial prompt
  useEffect(() => {
    if (isOpen) {
      audioFeedback.playOpen();
      if (messages.length === 0) {
        const welcomeResp = queryStutiAI("hello");
        setMessages([
          {
            id: "welcome-msg",
            sender: "ai",
            text: welcomeResp.answer,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            responsePayload: welcomeResp,
          },
        ]);
      }
      if (initialPrompt) {
        handleSendPrompt(initialPrompt);
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, initialPrompt]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isDedicatedPage) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, isDedicatedPage]);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isProcessing]);

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim() || isProcessing) return;

    const userTimestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: MessageItem = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: promptText.trim(),
      timestamp: userTimestamp,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsProcessing(true);
    audioFeedback.playTransmit();

    // Simulate high-speed AI processing delay (350-500ms) for realistic feel
    setTimeout(() => {
      const aiResponse = queryStutiAI(promptText);
      const aiMsgId = `ai-${Date.now()}`;

      // Start streaming response simulation
      const fullText = aiResponse.answer;
      let currentIndex = 0;
      const aiTimestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      const streamingMsg: MessageItem = {
        id: aiMsgId,
        sender: "ai",
        text: "",
        timestamp: aiTimestamp,
        responsePayload: aiResponse,
        isStreaming: true,
      };

      setMessages((prev) => [...prev, streamingMsg]);
      audioFeedback.playReceive();

      // Typing streaming effect
      const stepChunk = 25; // characters per tick
      const streamInterval = setInterval(() => {
        currentIndex += stepChunk;
        if (currentIndex >= fullText.length) {
          clearInterval(streamInterval);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMsgId ? { ...msg, text: fullText, isStreaming: false } : msg
            )
          );
          setIsProcessing(false);
        } else {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMsgId ? { ...msg, text: fullText.slice(0, currentIndex) } : msg
            )
          );
        }
      }, 18);
    }, 380);
  };

  const handleClearSession = () => {
    const welcomeResp = queryStutiAI("hello");
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "ai",
        text: welcomeResp.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        responsePayload: welcomeResp,
      },
    ]);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    audioFeedback.enabled = next;
  };

  if (!isOpen && !isDedicatedPage) return null;

  // Filter suggested prompts
  const filteredPrompts = SUGGESTED_PROMPTS.filter((p) => {
    const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
    const matchesSearch =
      searchFilter === "" ||
      p.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.category.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const modalContainerClasses = isDedicatedPage
    ? "relative w-full max-w-5xl mx-auto min-h-[85vh] flex flex-col my-6 rounded-2xl border-2 border-primary/40 bg-card/95 shadow-2xl overflow-hidden backdrop-blur-xl"
    : `relative w-full ${
        isFullscreen ? "max-w-7xl h-[95vh]" : "max-w-4xl h-[88vh] max-h-[850px]"
      } flex flex-col rounded-2xl border-2 border-primary/40 bg-card/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 animate-in fade-in zoom-in-95`;

  const content = (
    <div className={modalContainerClasses}>
      {/* 1. FUTURISTIC COMMAND CONSOLE HEADER */}
      <div className="relative border-b border-border/80 bg-muted/40 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 select-none">
        {/* Animated Laser Scanning Beam */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 animate-pulse"
        />

        {/* Brand & System Status */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/30 shadow-xs">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-base font-extrabold text-foreground tracking-tight">
                STUTI AI
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>● ONLINE</span>
              </span>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              PORTFOLIO INTELLIGENCE SYSTEM // ASK MY PORTFOLIO
            </p>
          </div>
        </div>

        {/* Header Telemetry & Quick Action Controls */}
        <div className="flex items-center gap-2">
          {/* Clearance Badge */}
          <div className="hidden md:flex items-center gap-1 font-mono text-[10px] text-primary bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-md">
            <ShieldCheck className="h-3 w-3" />
            <span>CLEARANCE: LEVEL 7</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute audio cues" : "Unmute audio cues"}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary transition cursor-pointer"
            title={soundEnabled ? "Sound Effects Active (Click to mute)" : "Sound Effects Muted (Click to enable)"}
          >
            {soundEnabled ? <Volume2 className="h-3.5 w-3.5 text-primary" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>

          {/* Reset / Clear Session */}
          <button
            onClick={handleClearSession}
            aria-label="Reset conversation"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary transition cursor-pointer"
            title="Reset AI Session"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>

          {/* Fullscreen Toggle (Only in modal mode) */}
          {!isDedicatedPage && (
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground hover:text-foreground hover:border-primary transition cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}
            >
              {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
          )}

          {/* Close Button */}
          {!isDedicatedPage && (
            <button
              onClick={onClose}
              aria-label="Close STUTI AI Console"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer"
              title="Close (Esc)"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. MAIN SPLIT INTERFACE: CHAT STREAM + SUGGESTION DOCK */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* Subtle Console Background Grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-40 z-0" />

        {/* Scrollable Conversation Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10">
          {messages.map((msg) => {
            const isAI = msg.sender === "ai";
            const payload = msg.responsePayload;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 sm:gap-4 ${
                  isAI ? "items-start" : "items-start justify-end"
                } animate-in fade-in slide-in-from-bottom-2 duration-200`}
              >
                {/* AI Avatar */}
                {isAI && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/40 shadow-xs mt-1">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                {/* Message Bubble Container */}
                <div
                  className={`max-w-[88%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 relative ${
                    isAI
                      ? "border border-border/90 bg-card/90 text-foreground shadow-sm backdrop-blur-md"
                      : "border border-primary/50 bg-primary/15 text-foreground font-mono text-sm ml-auto"
                  }`}
                >
                  {/* AI Metadata Header */}
                  {isAI && (
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b border-border/70 font-mono text-[11px] text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">STUTI.AI //</span>
                        <span className="text-foreground/90 font-semibold">
                          {payload?.category || "SYSTEM"}
                        </span>
                        {payload?.confidence && (
                          <span className="text-[10px] text-emerald-500">
                            ({Math.round(payload.confidence * 100)}% match)
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span>{msg.timestamp}</span>
                        <button
                          onClick={() => copyToClipboard(msg.text, msg.id)}
                          className="hover:text-primary transition cursor-pointer p-1"
                          title="Copy Answer to Clipboard"
                        >
                          {copiedId === msg.id ? (
                            <Check className="h-3 w-3 text-emerald-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Badges Bar (if present) */}
                  {isAI && payload?.badges && payload.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {payload.badges.map((b) => (
                        <span
                          key={b}
                          className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Formatted Text Content */}
                  <div className="text-sm leading-relaxed whitespace-pre-wrap font-sans space-y-2 prose-invert">
                    {msg.text}
                    {msg.isStreaming && (
                      <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse align-middle" />
                    )}
                  </div>

                  {/* Impact Metrics Cards (if present) */}
                  {isAI && payload?.metrics && payload.metrics.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-border/70 font-mono text-xs">
                      {payload.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2 rounded-lg bg-muted/40 border border-border/80"
                        >
                          <p className="text-[10px] text-muted-foreground uppercase">{m.label}</p>
                          <p className="font-bold text-foreground mt-0.5">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deep Action Links to Portfolio Pages */}
                  {isAI && payload?.actionLinks && payload.actionLinks.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-border/70 flex flex-wrap gap-2">
                      {payload.actionLinks.map((link) => {
                        const isExternal = link.to.startsWith("http") || link.to.startsWith("mailto:");
                        if (isExternal) {
                          return (
                            <a
                              key={link.label}
                              href={link.to}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                            >
                              <span>{link.emoji || "🔗"}</span>
                              <span>{link.label}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          );
                        }
                        return (
                          <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => {
                              if (!isDedicatedPage) onClose();
                            }}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-white transition"
                          >
                            <span>{link.emoji || "⚡"}</span>
                            <span>{link.label}</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {/* Follow-up Question Suggestion Chips */}
                  {isAI && payload?.suggestedFollowUps && payload.suggestedFollowUps.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-border/60">
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
                        SUGGESTED FOLLOW-UPS // RECRUITER EXPLORATION
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {payload.suggestedFollowUps.map((fu) => (
                          <button
                            key={fu}
                            onClick={() => handleSendPrompt(fu)}
                            className="text-left font-mono text-[11px] px-2.5 py-1 rounded-md border border-border bg-card hover:border-primary hover:text-primary transition cursor-pointer text-muted-foreground"
                          >
                            ↳ {fu}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* User Avatar */}
                {!isAI && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground border border-border mt-1">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Processing / Loading Indicator */}
          {isProcessing && messages[messages.length - 1]?.sender === "user" && (
            <div className="flex gap-3 items-center animate-in fade-in">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-primary/40">
                <Cpu className="h-4 w-4 animate-spin" />
              </div>
              <div className="rounded-xl border border-border bg-card/80 px-4 py-2.5 font-mono text-xs text-primary flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                <span>QUERYING KNOWLEDGE REPOSITORY & SYNTHESIZING RESPONSE...</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* 3. SUGGESTED QUESTIONS DOCK (Categorized & Clickable) */}
        <div className="border-t border-border/80 bg-muted/25 px-4 sm:px-6 py-3 relative z-10 select-none">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="font-bold text-foreground">SUGGESTED PROMPTS</span>
              <span className="hidden sm:inline">// CLICK TO ASK INSTANTLY:</span>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1">
              {["ALL", "PROJECTS", "EXPERIENCE", "SKILLS", "ACHIEVEMENTS", "CAREER"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-[10px] px-2 py-0.5 rounded-md transition cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground font-bold"
                      : "bg-card/70 border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Horizontal Pill List */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {filteredPrompts.slice(0, 8).map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handleSendPrompt(prompt.question)}
                disabled={isProcessing}
                className="shrink-0 flex items-center gap-1.5 rounded-lg border border-border bg-card/90 px-3 py-1.5 font-mono text-xs text-foreground/90 transition hover:border-primary hover:text-primary hover:bg-card disabled:opacity-50 cursor-pointer group shadow-2xs"
              >
                {prompt.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-primary/15 text-primary">
                    {prompt.badge}
                  </span>
                )}
                <span>{prompt.question}</span>
                <CornerDownLeft className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
        </div>

        {/* 4. COMMAND CONSOLE INPUT BAR */}
        <div className="p-4 sm:px-6 sm:py-4 border-t border-border/80 bg-card/90 backdrop-blur-md relative z-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(inputValue);
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-primary font-bold select-none">
                &gt;
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask STUTI AI anything about Stuti's projects, skills, experience, achievements..."
                disabled={isProcessing}
                className="w-full rounded-xl border border-primary/30 bg-muted/30 pl-8 pr-4 py-3 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:bg-card focus:ring-1 focus:ring-primary transition outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={!inputValue.trim() || isProcessing}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-3 font-mono text-xs font-bold text-primary-foreground shadow-sm transition hover:opacity-95 disabled:opacity-50 cursor-pointer shrink-0"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">TRANSMIT</span>
            </button>
          </form>

          {/* Console Footer Telemetry Bar */}
          <div className="mt-2.5 flex flex-wrap items-center justify-between text-[10px] font-mono text-muted-foreground select-none">
            <div className="flex items-center gap-2">
              <span>PRESS <strong className="text-foreground">ENTER</strong> TO TRANSMIT</span>
              <span>•</span>
              <span><strong className="text-foreground">ESC</strong> TO DISMISS</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span>ENGINE: PORTFOLIO KNOWLEDGE REPO</span>
              <span>•</span>
              <span className="text-primary font-bold">STUTI MOHAPATRA (2026)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isDedicatedPage) {
    return content;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="STUTI AI Portfolio Intelligence Console"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} />
      {content}
    </div>
  );
}
