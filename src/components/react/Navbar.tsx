import { Activity, BriefcaseMedical, FileText, Home, Mail, Stethoscope } from "lucide-react";
import GlassSurface from "./GlassSurface";

const base = import.meta.env.BASE_URL;
const navItems = [
  { href: base, label: "Home", icon: Home },
  { href: `${base}resume`, label: "Resume", icon: FileText },
  { href: `${base}clinical-experience`, label: "Clinical", icon: Stethoscope },
  { href: `${base}portfolio`, label: "Portfolio", icon: BriefcaseMedical },
  { href: `${base}contact`, label: "Contact", icon: Mail }
];

export default function Navbar({ currentPath }: { currentPath: string }) {
  const cleanPath = currentPath.replace(/\/$/, "") || "/";

  return (
    <header className="sticky top-4 z-50 mx-auto w-full px-4">
      <nav className="container-premium flex items-center justify-between gap-4" aria-label="Primary navigation">
        <a href={base} className="group flex items-center gap-3 rounded-[1.35rem] border border-white/14 bg-white/[0.06] px-3 py-2 font-bold text-white shadow-premium backdrop-blur-2xl" aria-label="Caroline Thomas home">
          <GlassSurface className="size-11 rounded-2xl" contentClassName="p-0">
            <Activity size={20} className="text-teal" />
          </GlassSurface>
          <span className="hidden leading-tight sm:block">
            Caroline Thomas
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-teal">Nursing Portfolio</span>
          </span>
        </a>

        <GlassSurface className="max-w-full rounded-[1.75rem]" contentClassName="gap-1 overflow-x-auto p-1.5">
          {navItems.map((item) => {
            const cleanHref = item.href.replace(/\/$/, "") || "/";
            const active = cleanPath === cleanHref;
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex shrink-0 items-center gap-2 rounded-2xl px-3.5 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-[#07111d] shadow-[0_10px_30px_rgba(255,255,255,.18)]"
                    : "text-white/76 hover:bg-white/12 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {item.label}
              </a>
            );
          })}
        </GlassSurface>
      </nav>
    </header>
  );
}
