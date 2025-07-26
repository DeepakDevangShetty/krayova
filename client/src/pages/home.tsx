import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import CreativeSection from '@/components/creative-section';
import ServicesSection from '@/components/services-section';
import ReviewsSection from '@/components/reviews-section';
import PortfolioSection from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CreativeSection />
      <ServicesSection />
      <ReviewsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
