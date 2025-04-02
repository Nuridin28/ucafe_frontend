export interface IMenuItem {
  name: string;
  img: string;
  price: number;
  descr: string;
  type: string;
  quantity?: number;
}

export interface Cafe {
  _id: string;
  name: string;
  description: string;
  phone?: string;
  logoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FoodItem {
  _id: string;
  cafe: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  foodItem: string;
  quantity: number;
  price: number;
  _id: string;
}

export interface Order {
  _id: string;
  user: string;
  cafe: string;
  items: OrderItem[];
  totalPrice: number;
  status: "new" | "in_progress" | "done" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
