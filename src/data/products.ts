import heroHardware from "@/assets/hero/hardware-showcase.svg";
import antiSlipMattImage from "@/assets/products/anti-slip-mat/anti-slip-matt.svg";
import bedFittingImage from "@/assets/products/bed-fitting/bed-fitting.svg";
import magicCornerImage from "@/assets/products/magic-corner/magic-corner.svg";
import pantryImage from "@/assets/products/pantry/pantry.svg";
import pulloutImage from "@/assets/products/pullout/pullout.svg";
import pvcCutleryImage from "@/assets/products/pvc-cutlery/pvc-cutlery.svg";
import tableBracketImage from "@/assets/products/table-bracket/table-bracket.svg";
import thaliStandImage from "@/assets/products/thali-stand/thali-stand.svg";
import wickerBasketImage from "@/assets/products/wicker-basket/wicker-basket.svg";

export const businessInfo = {
  company: "LEBCO",
  tagline: "Hardware Solutions for Modern Spaces",
  phone: "+91 95187 65434",
  phoneHref: "tel:+919518765434",
  whatsapp: "+91 79772 68987",
  whatsappNumber: "917977268987",
  email: "lebcohardware.marketing@gmail.com",
  emailHref: "mailto:lebcohardware.marketing@gmail.com",
  address:
    "Dharam Phase 2 Complex, Ground Floor, Gala No. 12, Near by Vell Garam Pasayad, Bhiwandi, Pin - 421 308",
  footerAddress:
    "Dharam Phase 2 Complex, Ground Floor, Gala No. 12, Near by Vell Garam Pasayad, Bhiwandi, 421 308",
  hours: "10:00 AM – 7:00 PM",
};

export const heroImage = heroHardware;

export function whatsappHref(productName?: string) {
  const text = productName
    ? `Hello LEBCO, I am interested in ${productName}. Please share more details.`
    : "Hello LEBCO, I would like to enquire about your hardware products.";

  return `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export type SpecRow = {
  label: string;
  value: string;
};

export type SpecTable = {
  title: string;
  rows: SpecRow[];
};

export type Product = {
  slug: string;
  name: string;
  title?: string;
  image: string;
  cardDescription: string;
  description: string;
  features?: string[];
  specifications?: SpecTable[];
  sizes?: string[];
  materials?: string[];
  colours?: string[];
  warranty?: string;
  packageContents?: string;
  keySpecification?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "thali-stand",
    name: "Thali Stand",
    image: thaliStandImage,
    cardDescription: "Strong kitchen storage for thalis, plates, and utensils.",
    description:
      "Premium Thali Stand – Strong, durable, and designed for neat and organized kitchen storage. Perfect for keeping thalis, plates, and utensils safely arranged while saving valuable space.",
    features: [
      "Stainless Steel",
      "Rust Proof",
      "Heavy Wire 3mm",
      "Strong & Durable",
      "Easy to Clean",
      "Space Saving",
      "Kitchen / Hotel / Home",
    ],
    specifications: [
      {
        title: "Catalogue Selling Price",
        rows: [
          { label: "18", value: "₹450" },
          { label: "20", value: "₹450" },
          { label: "22", value: "₹550" },
          { label: "24", value: "₹550" },
        ],
      },
      {
        title: "Small",
        rows: [
          { label: "Length", value: "25 cm / 10 inch" },
          { label: "Breadth", value: "20 cm / 8 inch" },
          { label: "Height", value: "25 cm / 10 inch" },
        ],
      },
      {
        title: "Medium",
        rows: [
          { label: "Length", value: "30 cm / 12 inch" },
          { label: "Breadth", value: "22 cm / 9 inch" },
          { label: "Height", value: "30 cm / 12 inch" },
          { label: "Capacity", value: "8 Thali / Plates" },
        ],
      },
      {
        title: "Large",
        rows: [
          { label: "Length", value: "35 cm / 14 inch" },
          { label: "Breadth", value: "25 cm / 10 inch" },
          { label: "Height", value: "35 cm / 14 inch" },
          { label: "Capacity", value: "12 Thali / Plates" },
        ],
      },
    ],
    sizes: ["18", "20", "22", "24"],
    materials: ["Steel + Grip Coated"],
    colours: ["Grey"],
    keySpecification: "Steel + Grip Coated, sizes 18 / 20 / 22 / 24",
  },
  {
    slug: "pvc-cutlery",
    name: "PVC Cutlery",
    image: pvcCutleryImage,
    cardDescription: "High gloss drawer insert for organized cutlery storage.",
    description:
      "A practical and durable storage solution for keeping spoons, forks, knives, and other kitchen accessories neatly organized. Designed for easy installation and convenient daily use, it helps maintain a clean and clutter-free kitchen.",
    specifications: [
      {
        title: "Product Details",
        rows: [
          { label: "Size", value: "480 MM" },
          { label: "Colour", value: "Grey" },
          { label: "Finish", value: "High Gloss Mirror Finish" },
        ],
      },
      {
        title: "Drawer Dimensions",
        rows: [
          { label: "500 x 535 mm", value: "Width: 15\"-16\"-17\"-18\"-19\" | Depth: 16\"-18\"-20\"-22\"" },
          { label: "600 x 535 mm", value: "Width: 20\"-21\"-22\"-23\" | Depth: 16\"-18\"-20\"-22\"" },
          { label: "700 x 535 mm", value: "Width: 24\"-25\"-26\"-27\" | Depth: 16\"-18\"-20\"-22\"" },
          { label: "800 x 535 mm", value: "Width: 28\"-29\"-30\"-31\" | Depth: 16\"-18\"-20\"-22\"" },
          { label: "900 x 535 mm", value: "Width: 32\"-33\"-34\"-35\"-36\" | Depth: 16\"-18\"-20\"-22\"" },
        ],
      },
    ],
    sizes: ["480 MM"],
    colours: ["Grey"],
    keySpecification: "480 MM, grey, high gloss mirror finish",
  },
  {
    slug: "pullout",
    name: "Pullout",
    image: pulloutImage,
    cardDescription: "Cabinet pullout options available in 2 layer and 3 layer formats.",
    description:
      "Premium high-gloss formula designed to give you a flawless, mirror-like shine in seconds. Its lightweight, long-lasting formula glides smoothly and leaves a luxurious finish that stands out.",
    features: [
      "Ultra High Shine Finish",
      "Smooth Application",
      "Fast Drying",
      "Premium Luxury Formula",
    ],
    specifications: [
      {
        title: "2 Layer Cabinet",
        rows: [
          { label: "200 mm", value: "200 mm width / 164 mm depth / 500 mm height" },
          { label: "250 mm", value: "250 mm width / 214 mm depth / 500 mm height" },
          { label: "300 mm", value: "300 mm width / 264 mm depth / 500 mm height" },
        ],
      },
      {
        title: "3 Layer Cabinet",
        rows: [
          { label: "200 mm", value: "200 mm width / 164 mm depth / 500 mm / 600 mm height" },
          { label: "250 mm", value: "250 mm width / 214 mm depth / 500 mm / 600 mm height" },
          { label: "300 mm", value: "300 mm width / 264 mm depth / 500 mm / 600 mm height" },
        ],
      },
    ],
    keySpecification: "2 layer and 3 layer cabinet formats",
  },
  {
    slug: "pantry",
    name: "Pantry",
    title:
      "Stainless Steel Kitchen Pantry Unit | Modular Kitchen Pull Out Pantry Trolley | Grocery Storage Rack - 150mm / 200mm / 300mm",
    image: pantryImage,
    cardDescription: "Stainless steel pull out pantry trolley for modular kitchen storage.",
    description:
      "This Modular Kitchen Pantry Unit is made of Premium Grade Stainless Steel 202 with heavy chrome plating. It is designed to utilize maximum storage space in your kitchen cabinet. The unit comes with smooth sliding channels and provides easy access to all your grocery, jars, and kitchen items. It is rust-proof, durable and has high load bearing capacity. Perfect solution for modern modular kitchens.",
    specifications: [
      {
        title: "Width Options",
        rows: [
          { label: "100mm", value: "4 inch" },
          { label: "150mm", value: "6 inch" },
          { label: "200mm", value: "8 inch" },
          { label: "300mm", value: "12 inch" },
        ],
      },
      {
        title: "Dimensions",
        rows: [
          { label: "Length / Depth", value: "20 inch / 500mm" },
          { label: "Breadth / Width", value: "6 inch / 150mm" },
          { label: "Height", value: "40 inch / 1000mm — 4 basket" },
          { label: "Height", value: "60 inch / 1500mm — 5-6 basket" },
        ],
      },
      {
        title: "Specifications",
        rows: [
          { label: "Material", value: "Stainless Steel 202" },
          { label: "Finish", value: "Chrome Plated, Mirror Polish" },
          { label: "Installation Type", value: "Floor Mounted / Cabinet Mounted" },
          { label: "Slide", value: "Telescopic Channel Included" },
          { label: "Load Capacity", value: "40-50 KG" },
          { label: "Sheet Thickness", value: "1.2mm Heavy" },
          { label: "Wire Thickness", value: "3mm + 6mm" },
          { label: "Colour", value: "Steel Silver" },
        ],
      },
    ],
    materials: ["Stainless Steel 202"],
    colours: ["Steel Silver"],
    keySpecification: "40-50 KG load capacity, Stainless Steel 202",
    featured: true,
  },
  {
    slug: "anti-slip-matt",
    name: "Anti Slip Matt",
    image: antiSlipMattImage,
    cardDescription: "Dark grey surface protection roll for drawers and shelves.",
    description:
      "Durable and practical solution for protecting kitchen drawers, cabinets, shelves, and surfaces. It provides a firm grip, helps prevent items from sliding, and keeps your storage areas clean and organized.",
    specifications: [
      {
        title: "Product Details",
        rows: [
          { label: "Colour", value: "Grey" },
          { label: "Finish", value: "Dark Grey" },
          { label: "Length", value: "20 meter" },
          { label: "Thickness", value: "1MM" },
          { label: "Sizes", value: "500 / 550 / 600" },
        ],
      },
    ],
    sizes: ["500", "550", "600"],
    colours: ["Grey"],
    keySpecification: "20 meter length, 1MM thickness",
  },
  {
    slug: "magic-corner",
    name: "Magic Corner",
    title:
      "Stainless Steel Magic Corner for Kitchen | Soft Close Magic Corner Basket for Modular Kitchen | L Shape Corner Storage Organizer | 304 SS, Right Hand (900mm)",
    image: magicCornerImage,
    cardDescription: "Soft close L-shape corner storage organizer for modular kitchens.",
    description:
      "Magic Corner is a smart storage solution for your L-shaped modular kitchen. It utilizes your dead corner space with sliding baskets that come out smoothly. Made with 304 Stainless Steel wire, it is rust-proof and heavy-duty. Best for storing heavy utensils, pots, and kitchen items.",
    features: [
      "Smart Space Saving for L-Shape Kitchen Corner",
      "Heavy Duty 25KG Capacity Per Basket",
      "304 Food Grade Stainless Steel - No Rust",
      "Soft Close Sliding Channel - No Noise",
      "Left & Right Hand Option Available",
      "Easy to Install & Clean",
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Finish", value: "Glass" },
          { label: "Material", value: "304 Stainless Steel Wire + Mild Steel Frame" },
          { label: "Colour", value: "Silver (Chrome Finish)" },
          { label: "Cabinet Required", value: "900mm x 900mm (W x D)" },
          { label: "Actual Product Size", value: "860mm x 480mm x 530mm" },
          { label: "Basket Size", value: "2 Baskets - Inner 400mm + Outer 860mm" },
          { label: "Weight", value: "14 KG Approx" },
          { label: "Weight Capacity", value: "50 KG Total (25KG Each Basket)" },
          { label: "Finish", value: "Chrome Plated & SS" },
          { label: "Type", value: "Soft Close Magic Corner" },
          { label: "Hand", value: "Right Hand / Left Hand" },
          { label: "Warranty", value: "2 Years" },
        ],
      },
    ],
    materials: ["304 Stainless Steel Wire + Mild Steel Frame"],
    colours: ["Silver Chrome - Most Selling", "Grey"],
    warranty: "2 Years",
    packageContents: "1 Set Magic Corner Frame + 2 Baskets + Channel + Screws + Installation Manual",
    keySpecification: "900mm x 900mm cabinet required, 50 KG total capacity",
    featured: true,
  },
  {
    slug: "wicker-basket",
    name: "Wicker Basket",
    image: wickerBasketImage,
    cardDescription: "Ventilated wicker basket for utensils, vegetables, and kitchen essentials.",
    description:
      "Wicker Basket is made for modern modular kitchens. Its perforated wicker design allows air circulation, keeping your vegetables and utensils fresh. Made with 304 Stainless Steel and PVC coated wicker sheet, it is rust-proof and long-lasting. Perfect for storing utensils, vegetables, and kitchen essentials.",
    specifications: [
      {
        title: "Sizes",
        rows: [
          { label: "Height", value: "4 inch / 6 inch / 8 inch" },
          { label: "Width", value: "400mm / 15 inch, 450mm / 18 inch, 500mm / 20 inch, 600mm / 24 inch" },
          { label: "Depth", value: "500mm / 20 inch" },
          { label: "Length", value: "20 inch standard" },
        ],
      },
      {
        title: "Types",
        rows: [
          { label: "Plain Wicker Basket", value: "4 inch" },
          { label: "Partition Wicker Basket", value: "Plate" },
          { label: "Perforated Wicker Basket", value: "Available" },
          { label: "Cup & Saucer Wicker Basket", value: "Available" },
        ],
      },
      {
        title: "Weight Capacity",
        rows: [{ label: "Capacity", value: "25-30 KG" }],
      },
    ],
    materials: ["Stainless Steel Wire + Wicker Sheet (PVC Coating)", "Frame: SS 304", "Heavy Duty & Rust Proof"],
    colours: ["Silver + Black Wicker - Most Selling", "Silver + Beige Wicker", "Silver + Brown Wicker"],
    keySpecification: "25-30 KG capacity, SS 304 frame",
    featured: true,
  },
  {
    slug: "bed-fitting",
    name: "Bed Fitting",
    title:
      "Heavy Duty Bed Fitting Set for Wooden Bed | Stainless Steel Bed Joint Connector | Bed Corner Bracket for Double Bed & Single Bed (4 Pcs Set)",
    image: bedFittingImage,
    cardDescription: "Heavy duty bed joint connector set for wooden beds.",
    description:
      "Heavy Duty Bed Fitting is used to joint wooden bed frames strongly. It connects headboard, footboard and side panels without any gap. Made with High Quality Mild Steel with Nickel Plating, it is rust-proof and long-lasting. Supports heavy weight and prevents bed noise. Suitable for Single, Double, King and Queen Size Wooden Beds.",
    features: [
      "Heavy Duty Joint - No Gap, No Noise",
      "High Weight Capacity - Up to 300 KG",
      "Rust Proof",
      "Nickel Plated",
      "Easy to Install & Remove",
      "Perfect for Wooden Bed, Box Bed, Hotel Bed",
      "Made in India - Premium Quality",
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Material", value: "Mild Steel + Nickel Plating" },
          { label: "Colour", value: "Silver Nickel" },
          { label: "Size", value: "120mm x 55mm" },
          { label: "Thickness", value: "3mm" },
          { label: "Type", value: "Heavy Type / Bed Joint Connector / Bed Fitting Clamp Set" },
          { label: "Contains", value: "4 Pcs" },
          { label: "Weight", value: "800 Gram per Set" },
          { label: "Weight Capacity", value: "300 KG Full Bed" },
          { label: "Finish", value: "Nickel Plated" },
          { label: "Use", value: "Wooden Bed, Double Bed, Single Bed, Box Bed" },
          { label: "Warranty", value: "1 Year" },
        ],
      },
      {
        title: "Types",
        rows: [
          { label: "L-Type Bed Fitting", value: "For single bed - 2 inch size" },
          { label: "Bed Joint Fitting (Interlock)", value: "For double bed - Most Selling Hydraulic" },
          { label: "Hydraulic Bed Fitting", value: "For box bed storage" },
        ],
      },
    ],
    materials: ["Mild Steel + Nickel Plating"],
    colours: ["Silver Nickel"],
    warranty: "1 Year",
    packageContents: "4 Pcs Bed Fitting Set + Screws",
    keySpecification: "300 KG full bed capacity, 4 Pcs set",
  },
  {
    slug: "table-bracket",
    name: "Table Bracket",
    title:
      "Heavy Duty Folding Table Bracket | Stainless Steel Wall Mount Table Bracket | 90 Degree L Shape Support Bracket for Wall Table & Shelf (8 Inch, 2 Pcs Set)",
    image: tableBracketImage,
    cardDescription: "Heavy-duty folding wall bracket for tables, shelves, and study tables.",
    description:
      "Table Bracket is a heavy-duty L-shape support bracket used for wall-mounted tables, shelves, study tables, and kitchen platforms. Made with Premium Mild Steel with powder coating, it provides strong support without bending. It has a 90-degree folding option to save space when not in use. Rust-proof and long-lasting.",
    features: [
      "Heavy Duty Support - Up to 100 KG Capacity",
      "90 Degree Folding Design - Space Saving",
      "Rust Proof Powder Coated",
      "Strong 3mm Thickness - No Bending",
      "Easy to Install - With Wall Screws",
      "Multi-Purpose - Table, Shelf, Bench, AC Stand",
    ],
    specifications: [
      {
        title: "Specifications",
        rows: [
          { label: "Material", value: "Mild Steel + Powder Coating" },
          { label: "Colours", value: "Black, White, Silver" },
          { label: "Sizes", value: "8 Inch, 10 Inch, 12 Inch, 14 Inch, 16 Inch, 20 Inch" },
          { label: "Standard Size", value: "8 Inch / 200mm x 130mm" },
          { label: "Thickness", value: "2.5mm to 3mm" },
          { label: "Type", value: "Folding Table Bracket / L Shape Bracket" },
          { label: "Weight Capacity", value: "50 KG Single, 100 KG Pair" },
          { label: "Finish", value: "Powder Coated Matte" },
          { label: "Use", value: "Wall Table, Folding Table, Shelf Support, Study Table" },
          { label: "Warranty", value: "1 Year" },
        ],
      },
      {
        title: "Types",
        rows: [
          { label: "Folding Bracket", value: "Foldable, space saving" },
          { label: "Fixed L Bracket", value: "Simple L shape, for heavy load" },
          { label: "Stainless Steel Bracket", value: "For kitchen" },
        ],
      },
    ],
    materials: ["Mild Steel + Powder Coating"],
    colours: ["Black", "White", "Silver"],
    sizes: ["8 Inch", "10 Inch", "12 Inch", "14 Inch", "16 Inch", "20 Inch"],
    warranty: "1 Year",
    packageContents: "2 Pcs Table Bracket + Wall Screws + Installation Manual",
    keySpecification: "50 KG single, 100 KG pair capacity",
    featured: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
