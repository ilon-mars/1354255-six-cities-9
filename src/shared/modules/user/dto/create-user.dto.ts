import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Length
} from 'class-validator';

import { UserStatus } from '../../../types/index.js';
import { NameRules, PasswordRules } from '../index.js';
import { UserValidationMessage } from './user-validation-message.js';

export class CreateUserDto {
  @IsString({ message: UserValidationMessage.name.invalidFormat })
  @Length(NameRules.MIN_LENGTH, NameRules.MAX_LENGTH, { message: UserValidationMessage.name.invalid })
    name: string;

  @IsEmail({}, { message: UserValidationMessage.email.invalidFormat })
    email: string;

  @IsOptional()
  @IsString({ message: UserValidationMessage.avatarUrl.invalidFormat })
    avatarUrl?: string;

  @IsString({ message: UserValidationMessage.password.invalidFormat })
  @Length(PasswordRules.MIN_LENGTH, PasswordRules.MAX_LENGTH, { message: UserValidationMessage.password.invalid })
    password: string;

  @IsEnum(UserStatus, {
    message: UserValidationMessage.type.invalid,
  })
    type: UserStatus;
}
