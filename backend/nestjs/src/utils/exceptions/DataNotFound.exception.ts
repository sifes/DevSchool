import { HttpException, HttpStatus } from '@nestjs/common';

export class DataNotFoundException extends HttpException {
  constructor(object: string) {
    super(`${object} with such id not found`, HttpStatus.BAD_REQUEST);
  }
}
