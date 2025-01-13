import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from '../ui/button';
import CookieConsent from '../CookieConsent';

const Footer = () => {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);

  return (
    <>
      <footer className="bg-gray-50 py-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-2">
            <Link to="/privacy" className="text-gray-600 underline hover:text-primary mr-4">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 underline hover:text-primary mr-4">Terms & Conditions</Link>
            <Link to="/eula" className="text-gray-600 underline hover:text-primary mr-4">EULA</Link>
            <Button 
              variant="link" 
              className="text-gray-600 underline hover:text-primary p-0"
              onClick={() => setShowCookiePreferences(true)}
            >
              Cookie Preferences
            </Button>
          </div>
          <p className="text-gray-500 text-sm">© 2025 TravelLanka Inc. All rights reserved.</p>
        </div>
      </footer>
      {showCookiePreferences && (
        <CookieConsent 
          isPreferences={true} 
          onClose={() => setShowCookiePreferences(false)} 
        />
      )}
    </>
  );
};

export default Footer;