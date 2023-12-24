import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { RoleByIdPipe } from '../pipes/role-by-id.pipe';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';
import { Role } from '../database/entities/role.entity';

@Controller('roles')
export class RoleController {
  constructor(
    private roleService: RoleService,
  ) {}

  @Get()
  async getAll() {
    return this.roleService.getAll();
  }

  @Get('/:roleId')
  async get(
    @Param('roleId', ParseIntPipe, RoleByIdPipe) role: Role,
  ) {
    return role;
  }

  @Post()
  async create(
    @Body() body: CreateRoleDto,
  ) {
    return this.roleService.create(body);
  }

  @Patch('/:roleId')
  async update(
    @Body() body: UpdateRoleDto,
    @Param('roleId', ParseIntPipe, RoleByIdPipe) role: Role,
  ) {
    return this.roleService.update(role, body);
  }

  @Delete('/:roleId')
  async delete(
    @Param('roleId', ParseIntPipe, RoleByIdPipe) role: Role,
  ) {
    return this.roleService.delete(role);
  }
}
