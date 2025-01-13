import { Globe, BookOpen, Building2 } from 'lucide-react';

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;