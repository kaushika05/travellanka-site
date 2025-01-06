import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import { Download, Globe, BookOpen, Building2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Index = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      joinBeta: false,
      marketing: false,
    },
  });

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    toast.success("Message sent successfully!");
    form.reset();
  };

  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-custom relative">
        {/* Sri Lankan flag overlay */}
        <div 
          className="absolute inset-0 bg-[url('/sri-lanka-flag.png')] bg-cover bg-center opacity-20 mix-blend-overlay"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-primary text-3xl font-bold">TL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">TravelLanka</h1>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Your ultimate companion for learning Sinhala and exploring Sri Lanka. Plan your journey and immerse yourself in the local culture.
          </p>
          <p className="text-white text-2xl font-bold mb-8">COMING SOON - JOIN THE BETA BELOW!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
              <Download size={20} />
              Get it on Google Play
            </button>
            <button className="bg-primary text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
              <Download size={20} />
              Get it on App Store
            </button>
          </div>
        </div>
      </section>

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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Join the Beta or Contact Us</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="joinBeta"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I want to join the beta program
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="marketing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I consent to receiving occasional marketing messages
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </Form>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="mb-8 flex justify-center">
            <img 
              src="/developer-image.png" 
              alt="Developer" 
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              As a solo developer with American-Sri Lankan heritage, I created TravelLanka to bridge cultures and share the beauty of Sri Lanka with the world. Growing up between two cultures gave me a unique perspective on the importance of cultural exchange and understanding.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in creating this app stems from a deep desire to share my Sri Lankan heritage and make it accessible to travelers worldwide. I believe that language is the key to truly experiencing a culture, and that's why TravelLanka focuses on teaching conversational Sinhala alongside travel planning.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Flutter/Dart for cross-platform mobile development</li>
                <li>Google Firebase for backend infrastructure</li>
                <li>Google Gemini AI for intelligent travel planning</li>
                <li>Figma for UI/UX design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <img src="/us-flag.png" alt="US Flag" className="w-8 h-8 object-cover rounded-sm" />
            <img src="/lk-flag.png" alt="Sri Lanka Flag" className="w-8 h-8 object-cover rounded-sm" />
          </div>
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
