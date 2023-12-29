import { Controller, Get, Param } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  @Get(':id/orders')
  getOrdersByCustomerId(@Param('id') id: number) {
    return this.CustomerService.getOrdersById(id);
  }
}
