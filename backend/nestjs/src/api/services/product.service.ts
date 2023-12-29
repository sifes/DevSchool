import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { InvalidBodyException } from '../../utils/exceptions/InvalidCategory.exception';
import { PrismaService } from '../../database/prisma.service';
import { CreateProductDto } from '../dtos/CreateProduct.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(productData: CreateProductDto) {
    // Validate the category against the enum
    if (!Object.values(Category).includes(productData.category)) {
      throw new InvalidBodyException(productData.category);
    }

    // Create the product
    const createdProduct = await this.prismaService.product.create({
      data: productData,
    });

    return createdProduct;
  }
}
