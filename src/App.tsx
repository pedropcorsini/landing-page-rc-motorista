import { Contact } from './components/Contact';
import { Differentials } from './components/Differentials';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-50 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
