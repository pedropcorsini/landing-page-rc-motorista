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
      <Header />
      <main>
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
    </div>
  );
}
