import { ApiProperty } from '@nestjs/swagger';

export class CreateCarritoDto {
  @ApiProperty()
  readonly buyerId: string;
  @ApiProperty()
  readonly items: object;
  @ApiProperty()
  readonly total: number;
  @ApiProperty()
  readonly fecha: Date;
 
}
