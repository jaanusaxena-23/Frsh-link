import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

const HEADLINE = ['The way food', 'reaches you', 'matters.'];

const JOURNEY = [
  {
    number: 'I',
    title: 'Grown, not stored',
    text: 'Your food begins on a real farm — harvested when ripe, never ripened in a truck. Nothing waits in a warehouse losing its life.',
  },
  {
    number: 'II',
    title: 'One link, no chains',
    text: 'The farmer sets a fair price, you pay it. No traders stacking margins, no commissions leaking away the value of a day’s work.',
  },
  {
    number: 'III',
    title: 'Home by evening',
    text: 'From soil to doorstep in hours, not weeks. Produce that still remembers the field it came from — and the hands that grew it.',
  },
];

export function Journey() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgMain = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imgSmall = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section id="journey" ref={ref} className="relative overflow-hidden bg-ivory-100 py-25 sm:py-35">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-olive">
            <span className="h-px w-12 bg-olive" />
            Why Freshlink exists
          </p>
        </Reveal>

        <h2 className="max-w-6xl font-serif text-[clamp(2.25rem,6.5vw,5.5rem)] font-light uppercase leading-[1.02] tracking-tight text-forest text-balance">
          {HEADLINE.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 2 ? <em className="italic text-olive">{line}</em> : line}
              </motion.span>
            </span>
          ))}
        </h2>

        <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-7">
            <motion.div
              style={{ y: imgMain }}
              className="overflow-hidden rounded-[2rem] sm:w-10/12"
            >
              <img
                src={IMAGES.womanHarvest}
                alt="Woman harvesting beets in a sunlit Indian field"
                className="aspect-[4/5] w-full scale-110 object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              style={{ y: imgSmall }}
              className="absolute -bottom-12 right-0 hidden w-2/5 overflow-hidden rounded-2xl border-8 border-ivory-100 shadow-2xl shadow-forest-800/15 sm:block lg:-right-8 lg:w-1/3"
            >
              <img
                src={IMAGES.produceWicker}
                alt="Fresh tomatoes and peppers gathered in a wicker basket"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <Reveal delay={0.2} className="mt-16 sm:mt-24 sm:w-10/12 lg:mt-32">
              <p className="text-lg leading-relaxed text-charcoal/80">
                Most food in India changes hands five times before it reaches a kitchen. Each
                hand takes a cut. Each day in transit takes a little of the taste. By the time a
                tomato arrives, it has forgotten the farm it grew on.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
                Freshlink keeps it simple: one farmer, one consumer, one honest price — and food
                that arrives the way it left the field.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            {JOURNEY.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="group border-t border-charcoal/10 py-9 first:border-t-2 first:border-forest sm:py-10">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-2xl font-light text-forest transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                      {step.title}
                    </h3>
                    <span className="font-serif text-sm italic text-sage-dark">{step.number}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/65 sm:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <p className="mt-6 font-serif text-xl italic leading-snug text-olive">
                Because food that travels well, begins where it was grown.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
