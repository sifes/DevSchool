import { Category } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'Invalid category' })
  category: Category;

  @IsNotEmpty()
  @IsNumber({}, { message: 'Amount must be a number' })
  amount: number;

  @IsNotEmpty()
  @IsNumber({}, { message: 'Price must be a number' })
  price: number;
}
