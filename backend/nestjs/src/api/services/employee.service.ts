import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { DataNotFoundException } from '../../utils/exceptions/DataNotFound.exception';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prismaService: PrismaService) {}

  async patchEmployee(
    employeeId: number,
    updateData: Partial<Employee>,
  ): Promise<Employee> {
    // Check if the employee exists
    const existingEmployee = await this.prismaService.employee.findUnique({
      where: { id: employeeId },
    });

    if (!existingEmployee) {
      throw new DataNotFoundException('Employee');
    }

    // Update the employee with the provided data
    const updatedEmployee = await this.prismaService.employee.update({
      where: { id: employeeId },
      data: updateData,
    });

    return updatedEmployee;
  }
}
