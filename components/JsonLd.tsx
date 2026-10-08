import { businessData } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: businessData.name,
    description: businessData.about,
    telephone: businessData.contact.primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessData.address.building}, ${businessData.address.street}`,
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.state,
      postalCode: businessData.address.pincode,
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessData.rating.score,
      reviewCount: businessData.rating.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "10:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
