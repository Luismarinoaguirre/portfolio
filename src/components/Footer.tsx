export default function Footer() {
  return (
    <footer
      className="section-px"
      style={{ paddingTop: "32px", paddingBottom: "32px", borderTop: "1px solid var(--hairline)" }}
    >
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Luis Marino
        </p>
        <p className="text-xs text-muted/30">
          Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  );
}
