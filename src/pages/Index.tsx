import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import { Download, Globe, BookOpen, Building2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-custom">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            {/* Replace with actual logo */}
            <span className="text-primary text-3xl font-bold">TL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TravelLanka</h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Your ultimate companion for learning Sinhala and exploring Sri Lanka. Plan your journey and immerse yourself in the local culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <Download size={20} />
              Get it on Google Play
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
              <Download size={20} />
              Get it on App Store
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Create your itinerary with Google Gemini</h3>
              <p className="text-gray-600">Plan your perfect Sri Lankan adventure with AI-powered recommendations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learn Sinhala</h3>
              <p className="text-gray-600">Master conversational Sinhala with interactive lessons and native speakers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Book Flights and Hotels</h3>
              <p className="text-gray-600">Seamlessly book your travel arrangements all in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community to get insight and help from natives and fellow travelers as well as practice speaking to native speakers!
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Join our Discord Server
          </button>
        </div>
      </section>

      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <a href="/privacy" className="text-gray-600 underline hover:text-primary mr-4">Privacy Policy</a>
            <a href="/eula" className="text-gray-600 underline hover:text-primary">EULA</a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 TravelLanka Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;