import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UpdateEmployeeDto } from '../dtos/UpdateEmployee.dto';
import { EmployeeService } from '../services/employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Patch(':employeeId')
  async patchEmployee(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Body() updateData: UpdateEmployeeDto,
  ) {
    const updatedEmployee = await this.employeeService.patchEmployee(
      employeeId,
      updateData,
    );
    return { ...updatedEmployee };
  }
}
