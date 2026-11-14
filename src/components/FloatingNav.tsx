import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export function SproutMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 22V12m0 0C12 8 9 5 4 5c0 5 3 8 8 8Zm0 0c0-4 3-7 8-7 0 5-3 7-8 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${
          scrolled
            ? 'bg-forest/90 text-ivory-100 shadow-lg shadow-forest-800/20 backdrop-blur-md'
            : 'bg-transparent text-ivory-100'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <SproutMark className="h-6 w-6" />
          <span className="font-serif text-xl tracking-tight">Freshlink</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative opacity-80 transition-opacity duration-300 hover:opacity-100 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#harvest"
            className="hidden rounded-full bg-ivory-100 px-6 py-2.5 text-sm font-semibold text-forest transition-all duration-300 hover:scale-[1.04] hover:bg-sage lg:block"
          >
            Shop
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full mx-4 mt-2 w-[calc(100%-2rem)] max-w-6xl rounded-3xl bg-forest p-6 text-ivory-100 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-4 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#harvest"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-ivory-100 px-5 py-3 text-center font-semibold text-forest"
                >
                  Shop
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
