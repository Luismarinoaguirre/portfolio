import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl text-foreground placeholder:text-muted/50 outline-none transition-colors duration-200",
        "focus:ring-2 focus:ring-accent/30",
        className,
      )}
      style={{
        padding: "12px 16px",
        fontSize: "15px",
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)",
      }}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl text-foreground placeholder:text-muted/50 outline-none transition-colors duration-200 resize-none",
        "focus:ring-2 focus:ring-accent/30",
        className,
      )}
      style={{
        padding: "12px 16px",
        fontSize: "15px",
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)",
        minHeight: "120px",
      }}
      {...props}
    />
  );
}
