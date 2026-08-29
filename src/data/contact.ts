import { Mail,MapPin,Clock3,Phone } from "lucide-react";
export const contactPage = {
  contactDetails: [
    {
      icon: MapPin,
      label: "Headquarters",
      value: "1155 East Putnam Avenue (Suite 2A), Greenwich, CT 06830",
      description:
        "Serving enterprise clients across the United States, the United Kingdom, and the European Union.",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@techneeq.com",
      href: "mailto:info@techneeq.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "203-990-0199",
      href: "tel:+12039900199",
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