"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GooeyInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export function GooeyInput({ placeholder = "Search...", onSearch }: GooeyInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      setValue("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onSearch) {
      onSearch(value.trim());
    }
  };

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
            style={{ marginRight: "8px" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-white/[0.08] border border-white/[0.10] rounded-full text-foreground placeholder:text-muted/50 outline-none focus:border-accent/50 transition-colors font-mono"
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                backdropFilter: "blur(12px)",
              }}
            />
          </motion.form>
        )}
      </AnimatePresence>

      <button
        onClick={handleToggle}
        className="flex items-center justify-center rounded-full hover:bg-white/[0.08] transition-all duration-300"
        style={{ width: "40px", height: "40px" }}
        aria-label="Search"
      >
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted hover:text-accent transition-colors"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </>
          )}
        </motion.svg>
      </button>
    </div>
  );
}
