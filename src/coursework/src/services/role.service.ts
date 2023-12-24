import { Inject, Injectable } from '@nestjs/common';
import { Role } from '../database/entities/role.entity';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role
  ) {}

  async getAll(): Promise<Role[]> {
    return this.roleRepository.findAll()
  }

  async create(data: CreateRoleDto) {
    return this.roleRepository.create({ ...data });
  }

  async update(role: Role, data: UpdateRoleDto) {
    await role.update(data);
    return role;
  }

  async delete(role: Role) {
    await role.destroy()
    return role;
  }
}
