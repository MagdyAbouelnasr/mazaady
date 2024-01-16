interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  children: Category[];
  circle_icon: string;
  disable_shipping: number;
}

interface Property {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: Category | null;
  list: boolean;
  type: string | null;
  value: string | null;
  other_value: string | null;
  options: Options[];
}

interface Options {
  id: number;
  name: string;
  slug: string;
  parent: number;
  child: boolean;
}

interface TableData {
  mainCategory?: string;
  subCategory?: string;
  properties: {
    name: string;
    value: string | undefined;
  }[];
}
