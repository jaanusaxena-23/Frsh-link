import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CATEGORIES, HARVEST_ITEMS, IMAGES, type Category, type HarvestItem } from '@/data/content';

const CATEGORY_IMAGES: Record<Category, { image: string; count: number; blurb: string }> = {
  'Fresh Vegetables': {
    image: IMAGES.catVegetables,
    count: HARVEST_ITEMS.filter((i) => i.category === 'Fresh Vegetables').length,
    blurb: 'Picked at dawn, in your kitchen by dusk.',
  },
  'Leafy Greens': {
    image: IMAGES.catGreens,
    count: HARVEST_ITEMS.filter((i) => i.category === 'Leafy Greens').length,
    blurb: 'Bundled within hours of the morning cut.',
  },
  'Seasonal Fruits': {
    image: IMAGES.catFruits,
    count: HARVEST_ITEMS.filter((i) => i.category === 'Seasonal Fruits').length,
    blurb: 'Only what the season is truly offering.',
  },
  'Root Vegetables': {
    image: IMAGES.catRoots,
    count: HARVEST_ITEMS.filter((i) => i.category === 'Root Vegetables').length,
    blurb: 'Straight from the soil, soil still on them.',
  },
  'Farm Essentials': {
    image: IMAGES.catEssentials,
    count: HARVEST_ITEMS.filter((i) => i.category === 'Farm Essentials').length,
    blurb: 'Eggs, honey and grains from the same farms.',
  },
};

const OFFSETS = ['lg:mt-0', 'lg:mt-12', 'lg:mt-4', 'lg:mt-16', 'lg:mt-8'];

export function Harvest() {
  const [active, setActive] = useState<Category | 'All'>('All');

  const items: HarvestItem[] =
    active === 'All'
      ? HARVEST_ITEMS
      : HARVEST_ITEMS.filter((item) => item.category === active);

  return (
    <section id="harvest" className="overflow-hidden py-25 sm:py-35">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-olive">
              <span className="h-px w-12 bg-olive" />
              The Harvest
            </p>
            <h2 className="max-w-2xl font-serif text-[clamp(2.25rem,6vw,5rem)] font-light uppercase leading-[1.02] tracking-tight text-forest text-balance">
              Today&apos;s picking, <em className="italic text-olive">straight from the field</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm leading-relaxed text-charcoal/60">
              Every listing below was in the ground this week. When it sells out, it is gone —
              until the next harvest.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {CATEGORIES.map((cat, i) => {
              const selected = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(selected ? 'All' : cat)}
                  className={`group relative overflow-hidden rounded-3xl text-left transition-all duration-500 ${OFFSETS[i]} ${
                    selected ? 'ring-2 ring-forest ring-offset-4 ring-offset-ivory-100' : ''
                  }`}
                >
                  <img
                    src={CATEGORY_IMAGES[cat].image}
                    alt={cat}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      selected
                        ? 'bg-forest/55'
                        : 'bg-gradient-to-t from-forest-800/75 via-forest-800/15 to-transparent group-hover:bg-forest/35'
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-5">
                    <div>
                      <h3 className="font-serif text-lg font-light leading-tight text-ivory-100 sm:text-xl">
                        {cat}
                      </h3>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ivory-200/80">
                        {CATEGORY_IMAGES[cat].count} listings
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ivory-100/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory-100" />
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-20 lg:mt-28">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/50">
              {active === 'All' ? 'Everything in season' : active}
              <span className="ml-3 text-charcoal/35">({items.length} items)</span>
            </p>
            {active !== 'All' && (
              <button
                onClick={() => setActive('All')}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-olive transition-colors hover:text-forest"
              >
                View everything
              </button>
            )}
          </div>

          <motion.div layout className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-serif text-lg leading-snug text-forest sm:text-xl">
                        {item.name}
                      </h4>
                      <p className="shrink-0 font-serif text-lg text-olive">₹{item.price}</p>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-charcoal/45">
                      {item.unit} · {item.farm}
                    </p>
                    <span className="mt-4 block h-px w-8 bg-olive/60 transition-all duration-500 group-hover:w-16 group-hover:bg-forest" />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-24 sm:mt-32">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src={IMAGES.aerialTemple}
              alt="Aerial shot of vibrant green fields surrounding a small temple near Pune, India"
              className="aspect-[21/9] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-800/70 via-transparent to-transparent p-8 sm:p-12">
              <p className="max-w-md font-serif text-2xl font-light leading-snug text-ivory-100 sm:text-3xl">
                Fourteen states. Thousands of fields. One direct link.
              </p>
            </div>
          </div>
        </div>

        <Reveal className="mt-20 flex justify-center">
          <a
            href="#join"
            className="group inline-flex items-center gap-3 rounded-full border border-forest px-8 py-4 text-sm font-semibold uppercase tracking-widest text-forest transition-all duration-300 hover:bg-forest hover:text-ivory-100"
          >
            Get the full harvest when we launch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
