import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { TestimonialsSection } from './components/Testimonial';
import { FAQSection } from './components/FAQItem';
import { ContactForm } from './components/ContactForm';
import { MapBlock } from './components/MapBlock';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <TestimonialsSection />
        <FAQSection />
        <MapBlock />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}