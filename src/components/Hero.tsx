import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveDown } from 'lucide-react';
import { IMAGES } from '@/data/content';

const HEADLINE = ['Freshness', 'has a new', 'beginning.'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative grain flex min-h-svh flex-col overflow-hidden bg-forest text-ivory-100"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <img
          src={IMAGES.heroHarvest}
          alt="Farmer harvesting fresh vegetables in a lush green field at golden hour"
          className="h-[115%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-800/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-800/60 via-transparent to-forest" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/70 via-forest-800/20 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-16 pt-36 sm:px-8 md:pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-sage sm:text-sm"
        >
          <span className="h-px w-12 bg-sage" />
          The direct farm link
        </motion.p>

        <h1 className="max-w-6xl font-serif text-[clamp(2.75rem,9vw,8.5rem)] font-light uppercase leading-[0.95] tracking-tight text-balance">
          {HEADLINE.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 2 ? (
                  <em className="font-normal not-italic text-sage">{line}</em>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 flex flex-col gap-10 pb-2 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#harvest"
              className="group inline-flex items-center gap-3 rounded-full bg-ivory-100 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-forest transition-all duration-300 hover:bg-sage"
            >
              Explore the Harvest
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#story"
              className="group relative text-sm font-semibold uppercase tracking-widest text-ivory-100/90 transition-colors duration-300 hover:text-ivory-100"
            >
              Our Story
              <span className="absolute -bottom-1 left-0 h-px w-full bg-ivory-100/40 transition-colors duration-300 group-hover:bg-ivory-100" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="flex items-start gap-4 sm:max-w-xs sm:flex-col sm:items-end sm:text-right"
          >
            <p className="max-w-xs text-base italic leading-relaxed text-ivory-200/85 sm:text-lg">
              From the hands that grow it, to the homes that deserve it.
            </p>
            <MoveDown className="mt-2 h-4 w-4 shrink-0 animate-bounce text-sage" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
