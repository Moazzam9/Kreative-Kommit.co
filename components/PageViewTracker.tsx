'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Tracks page views on route changes
 * Must be a client component to use Next.js navigation hooks
 */
function PageViewTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      
      if (!measurementId) return;
      
      // Track page view
      window.gtag('config', measurementId, {
        page_path: url,
      });

      // Also track as a custom event for better visibility in GA4
      window.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
}
