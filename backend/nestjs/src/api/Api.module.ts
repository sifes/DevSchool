import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer.module';
import { EmployeeModule } from './modules/employee.module';
import { OrderModule } from './modules/order.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [OrderModule, EmployeeModule, ProductModule, CustomerModule],
})
export class ApiModule {}
