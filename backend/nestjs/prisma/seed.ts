import { PrismaClient } from '@prisma/client';
import * as process from 'process';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding');
  await prisma.product.createMany({
    data: [
      { name: 'Apple', category: 'ELECTRONICS', amount: 10, price: 200 },
      { name: 'HP', category: 'ELECTRONICS', amount: 222, price: 2000 },
      {
        name: 'Dead By Daylight',
        category: 'VIDEO_GAMES_AND_CONSOLES',
        amount: 1,
        price: 200,
      },
      {
        name: 'Stepler nahuy',
        category: 'OFFICE_SUPPLIES',
        amount: 1,
        price: 200,
      },
    ],
  });
  await prisma.customer.createMany({
    skipDuplicates: true,
    data: [
      {
        firstName: 'Pupa',
        lastName: 'Lupa',
        middleName: 'and',
        birthDate: new Date('2011-11-11T00:00:00.000Z'),
        email: 'user12@example.com',
      },
      {
        firstName: 'I',
        lastName: 'love',
        middleName: 'apples',
        birthDate: new Date('2011-11-11T00:00:00.000Z'),
        email: 'user@example.com',
      },
    ],
  });
  await prisma.employee.createMany({
    skipDuplicates: true,
    data: [
      { firstName: 'John', lastName: 'Doe', position: 'CASHIER' },
      { firstName: 'Doe', lastName: 'Jonh', position: 'DELI_CLERK' },
    ],
  });
  await prisma.order.createMany({
    data: [
      {
        id: 1,
        customerId: 1,
        employeeId: 1,
        deliveryCost: 200,
        orderAddress: 'Kiev',
        orderDate: new Date('2011-11-11T00:00:00.000Z'),
      },
      {
        id: 2,
        customerId: 2,
        employeeId: 2,
        deliveryCost: 200,
        orderAddress: 'Kiev',
        orderDate: new Date('2011-11-11T00:00:00.000Z'),
      },
      {
        id: 3,
        customerId: 2,
        employeeId: 2,
        deliveryCost: 200,
        orderAddress: 'Kiev',
        orderDate: new Date('2011-11-11T00:00:00.000Z'),
      },
      {
        id: 4,
        customerId: 1,
        employeeId: 1,
        deliveryCost: 200,
        orderAddress: 'Kiev',
        orderDate: new Date('2011-11-11T00:00:00.000Z'),
      },
    ],
  });
  await prisma.orderProduct.createMany({
    data: [
      {
        orderId: 1,
        productId: 1,
        amount: 2,
        price: 200,
      },
      {
        orderId: 2,
        productId: 4,
        amount: 50,
        price: 50,
      },
      {
        orderId: 3,
        productId: 2,
        amount: 5,
        price: 100,
      },
      { orderId: 4, productId: 3, amount: 1, price: 666 },
    ],
  });
  console.log('Finished seeding');
}
main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
