"use client";

import {
  motion,
  type VariantLabels,
  type Target,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

export type TextRollProps = {
  children: string;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  transition?: Transition;
  variants?: {
    enter: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
    exit: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
  };
  onAnimationComplete?: () => void;
};

export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.1,
  getExitDelay = (i) => i * 0.1 + 0.2,
  className,
  transition = { ease: "easeIn" },
  variants,
  onAnimationComplete,
}: TextRollProps) {
  const defaultVariants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  } as const;

  const words = children.split(" ");
  let globalIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIdx) => {
        const letters = word.split("");
        const wordElement = (
          <span
            key={wordIdx}
            className="inline-block whitespace-nowrap"
          >
            {letters.map((letter) => {
              const i = globalIndex++;
              return (
                <span
                  key={i}
                  className="relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]"
                  aria-hidden="true"
                >
                  <motion.span
                    className="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]"
                    initial={
                      variants?.enter?.initial ?? defaultVariants.enter.initial
                    }
                    animate={
                      variants?.enter?.animate ?? defaultVariants.enter.animate
                    }
                    transition={{
                      ...transition,
                      duration,
                      delay: getEnterDelay(i),
                    }}
                  >
                    {letter}
                  </motion.span>
                  <motion.span
                    className="absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]"
                    initial={
                      variants?.exit?.initial ?? defaultVariants.exit.initial
                    }
                    animate={
                      variants?.exit?.animate ?? defaultVariants.exit.animate
                    }
                    transition={{
                      ...transition,
                      duration,
                      delay: getExitDelay(i),
                    }}
                    onAnimationComplete={
                      wordIdx === words.length - 1 &&
                      letter === letters[letters.length - 1]
                        ? onAnimationComplete
                        : undefined
                    }
                  >
                    {letter}
                  </motion.span>
                  <span className="invisible">{letter}</span>
                </span>
              );
            })}
          </span>
        );

        globalIndex++;

        return (
          <span key={`w-${wordIdx}`}>
            {wordElement}
            {wordIdx < words.length - 1 && (
              <span className="inline-block" style={{ width: "0.3em" }} />
            )}
          </span>
        );
      })}
      <span className="sr-only">{children}</span>
    </span>
  );
}
