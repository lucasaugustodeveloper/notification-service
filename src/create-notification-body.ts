import { IsNotEmpty, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  content: string;

  @IsNotEmpty()
  category: string;
}
