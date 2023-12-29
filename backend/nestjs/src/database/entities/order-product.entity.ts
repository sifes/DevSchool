import { Order, Product } from '@prisma/client';

export class OrderProductEntity {
  amount: number;
  price: number;
  order: Order;
  product: Product;
}
