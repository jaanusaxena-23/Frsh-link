import { FloatingNav } from '@/components/FloatingNav';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Story } from '@/components/Story';
import { Journey } from '@/components/Journey';
import { HowItWorks } from '@/components/HowItWorks';
import { Harvest } from '@/components/Harvest';
import { Join } from '@/components/Join';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <main className="overflow-x-clip">
      <FloatingNav />
      <Hero />
      <Marquee />
      <Story />
      <Journey />
      <HowItWorks />
      <Harvest />
      <Join />
      <Footer />
    </main>
  );
}

export default App;
