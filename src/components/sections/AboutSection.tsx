const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-gray-800 font-bold text-center mb-8">About Me</h2>
        <div className="mb-8 flex justify-center">
          <img
            src="/assets/headshot.jpeg"
            alt="Developer"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-800 mb-6">
            As a solo developer with American-Sri Lankan heritage, I created TravelLanka to bridge cultures and share the beauty of Sri Lanka with the world. Growing up between two cultures gave me a unique perspective on the importance of cultural exchange and understanding.
          </p>
          <p className="text-gray-800 mb-6">
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
  );
};

export default AboutSection;