const CommunitySection = () => {
  return (
    <section id="community" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community to get insight and help from natives and fellow travelers as well as practice speaking to native speakers!
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
          Join our Discord Server
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;