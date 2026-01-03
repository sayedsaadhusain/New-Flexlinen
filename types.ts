
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Men' | 'Women';
  type: 'Tracksuit' | 'Hoodie' | 'Joggers' | 'Set';
  fit: 'Slim Fit' | 'Regular Fit';
  material: 'Polyester' | 'Cotton Blend';
  style: 'Zipper' | 'Hooded' | 'Full Sleeve' | 'Half Sleeve';
  season: 'Summer' | 'Winter' | 'All Season';
  images: string[];
  sizes: string[];
  colors: string[];
  isFeatured?: boolean;
  fabricDetails: string;
  fitGuide: string;
  amazonUrl?: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  displayName?: string;
}
