export interface Review {
  _id: string;
  authorName: string;
  date: string;
  rating: number;
  text: string;
}

export interface PricingItem {
  layanan: string;
  harga: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  whatsappUrl: string;
  instagramUrl: string;
  googleMapsUrl: string;
  openingHours: string;
  plusCode: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TipItem {
  title: string;
  description: string;
  icon: string;
}
