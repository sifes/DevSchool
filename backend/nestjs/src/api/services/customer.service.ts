import { Injectable } from '@nestjs/common';
import { OrderProduct } from '@prisma/client';
import { DataNotFoundException } from '../../utils/exceptions/DataNotFound.exception';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getOrdersById(customerId: number) {
    const customer = await this.prismaService.customer.findUnique({
      where: { id: customerId },
      include: { orders: { include: { orderProducts: true } } },
    });

    if (!customer) {
      throw new DataNotFoundException('Customer');
    }
    const ordersWithTotalCost = customer.orders.map((order) => {
      const orderCost = order.orderProducts.reduce(
        (acc, product: OrderProduct) => {
          acc += product.amount * product.price;
          return acc;
        },
        0,
      );
      return {
        id: order.id,
        orderAddress: order.orderAddress,
        deliveryCost: order.deliveryCost,
        orderDate: order.orderDate,
        employeeId: order.employeeId,
        customerId: order.customerId,
        totalCost: orderCost + order.deliveryCost,
      };
    });

    const totalCost = ordersWithTotalCost.reduce((acc, order) => {
      acc += order.totalCost;
      return acc;
    }, 0);

    return {
      orders: ordersWithTotalCost,
      totalCost,
    };
  }
}
