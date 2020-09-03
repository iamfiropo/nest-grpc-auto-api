import { IsNotEmpty, MinLength } from 'class-validator';

export class CarDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly make: string;

  @IsNotEmpty()
  readonly model: string;

  readonly features: string;

  @IsNotEmpty()
  @MinLength(20)
  readonly vin: string;

  @IsNotEmpty()
  readonly price: number;

  readonly location: string;
}
