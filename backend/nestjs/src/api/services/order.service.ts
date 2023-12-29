import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { DataNotFoundException } from '../../utils/exceptions/DataNotFound.exception';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async deleteOrder(orderId: number): Promise<Order> {
    // fing the order
    const order = await this.prismaService.order.findUnique({
      where: { id: orderId },
    });

    // chech does the order exist
    if (!order) {
      throw new DataNotFoundException('Order');
    }

    // delete it from orderProduct table
    await this.prismaService.orderProduct.deleteMany({
      where: { orderId: orderId },
    });

    // delete it from order table
    await this.prismaService.order.delete({
      where: { id: orderId },
    });
    return order;
  }
}
