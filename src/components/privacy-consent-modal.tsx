"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function PrivacyConsentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('finwage-privacy-consent');
    if (!consent) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    if (acceptedTerms) {
      localStorage.setItem('finwage-privacy-consent', 'true');
      localStorage.setItem('finwage-privacy-consent-date', new Date().toISOString());
      setHasConsented(true);
      setIsOpen(false);
    }
  };

  const handleDecline = () => {
    // You might want to redirect to a different page or show additional information
    setIsOpen(false);
  };

  if (hasConsented) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            🔒 Privacy & Cookies
          </DialogTitle>
          <DialogDescription className="text-left space-y-3">
            <p>
              We use cookies and similar technologies to enhance your experience, 
              analyze site usage, and assist in our marketing efforts.
            </p>
            <p>
              By using FinWage, you agree to our use of cookies and our data practices 
              as described in our Privacy Policy.
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center space-x-2 py-4">
          <Checkbox 
            id="accept-terms" 
            checked={acceptedTerms}
            onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
          />
          <label
            htmlFor="accept-terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <Link 
              href="/legal/privacy" 
              className="text-primary hover:underline"
              target="_blank"
            >
              Privacy Policy
            </Link>
            {" "}and{" "}
            <Link 
              href="/legal/terms" 
              className="text-primary hover:underline"
              target="_blank"
            >
              Terms of Service
            </Link>
          </label>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="w-full sm:w-auto"
          >
            Decline
          </Button>
          <Button 
            onClick={handleAccept}
            disabled={!acceptedTerms}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90"
          >
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}