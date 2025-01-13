import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (hasConsent) {
      setShowConsent(false);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
    window.location.href = 'https://www.google.com';
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
      <Dialog open={showConsent} onOpenChange={setShowConsent}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie Settings</DialogTitle>
            <DialogDescription>
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your cookie preferences below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <p className="text-sm text-gray-500">
              Necessary cookies are required for basic website functionality. Optional cookies help us improve our services and show you relevant content.
            </p>
            <div className="flex flex-col gap-3">
              <Button onClick={handleAcceptAll} variant="default">
                Accept All Cookies
              </Button>
              <Button onClick={handleAcceptNecessary} variant="ghost">
                Accept Necessary Cookies Only
              </Button>
              <Button onClick={handleReject} variant="ghost">
                Reject All Cookies (exits page)
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;