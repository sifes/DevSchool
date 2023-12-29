import { Controller, Delete, Param } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Delete(':orderId')
  async deleteOrder(@Param('orderId') orderId: number) {
    return await this.orderService.deleteOrder(orderId);
  }
}
