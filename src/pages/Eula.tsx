import Navbar from '../components/Navbar';

const Eula = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">End User License Agreement</h1>
        <div className="prose">
          <p>EULA content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Eula;