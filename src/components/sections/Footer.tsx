import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <Link to="/privacy" className="text-gray-600 underline hover:text-primary mr-4">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-600 underline hover:text-primary mr-4">Terms & Conditions</Link>
          <Link to="/eula" className="text-gray-600 underline hover:text-primary">EULA</Link>
        </div>
        <p className="text-gray-500 text-sm">© 2025 TravelLanka Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;