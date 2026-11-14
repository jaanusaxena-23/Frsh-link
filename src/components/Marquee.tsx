import { IMAGES } from '@/data/content';

const WORDS = ['Fair prices', 'Zero middlemen', 'Harvest-fresh', 'Farm direct', 'Season first'];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-charcoal/10 bg-ivory-50 py-10">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10 pr-10" aria-hidden={copy === 1}>
            {WORDS.map((word) => (
              <span key={word} className="flex items-center gap-10">
                <span className="font-serif text-2xl font-light italic text-forest sm:text-3xl">
                  {word}
                </span>
                <img
                  src={IMAGES.foggyField}
                  alt=""
                  className="h-10 w-16 rounded-full object-cover"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
