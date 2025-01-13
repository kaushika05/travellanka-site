import { Link } from "react-router-dom";

const PremiumSection = () => {
  return (
    <section id="premium" className="py-16 px-4 bg-gradient-custom">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="relative w-24 h-24">
            <img
              src="/assets/travellanka_logo.svg"
              alt="TravelLanka Logo"
              className="w-full h-full rounded-full bg-white p-2"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-200/50 to-yellow-400/50 mix-blend-overlay" />
          </div>
          <h2 className="text-3xl font-bold text-white">TravelLanka Premium</h2>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-6">Exclusive VIP Benefits</h3>
          <div className="space-y-4 text-white/90 text-lg mb-8">
            <p>✓ Access to our exclusive VIP Lounge</p>
            <p>✓ Personal tour guides at discounted rates</p>
            <p>✓ One-on-one sessions with native Sinhala speakers</p>
            <p>✓ Advanced pronunciation workshops</p>
            <p>✓ Curated list of hidden gems and local secrets</p>
            <p>✓ Priority customer support</p>
          </div>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-4">
            Join Premium - $9.99/month
          </button>
          <div>
            <Link 
              to="/terms" 
              className="text-white/90 text-sm underline hover:text-white transition-colors"
            >
              Terms and Conditions apply
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;