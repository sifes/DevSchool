import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../dtos/CreateProduct.dto';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(
    @Body()
    CreateProduct: CreateProductDto,
  ) {
    return await this.productService.createProduct(CreateProduct);
  }
}
