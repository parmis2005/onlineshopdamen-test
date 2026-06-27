export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  tag?: 'NEU' | 'SALE' | 'BESTSELLER';
  colors?: string[];
  sizes?: string[];
  description?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  href: string;
  count: number;
}
