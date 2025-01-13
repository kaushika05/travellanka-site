import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CookieConsentProps {
  isPreferences?: boolean;
  onClose?: () => void;
}

const CookieConsent = ({ isPreferences = false, onClose }: CookieConsentProps) => {
  const [showConsent, setShowConsent] = useState(true);
  const [currentPreference, setCurrentPreference] = useState<string | null>(null);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (hasConsent && !isPreferences) {
      setShowConsent(false);
    }
    setCurrentPreference(hasConsent);
  }, [isPreferences]);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
    onClose?.();
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowConsent(false);
    onClose?.();
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
    window.location.href = 'https://www.google.com';
  };

  const handleDialogClose = () => {
    setShowConsent(false);
    onClose?.();
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
      <Dialog open={showConsent} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {isPreferences ? "Cookie Preferences" : "Cookie Settings"}
            </DialogTitle>
            <DialogDescription>
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your cookie preferences below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {isPreferences && (
              <div className="mb-4 text-sm">
                <p className="font-medium mb-2">Current Setting:</p>
                <p className="text-gray-600">
                  {currentPreference === 'all' && "All cookies accepted"}
                  {currentPreference === 'necessary' && "Only necessary cookies accepted"}
                  {currentPreference === 'rejected' && "All cookies rejected"}
                  {!currentPreference && "No preference set"}
                </p>
              </div>
            )}
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