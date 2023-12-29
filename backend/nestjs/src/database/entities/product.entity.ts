import { Category, OrderProduct } from '@prisma/client';

export class ProductEntity {
  id: number;
  name: string;
  category: Category;
  amount: number;
  price: number;
  orderProducts: OrderProduct[];
}
