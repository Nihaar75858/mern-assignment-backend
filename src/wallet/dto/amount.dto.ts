// Added validation to AmountDto to avoid taking Negative or String values for Amount
import { IsString, IsNumber, IsPositive } from "class-validator";
export class AmountDto {
  @IsString()
  userId: string;

  @IsPositive()
  @IsNumber()
  amount: number;
}
