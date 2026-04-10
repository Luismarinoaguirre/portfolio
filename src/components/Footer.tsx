export default function Footer() {
  return (
    <footer className="py-8 border-t border-border" style={{ paddingLeft: "112px", paddingRight: "112px" }}>
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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
