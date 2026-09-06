"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── Context ─────────────────────────────────────────────── */
interface CarouselContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

const CarouselContext = createContext<CarouselContextType>({
  onCardClose: () => {},
  currentIndex: 0,
});

/* ── Card type ───────────────────────────────────────────── */
export interface CardData {
  src: string;
  title: string;
  category: string;
  content?: React.ReactNode;
  href?: string;
}

/* ── Carousel ────────────────────────────────────────────── */
export function Carousel({ items }: { items: React.ReactElement[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollability);
      return () => el.removeEventListener("scroll", checkScrollability);
    }
  }, [checkScrollability]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 260 : 384;
      const gap = isMobile() ? 16 : 20;
      const scrollPosition = (cardWidth + gap) * (index - 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Scroll area */}
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
          style={{
            paddingTop: "16px",
            paddingBottom: "40px",
          }}
        >
          <div
            className="flex flex-row justify-start"
            style={{
              gap: "clamp(12px, 2vw, 20px)",
              paddingLeft: "max(var(--px-section), calc((100vw - 1600px) / 2 + var(--px-section)))",
              paddingRight: "var(--px-section)",
            }}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: Math.min(index * 0.08, 0.4),
                }}
                viewport={{ once: true, margin: "-40px" }}
                key={"card-" + index}
                className="rounded-3xl last:pr-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div
          className="flex justify-end gap-2"
          style={{
            paddingRight: "var(--px-section)",
          }}
        >
          <button
            className="relative z-40 flex items-center justify-center rounded-full bg-white/[0.08] border border-white/[0.10] backdrop-blur-xl disabled:opacity-30 transition-all duration-300 hover:bg-white/[0.14]"
            style={{ width: "44px", height: "44px" }}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="relative z-40 flex items-center justify-center rounded-full bg-white/[0.08] border border-white/[0.10] backdrop-blur-xl disabled:opacity-30 transition-all duration-300 hover:bg-white/[0.14]"
            style={{ width: "44px", height: "44px" }}
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

/* ── Card ────────────────────────────────────────────────── */
export function Card({
  card,
  index,
  layout = false,
}: {
  card: CardData;
  index: number;
  layout?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  const handleOpen = () => {
    if (card.href) {
      window.location.href = card.href;
      return;
    }
    setOpen(true);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleClose]);

  return (
    <>
      {/* Expanded overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-xl fixed inset-0 z-10"
              onClick={handleClose}
            />
            <motion.div
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="max-w-5xl mx-auto bg-card-bg rounded-3xl z-[60] relative my-10 font-sans overflow-hidden"
              style={{ padding: "0" }}
            >
              {/* Close button */}
              <button
                className="sticky top-4 ml-auto flex items-center justify-center rounded-full bg-white/[0.1] backdrop-blur-xl z-10 border border-white/[0.1] hover:bg-white/[0.15] transition-colors"
                style={{
                  width: "36px",
                  height: "36px",
                  marginRight: "16px",
                  marginTop: "16px",
                }}
                onClick={handleClose}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div style={{ padding: "0 24px 24px 24px" }}>
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card thumbnail */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl overflow-hidden flex flex-col items-start justify-start relative z-10 group text-left card-carousel-item"
        style={{
          flexShrink: 0,
        }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      >
        {/* Gradient overlay on top for text readability */}
        <div
          className="absolute inset-x-0 top-0 z-30 pointer-events-none"
          style={{
            height: "50%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)",
          }}
        />

        {/* Text on top of image */}
        <div className="relative z-40" style={{ padding: "16px 20px" }}>
          <p
            className="text-white/80 font-medium text-xs md:text-sm"
            style={{ marginBottom: "4px" }}
          >
            {card.category}
          </p>
          <h3
            className="text-white font-semibold leading-snug text-base md:text-2xl"
          >
            {card.title}
          </h3>
        </div>

        {/* Full bleed image */}
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 224px, 384px"
        />
      </motion.button>
    </>
  );
}
