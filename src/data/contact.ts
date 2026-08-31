import { Mail,MapPin,Clock3,Phone } from "lucide-react";
const EMAIL = "info@techneeq.com"
const ADDRESS = "1155 East Putnam Avenue (Suite 2A), Greenwich, CT 06830"
const PHONE = "203-990-0199"
export const contactPage = {
  EMAIL: EMAIL,
  ADDRESS: ADDRESS,
  PHONE: PHONE,
  INSTAGRAM: "#",
  LINKEDIN: "#",
  contactDetails: [
    {
      icon: MapPin,
      label: "Headquarters",
      value: ADDRESS,
      description:
        "Serving enterprise clients across the United States, the United Kingdom, and the European Union.",
    },
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PHONE,
      href: `tel:+${PHONE}`,
    },
    {
      icon: Clock3,
      label: "Response time",
      value: "Within two business days",
    },
  ],

  offices: [
    {
      id: "01",
      country: "United States",
      city: "Greenwich, Connecticut",
      description:
        "Headquarters — 1155 East Putnam Avenue (Suite 2A), Greenwich, CT 06830.",
      bbox: "-73.597,41.031,-73.567,41.052",
    },
    {
      id: "02",
      country: "India",
      city: "Bengaluru, India",
      description: "17 km bannerghatta road, bangalore 560083",
      bbox: "77.5,12.8,78.2,13.4",
      mapsUrl: "https://maps.app.goo.gl/KoJXvhbCA9zh1bH19",
    },
  ],
};