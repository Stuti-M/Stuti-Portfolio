import type { SVGProps } from "react";

/**
 * Official S.H.I.E.L.D. Eagle Crest Emblem
 */
export function ShieldLogoIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      {/* S.H.I.E.L.D. Stylized Hawk / Eagle Silhouette */}
      <path
        d="M12 4.5L14.2 8.5L18.5 7.5L16.5 11.5L20 12L16.5 13.5L18.5 17.5L14.2 16.5L12 20.5L9.8 16.5L5.5 17.5L7.5 13.5L4 12L7.5 11.5L5.5 7.5L9.8 8.5L12 4.5Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Official Black Widow Hourglass Belt Buckle Logo (Crisp Vector SVG)
 */
export function BlackWidowIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6 3H18L13.5 11.2C13.2 11.7 13.2 12.3 13.5 12.8L18 21H6L10.5 12.8C10.8 12.3 10.8 11.7 10.5 11.2L6 3Z"
        fill="currentColor"
      />
      <path
        d="M7.8 4.5H16.2L12.5 11.3C12.3 11.7 12.3 12.3 12.5 12.7L16.2 19.5H7.8L11.5 12.7C11.7 12.3 11.7 11.7 11.5 11.3L7.8 4.5Z"
        fill="#DC2626"
      />
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

/**
 * Arc Reactor SVG Icon
 */
export function ArcReactorIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 3V7M12 17V21M3 12H7M17 12H21M5.6 5.6L8.5 8.5M15.5 15.5L18.4 18.4M5.6 18.4L8.5 15.5M15.5 8.5L18.4 5.6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Spider-Man Web Radar Icon
 */
export function SpiderWebIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 3L12 21M3 12L21 12M5.6 5.6L18.4 18.4M5.6 18.4L18.4 5.6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 8L12 10L16 8L14 12L16 16L12 14L8 16L10 12L8 8Z" fill="currentColor" fillOpacity="0.4" />
    </svg>
  );
}

/**
 * Mjolnir Hammer Icon
 */
export function MjolnirIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect x="5" y="4" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.25" />
      <path d="M12 12V21M10 21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 6V10M16 6V10" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

/**
 * Captain America Shield Icon
 */
export function CapShieldIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      <polygon points="12,9.5 12.8,11.2 14.6,11.2 13.2,12.3 13.7,14 12,13 10.3,14 10.8,12.3 9.4,11.2 11.2,11.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Gamma Biohazard / Radiation Icon
 */
export function GammaIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 9.5C10.5 9.5 9.2 8.6 8.5 7.4L6.8 10.4C8 12.4 10 13.7 12 14C14 13.7 16 12.4 17.2 10.4L15.5 7.4C14.8 8.6 13.5 9.5 12 9.5Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );
}

/**
 * Hawkeye Target Crosshair Icon
 */
export function HawkeyeTargetIcon({ className = "h-4 w-4", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
