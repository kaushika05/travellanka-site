import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-custom relative">
      {/* Sri Lankan flag overlay */}
      <div 
        className="absolute inset-0 bg-[url('/assets/sri-lanka-flag.png')] bg-cover bg-center opacity-20 mix-blend-overlay"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
          <img
            src="/assets/travellanka_logo.svg"
            alt="TravelLanka Logo"
            className="w-16 h-16 object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TravelLanka</h1>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Your ultimate companion for learning Sinhala and exploring Sri Lanka. Plan your journey and immerse
          yourself in the local culture.
        </p>
        <p className="text-white text-2xl font-bold mb-8">COMING SOON - JOIN THE BETA BELOW!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <Download size={20} />
            Get it on Google Play
          </button>
          <button className="bg-white text-primary px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <Download size={20} />
            Get it on App Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;