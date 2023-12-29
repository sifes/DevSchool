import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidBodyException extends HttpException {
  constructor(category: string) {
    super(`Invalid product category: ${category}`, HttpStatus.BAD_REQUEST);
  }
}
