import { useRef, useState, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/data/content';

export function Join() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  };

  return (
    <section id="join" ref={ref} className="relative overflow-hidden bg-charcoal text-ivory-100">
      <motion.div style={{ y: imgY }} className="absolute inset-0 opacity-30">
        <img
          src={IMAGES.womanMarket}
          alt="Woman selling fresh produce at an Indian outdoor market"
          className="h-[120%] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <Reveal>
          <h2 className="font-serif text-display-sm font-light text-balance">
            Be first in line when <em className="italic text-sage">Freshlink arrives</em> in your
            city
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ivory-200/75">
            We are onboarding farmers and launching city by city. Leave your email and we will
            tell you the moment fresh produce is one tap away.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 w-full max-w-lg">
          {joined ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 rounded-full border border-sage/40 bg-forest/60 px-8 py-5 backdrop-blur"
            >
              <Check className="h-5 w-5 text-sage" />
              <p className="text-sm font-medium sm:text-base">
                You are on the list. Welcome to the direct link.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:rounded-full sm:border sm:border-ivory-100/25 sm:bg-ivory-100/5 sm:p-2 sm:backdrop-blur"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-ivory-100/25 bg-ivory-100/5 px-6 py-4 text-sm text-ivory-100 placeholder:text-ivory-200/40 focus:border-sage focus:outline-none sm:border-0 sm:bg-transparent sm:py-3"
              />
              <button
                type="submit"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ivory-100 px-7 py-4 text-sm font-semibold text-forest transition-colors duration-300 hover:bg-sage sm:py-3"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
