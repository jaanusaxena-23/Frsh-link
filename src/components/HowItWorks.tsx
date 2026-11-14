import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { IMAGES, STEPS } from '@/data/content';

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="farmers" ref={ref} className="relative bg-forest text-ivory-100">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-25 sm:px-8 sm:py-35 lg:grid-cols-2">
        <div className="relative order-2 overflow-hidden rounded-[2rem] lg:order-1 lg:sticky lg:top-28 lg:self-start">
          <motion.div style={{ y: imgY }} className="h-full">
            <img
              src={IMAGES.aerialRows}
              alt="Aerial view of vibrant green rows of crops in an Indian field"
              className="min-h-[420px] w-full scale-110 object-cover lg:h-[640px]"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-800/50 to-transparent" />
          <p className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-ivory-200/90">
            Fields outside Pune, Maharashtra
          </p>
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-sage">
              <span className="h-px w-10 bg-sage" />
              How it Works
            </p>
            <h2 className="font-serif text-display-sm font-light text-balance">
              Three steps between <em className="italic text-sage">the field and you</em>
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="group flex gap-6 border-t border-ivory-100/15 py-10 transition-colors duration-500 first:border-t-0 hover:bg-ivory-100/[0.03] sm:gap-10">
                  <span className="font-serif text-sm text-sage sm:text-base">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-3xl font-light transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-ivory-200/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
