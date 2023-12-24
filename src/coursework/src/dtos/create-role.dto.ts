import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export enum RoleName {
  USER = 'USER',
  TECHNICAL_EXPERT = 'TECHNICAL_EXPERT',
}

export class CreateRoleDto {
  @IsEnum(RoleName, { message: 'Name must be USER or TECHNICAL_EXPERT' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string

  @IsOptional()
  description?: string;
}