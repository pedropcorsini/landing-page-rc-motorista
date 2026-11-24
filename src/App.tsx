import { Analytics } from '@vercel/analytics/react';
import { About } from './components/About';
import { CtaBanner } from './components/CtaBanner';
import { Differentials } from './components/Differentials';
import { Faq } from './components/Faq';
import { FleetShowcase } from './components/FleetShowcase';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink font-body text-mist antialiased">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:font-heading focus:text-sm focus:font-bold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Services />
        <FleetShowcase />
        <Differentials />
        <HowItWorks />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Analytics />
    </div>
  );
}
