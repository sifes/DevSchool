import { Order, Position } from '@prisma/client';

export class EmployeeEntity {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  position: Position;
  orders: Order[];
}
