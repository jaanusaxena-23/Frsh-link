import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { IMAGES, STATS } from '@/data/content';

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imgYSlow = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden py-25 sm:py-35">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="relative lg:col-span-5">
          <motion.div style={{ y: imgY }} className="overflow-hidden rounded-[2rem]">
            <img
              src={IMAGES.farmerRice}
              alt="Indian farmer harvesting rice in West Bengal"
              className="aspect-[3/4] w-full scale-110 object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            style={{ y: imgYSlow }}
            className="absolute -bottom-10 -right-4 hidden w-52 overflow-hidden rounded-2xl border-8 border-ivory-100 shadow-xl sm:block lg:-right-16 lg:w-64"
          >
            <img
              src={IMAGES.produceBasket}
              alt="Basket of freshly harvested organic vegetables"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <Reveal className="mt-8 lg:mt-14 lg:max-w-xs" delay={0.2}>
            <p className="font-serif text-2xl italic leading-snug text-olive">
              “The trader decided the price. Now the price is decided by my harvest.”
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-dark">
              Ramesh Y. — Farmer, Nashik
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-olive">
              <span className="h-px w-10 bg-olive" />
              Our Story
            </p>
            <h2 className="font-serif text-display-sm font-light text-forest text-balance">
              Every rupee lost to a middleman, <em className="italic text-olive">is a rupee</em>{' '}
              taken from a farmer.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80">
              A tomato travels an average of 1,900 kilometres and passes through four or five
              hands before it reaches an Indian kitchen. At each step, the price rises and the
              freshness falls — while the farmer, who did the actual growing, keeps the smallest
              share.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
              Freshlink removes those hands. One direct link between the person who harvests and
              the person who eats. Fair prices for farmers. Fresher food for you. Nothing in
              between.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:mt-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-charcoal/10 pt-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <p className="font-serif text-4xl font-light text-forest sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-sm leading-snug text-charcoal/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
