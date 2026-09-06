import { cn } from "@/lib/utils";

export function FieldSet({
  className,
  ...props
}: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <fieldset
      className={cn("flex flex-col", className)}
      style={{ gap: "24px", border: "none", padding: 0, margin: 0 }}
      {...props}
    />
  );
}

export function FieldLegend({
  className,
  ...props
}: React.HTMLAttributes<HTMLLegendElement>) {
  return (
    <legend
      className={cn("text-foreground font-semibold tracking-[-0.01em]", className)}
      style={{ fontSize: "clamp(18px, 2vw, 24px)", marginBottom: "4px" }}
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-muted", className)}
      style={{ fontSize: "14px", marginBottom: "8px" }}
      {...props}
    />
  );
}

export function FieldGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col", className)}
      style={{ gap: "20px" }}
      {...props}
    />
  );
}

export function Field({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col", className)}
      style={{ gap: "6px" }}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-foreground font-medium", className)}
      style={{ fontSize: "14px" }}
      {...props}
    />
  );
}
