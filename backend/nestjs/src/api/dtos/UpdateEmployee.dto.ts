import { PartialType } from '@nestjs/mapped-types';
import { Position } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EmployeeEntity as Employee } from '../../database/entities/employee.entity';

export class UpdateEmployeeDto extends PartialType(Employee) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastName?: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsEnum(Position, { message: 'Invalid position' })
  position?: Position;
}
