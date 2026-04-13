"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number;
  delayBetweenCommands?: number;
}

export function Terminal({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1000,
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<
    { type: "command" | "output"; text: string; isTyping?: boolean }[]
  >([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines, currentCharIndex]);

  // Typing effect
  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      const t = setTimeout(() => setIsTyping(false), 0);
      return () => clearTimeout(t);
    }

    const currentCommand = commands[currentCommandIndex];

    if (currentCharIndex < currentCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Command fully typed — add it to displayed lines
    const timeout = setTimeout(() => {
      const newLines = [
        ...displayedLines,
        { type: "command" as const, text: currentCommand },
      ];

      // Add outputs if any
      const commandOutputs = outputs[currentCommandIndex];
      if (commandOutputs) {
        commandOutputs.forEach((output) => {
          newLines.push({ type: "output" as const, text: output });
        });
      }

      setDisplayedLines(newLines);
      setCurrentCharIndex(0);
      setCurrentCommandIndex((prev) => prev + 1);
    }, delayBetweenCommands / 2);

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentCommandIndex,
    commands,
    outputs,
    typingSpeed,
    delayBetweenCommands,
    displayedLines,
  ]);

  // Restart loop
  useEffect(() => {
    if (!isTyping && currentCommandIndex >= commands.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentCommandIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, currentCommandIndex, commands.length]);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#111111",
        border: "1px solid #222222",
        maxWidth: "820px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* Terminal top bar */}
      <div
        className="flex items-center"
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid #222222",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ff5f57",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#febc2e",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#28c840",
          }}
        />
        <span
          className="font-mono"
          style={{ fontSize: "12px", marginLeft: "12px", color: "#666666" }}
        >
          luis-marino ~ terminal
        </span>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className="font-mono"
        style={{
          padding: "24px 28px",
          minHeight: "320px",
          maxHeight: "420px",
          overflowY: "auto",
          fontSize: "13px",
          lineHeight: "1.8",
        }}
      >
        <AnimatePresence mode="sync">
          {displayedLines.map((line, i) => (
            <motion.div
              key={`${i}-${line.text}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {line.type === "command" ? (
                <div>
                  <span style={{ color: "#28c840" }}>➜</span>{" "}
                  <span style={{ color: "#FFD000" }}>~</span>{" "}
                  <span style={{ color: "#ebebeb" }}>{line.text}</span>
                </div>
              ) : (
                <div style={{ color: "#888888" }}>{line.text}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Currently typing line */}
        {isTyping && currentCommandIndex < commands.length && (
          <div>
            <span style={{ color: "#28c840" }}>➜</span>{" "}
            <span style={{ color: "#FFD000" }}>~</span>{" "}
            <span style={{ color: "#ebebeb" }}>
              {commands[currentCommandIndex].slice(0, currentCharIndex)}
            </span>
            <span
              style={{
                color: "#FFD000",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              ▌
            </span>
          </div>
        )}

        {/* Idle cursor */}
        {!isTyping && currentCommandIndex >= commands.length && (
          <div>
            <span style={{ color: "#28c840" }}>➜</span>{" "}
            <span style={{ color: "#FFD000" }}>~</span>{" "}
            <span
              style={{
                color: "#FFD000",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            >
              ▌
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
