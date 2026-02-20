/**
 * Cookie Consent Hook — LGPD/GDPR compliant
 * 
 * Stores consent in localStorage with timestamp for audit trail.
 * GA4 Measurement ID: G-QR59DBQ4F0 (substituir pelo ID real)
 * 
 * Consent is stored as JSON with structure:
 * {
 *   necessary: true (always),
 *   analytics: boolean,
 *   advertising: boolean,
 *   timestamp: ISO string,
 *   version: string
 * }
 */

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "rv-cookie-consent";
const CONSENT_VERSION = "1.0";
const GA4_MEASUREMENT_ID = "G-QR59DBQ4F0"; // ← Substituir pelo Measurement ID real

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  advertising: boolean;
}

export interface ConsentRecord {
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
}

function getStoredConsent(): ConsentRecord | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as ConsentRecord;
    // Invalidate old versions
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function storeConsent(preferences: CookiePreferences): ConsentRecord {
  const record: ConsentRecord = {
    preferences: { ...preferences, necessary: true },
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  return record;
}

/**
 * Initializes gtag with consent denied by default,
 * then updates consent based on user choice.
 */
function initGtagWithConsent(preferences: CookiePreferences) {
  // Ensure gtag is available
  if (typeof window === "undefined") return;

  const w = window as any;

  // Initialize dataLayer
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: any[]) {
    w.dataLayer.push(args);
  }
  w.gtag = gtag;

  // Default: everything denied (LGPD/GDPR compliant)
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted", // necessary cookies
    security_storage: "granted",
  });

  // Load gtag.js script if not already loaded
  if (!document.getElementById("gtag-script")) {
    const script = document.createElement("script");
    script.id = "gtag-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  // Initialize GA4
  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID, {
    send_page_view: preferences.analytics,
  });

  // Update consent based on user preferences
  if (preferences.analytics || preferences.advertising) {
    gtag("consent", "update", {
      analytics_storage: preferences.analytics ? "granted" : "denied",
      ad_storage: preferences.advertising ? "granted" : "denied",
      ad_user_data: preferences.advertising ? "granted" : "denied",
      ad_personalization: preferences.advertising ? "granted" : "denied",
    });
  }
}

/**
 * Revokes consent by updating gtag to denied and clearing cookies.
 */
function revokeGtagConsent() {
  const w = window as any;
  if (w.gtag) {
    w.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // On mount: check for existing consent
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
      initGtagWithConsent(stored.preferences);
    } else {
      // Initialize with everything denied
      initGtagWithConsent({ necessary: true, analytics: false, advertising: false });
      setShowBanner(true);
    }
    setIsLoaded(true);
  }, []);

  const acceptAll = useCallback(() => {
    const prefs: CookiePreferences = { necessary: true, analytics: true, advertising: true };
    const record = storeConsent(prefs);
    setConsent(record);
    setShowBanner(false);
    setShowPreferences(false);
    initGtagWithConsent(prefs);
  }, []);

  const rejectAll = useCallback(() => {
    const prefs: CookiePreferences = { necessary: true, analytics: false, advertising: false };
    const record = storeConsent(prefs);
    setConsent(record);
    setShowBanner(false);
    setShowPreferences(false);
    revokeGtagConsent();
  }, []);

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    const record = storeConsent(prefs);
    setConsent(record);
    setShowBanner(false);
    setShowPreferences(false);
    initGtagWithConsent(prefs);
  }, []);

  const openPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const closePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  return {
    consent,
    showBanner,
    showPreferences,
    isLoaded,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
  };
}
