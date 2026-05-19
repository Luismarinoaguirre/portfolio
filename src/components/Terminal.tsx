"use client";

import { useState, useEffect, useRef } from "react";

interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number;
  delayBetweenCommands?: number;
}

export default function Terminal({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1100,
}: TerminalProps) {
  const [lines, setLines] = useState<{ type: "command" | "output"; text: string }[]>([]);
  const [cmdIdx, setCmdIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    if (cmdIdx >= commands.length) { setTyping(false); return; }
    const current = commands[cmdIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      const newLines: typeof lines = [...lines, { type: "command", text: current }];
      const out = outputs[cmdIdx];
      if (out) out.forEach((o) => newLines.push({ type: "output", text: o }));
      setLines(newLines);
      setCharIdx(0);
      setCmdIdx((i) => i + 1);
    }, delayBetweenCommands / 2);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx, cmdIdx]);

  // Loop restart
  useEffect(() => {
    if (!typing && cmdIdx >= commands.length) {
      const t = setTimeout(() => {
        setLines([]);
        setCmdIdx(0);
        setCharIdx(0);
        setTyping(true);
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [typing, cmdIdx, commands.length]);

  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, charIdx]);

  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid #222222",
        borderRadius: "16px",
        overflow: "hidden",
        maxWidth: "820px",
        margin: "0 auto",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "14px 20px",
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "12px",
            marginLeft: "12px",
            color: "#666",
          }}
        >
          portfolio — luis marino — zsh
        </span>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        style={{
          padding: "24px 28px",
          height: "520px",
          overflow: "hidden",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "13px",
          lineHeight: "1.8",
        }}
      >
        {lines.map((ln, i) =>
          ln.type === "command" ? (
            <div key={i} className="terminal-line">
              <span style={{ color: "#28c840" }}>➜</span>{" "}
              <span style={{ color: "var(--accent)" }}>~</span>{" "}
              <span style={{ color: "var(--foreground)" }}>{ln.text}</span>
            </div>
          ) : (
            <div key={i} className="terminal-line">
              <span style={{ color: "#888" }}>{ln.text}</span>
            </div>
          )
        )}
        {typing && cmdIdx < commands.length && (
          <div className="terminal-line">
            <span style={{ color: "#28c840" }}>➜</span>{" "}
            <span style={{ color: "var(--accent)" }}>~</span>{" "}
            <span style={{ color: "var(--foreground)" }}>{commands[cmdIdx].slice(0, charIdx)}</span>
            <span className="terminal-cursor" style={{ color: "var(--accent)" }}>▌</span>
          </div>
        )}
        {!typing && cmdIdx >= commands.length && (
          <div className="terminal-line">
            <span style={{ color: "#28c840" }}>➜</span>{" "}
            <span style={{ color: "var(--accent)" }}>~</span>{" "}
            <span className="terminal-cursor" style={{ color: "var(--accent)" }}>▌</span>
          </div>
        )}
      </div>
    </div>
  );
}
