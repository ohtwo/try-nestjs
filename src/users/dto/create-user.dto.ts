import { BadRequestException } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsString, MinLength, IsEmail, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
  @Transform(params => {
    console.log(params);
    const { value, obj } = params;
    if (obj.password.includes(obj.name.trim())) {
      throw new BadRequestException('password cannot contain the same string as name.')
    }
    return value.trim();
  })
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
