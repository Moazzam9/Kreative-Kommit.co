// Google Analytics 4 Component
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export function useGoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const url = pathname + searchParams.toString();
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);
}

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (!GA_MEASUREMENT_ID) {
    console.log('GA not initialized:', eventName, eventParams);
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Conversion tracking helpers
export const trackConversion = {
  // Contact form submission
  contactSubmit: (service?: string, city?: string) => {
    trackEvent('contact_form_submit', {
      event_category: 'conversion',
      event_label: 'Contact Form',
      service,
      city,
    });
  },

  // Phone click
  phoneClick: (location: string) => {
    trackEvent('phone_click', {
      event_category: 'conversion',
      event_label: 'Phone Number',
      location,
    });
  },

  // Service view
  serviceView: (service: string, city?: string) => {
    trackEvent('service_view', {
      event_category: 'engagement',
      event_label: 'Service Page View',
      service,
      city,
    });
  },

  // CTA click
  ctaClick: (ctaType: string, page: string) => {
    trackEvent('cta_click', {
      event_category: 'engagement',
      event_label: ctaType,
      page,
    });
  },

  // Internal link click
  internalLinkClick: (from: string, to: string) => {
    trackEvent('internal_link_click', {
      event_category: 'navigation',
      from_page: from,
      to_page: to,
    });
  },
};

// Google Analytics Scripts Component
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
