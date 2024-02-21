import { BadRequestException } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsString, MinLength, IsEmail, MaxLength, Matches } from "class-validator";
import { NotIn } from "src/util/not-in";

export class CreateUserDto {
  @Transform(params => params.value.trim())
  @NotIn('password', { message: 'password cannot contain the same string as name.' })
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}
