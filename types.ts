export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgImage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}
