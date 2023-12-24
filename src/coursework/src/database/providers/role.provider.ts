import { Role } from '../entities/role.entity';

export const roleProvider = {
  provide: 'ROLE_REPOSITORY',
  useValue: Role,
}