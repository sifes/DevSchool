import { Order } from '@prisma/client';

export class CustomerEntity {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate: Date;
  email: string;
  orders: Order[];
}
