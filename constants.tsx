
import { Product } from './types';

const AMAZON_LINK = 'https://amzn.in/d/8hEROr9';

export const PRODUCTS: Product[] = [
  {
    id: 'ts-m-slim-zip-01',
    name: 'Pro-Elite Slim Fit Zipper Tracksuit',
    price: 5499,
    description: 'The ultimate performance tracksuit for men. Features a streamlined slim fit, high-tensile zippers, and advanced moisture-wicking FlexLinen fabric.',
    category: 'Men',
    type: 'Tracksuit',
    fit: 'Slim Fit',
    material: 'Polyester',
    style: 'Zipper',
    season: 'All Season',
    images: [
      'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Midnight Black', 'Slate Grey'],
    isFeatured: true,
    fabricDetails: '92% Performance Polyester, 8% Elastane. Nano-tech weave.',
    fitGuide: 'Athletic slim fit. Tapered legs with ankle zips for easy removal over shoes.',
    amazonUrl: AMAZON_LINK
  },
  {
    id: 'ts-w-winter-hood-02',
    name: 'Thermal Arctic Hooded Tracksuit',
    price: 6299,
    description: 'Designed for the cold. This heavyweight cotton-blend tracksuit features a thermal fleece lining and a wind-resistant hood.',
    category: 'Women',
    type: 'Tracksuit',
    fit: 'Regular Fit',
    material: 'Cotton Blend',
    style: 'Hooded',
    season: 'Winter',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cloud Grey', 'Blush Pink'],
    isFeatured: true,
    fabricDetails: '400GSM Heavyweight Fleece. 80% Cotton, 20% Polyester.',
    fitGuide: 'Relaxed regular fit. Cuffed sleeves and ankles to lock in heat.',
    amazonUrl: AMAZON_LINK
  },
  {
    id: 'ts-m-summer-breath-03',
    name: 'Vortex Breathable Summer Set',
    price: 3899,
    description: 'Ultra-lightweight and half-sleeve design optimized for summer gym sessions. High-ventilation panels in heat zones.',
    category: 'Men',
    type: 'Tracksuit',
    fit: 'Regular Fit',
    material: 'Polyester',
    style: 'Half Sleeve',
    season: 'Summer',
    images: [
      'https://images.unsplash.com/photo-1528858755052-cacfa0dd164a?q=80&w=1146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Electric Blue', 'White'],
    isFeatured: true,
    fabricDetails: '100% Recycled Breathable Polyester. Laser-cut perforations.',
    fitGuide: 'Standard regular fit. Shorts with internal drawstring.',
    amazonUrl: AMAZON_LINK
  },
  {
    id: 'ts-m-full-poly-04',
    name: 'Titanium Full Sleeve Poly-Suit',
    price: 4999,
    description: 'Classic full-sleeve high-gloss polyester tracksuit. Water-repellent and perfect for outdoor track training.',
    category: 'Men',
    type: 'Tracksuit',
    fit: 'Regular Fit',
    material: 'Polyester',
    style: 'Full Sleeve',
    season: 'All Season',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Royal Blue', 'Deep Black'],
    isFeatured: false,
    fabricDetails: 'High-density gloss polyester. 100% Windproof.',
    fitGuide: 'Classic regular fit. Full-length jacket and trousers.',
    amazonUrl: AMAZON_LINK
  },
  {
    id: 'ts-w-slim-zip-05',
    name: 'Aero-Sculpt Slim Zipper Suit',
    price: 5799,
    description: 'Sculpted for the female form. This slim-fit tracksuit offers high compression and a stylish cropped zipper jacket.',
    category: 'Women',
    type: 'Tracksuit',
    fit: 'Slim Fit',
    material: 'Polyester',
    style: 'Zipper',
    season: 'All Season',
    images: [
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['XXS', 'XS', 'S', 'M'],
    colors: ['Emerald Green', 'Black'],
    isFeatured: true,
    fabricDetails: 'High-stretch polyester knit. Seamless construction.',
    fitGuide: 'Extreme slim fit. Contoured waistband.',
    amazonUrl: AMAZON_LINK
  },
  {
    id: 'ts-m-hood-cotton-06',
    name: 'Heritage Cotton Hooded Set',
    price: 4599,
    description: 'Premium cotton-blend hooded tracksuit. Soft-touch fabric for ultimate pre-game comfort and style.',
    category: 'Men',
    type: 'Tracksuit',
    fit: 'Regular Fit',
    material: 'Cotton Blend',
    style: 'Hooded',
    season: 'All Season',
    images: [
      'https://images.unsplash.com/photo-1511105612320-2e62a04dd044?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539273331797-a811ef467ca8?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Oatmeal', 'Navy'],
    isFeatured: false,
    fabricDetails: 'Premium 320GSM Cotton-Polyester blend.',
    fitGuide: 'Standard regular fit. Drawstring hood.',
    amazonUrl: AMAZON_LINK
  }
];
