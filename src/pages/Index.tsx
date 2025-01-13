import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PremiumSection from '../components/sections/PremiumSection';
import CommunitySection from '../components/sections/CommunitySection';
import AboutSection from '../components/sections/AboutSection';
import ContactForm from '../components/sections/ContactForm';
import Footer from '../components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PremiumSection />
      <CommunitySection />
      <AboutSection />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;