// ~/composables/businessInfo.js
import { CONTACT_INFO, SOCIAL_LINKS } from './config';

export const businessInfo = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": CONTACT_INFO.businessName,
  "description": "Specializing in web development, branding, and SEO services for small to medium businesses across the UK. We're all about creating impactful digital experiences.",
  "url": "http://www.brandbadger.co.uk",
  "telephone": CONTACT_INFO.phone,
  "email": CONTACT_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Operate Remotely - Based in North Tyneside",
    "addressLocality": "North Tyneside",
    "addressRegion": "TYN",
    "postalCode": "NE12",
    "addressCountry": "UK"
  },
  "areaServed": [
    "North Tyneside",
    "South Tyneside",
    "Newcastle",
    "Northumberland",
    "Durham",
    "UK"
  ],
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": Object.values(SOCIAL_LINKS),
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.9",
//     "reviewCount": "25"
//   },
  "makesOffer": [
    // Details of services offered
  ],
  // Additional SEO and business details here
};
