import { Product } from './Product';

export interface Basket {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}
