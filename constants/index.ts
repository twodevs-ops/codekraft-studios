// Company & Business Info
export {
  COMPANY_NAME,
  COMPANY_WEBSITE,
  pricingPlans,
  process,
  reasons,
  services,
  testimonials,
} from "./company";

// Navigation
export { navItems } from "./navigation";

// Contact Information
export { contactInfo, contactPageContent, contactFAQ } from "./contact";

// Team & About
export { teamMembers, teamStats, aboutPageContent } from "./team";

// Technologies
export { technologies, techSectionTitle } from "./technologies";

// Comparisons
export { comparisons } from "./comparisons";

// Home Page
export { heroSection, sectionTitles, pricingSection, ctaSection } from "./home";

// Services Page
export { servicesPageContent } from "./services-page";

// Footer
export { footerContent } from "./footer";

// Header
export { headerContent } from "./header";

// SEO & Sitemap
export const LAST_MODIFIED = new Date();
export const CHANGE_FREQUENCY = {
  WEEKLY: "weekly" as const,
  MONTHLY: "monthly" as const,
};
export const PRIORITY = {
  HOME: 1 as const,
  SERVICES: 0.9 as const,
  PORTFOLIO: 0.9 as const,
  PRICING: 0.8 as const,
  ABOUT: 0.7 as const,
  CONTACT: 0.8 as const,
  BLOG: 0.7 as const,
};

// Legacy exports (for backward compatibility)
export const WHATSAPP_NUMBER = "917719447215";
export const PHONE_NUMBER = "+917719447215";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SUPPORT_EMAIL = "support@codekraftstudios.in";
