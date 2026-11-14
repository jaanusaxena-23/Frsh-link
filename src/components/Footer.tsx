import { NAV_LINKS } from '@/data/content';
import { SproutMark } from '@/components/FloatingNav';

export function Footer() {
  return (
    <footer className="bg-forest-800 text-ivory-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <SproutMark className="h-7 w-7" />
              <span className="font-serif text-2xl tracking-tight">Freshlink</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-200/60">
              A direct link between Indian farmers and the people who eat what they grow.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm sm:grid-cols-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ivory-200/70 transition-colors duration-300 hover:text-ivory-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-ivory-200/70">
            <p className="font-semibold text-ivory-100">Namaste,</p>
            <p className="mt-1">Made in India, grown in India.</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory-100/10 pt-6 text-xs text-ivory-200/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Freshlink. All rights reserved.</p>
          <p>Field to fork, nothing in between.</p>
        </div>
      </div>
    </footer>
  );
}
