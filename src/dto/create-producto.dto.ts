import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly nombre: string;
  @ApiProperty()
  readonly descripcion: string;
  @ApiProperty()
  readonly precio: number;
  @ApiProperty()
  readonly foto: string;
  @ApiProperty()
  readonly codigo: string;
  @ApiProperty()
  readonly stock: number;
}
