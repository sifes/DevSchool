import { Customer, Employee, Order } from '@prisma/client';

export class OrderEntity {
  id: number;
  orderAddress: string;
  deliveryCost: number;
  orderDate: Date;
  employee: Employee;
  customer: Customer;
  orderProducts: Order[];
}
