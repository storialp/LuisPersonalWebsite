/// <reference types="astro/client" />

interface Window {
  posthog?: {
    capture: (event: string, properties?: Record<string, unknown>) => void;
    identify: (distinctId: string, properties?: Record<string, unknown>) => void;
    reset: () => void;
    captureException: (error: unknown) => void;
    init: (apiKey: string, options?: Record<string, unknown>) => void;
  };
}
