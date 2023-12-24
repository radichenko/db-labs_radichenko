import { IsEnum, IsOptional } from 'class-validator';
import { RoleName } from './create-role.dto';

export class UpdateRoleDto {
  @IsEnum(RoleName, { message: 'Name must be USER or TECHNICAL_EXPERT' })
  @IsOptional()
  name?: string

  @IsOptional()
  description?: string;
}