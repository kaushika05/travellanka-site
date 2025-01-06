import Navbar from '../components/Navbar';

const Privacy = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose">
          <p>Privacy policy content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;