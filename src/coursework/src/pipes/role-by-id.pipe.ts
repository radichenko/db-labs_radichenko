import { Inject, Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { Role } from '../database/entities/role.entity';

@Injectable()
export class RoleByIdPipe implements PipeTransform {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof Role
  ) {}
  async transform(id: number): Promise<Role> {
    const role = await this.roleRepository.findByPk(id);

    if (!role) throw new NotFoundException();

    return role;
  }
}