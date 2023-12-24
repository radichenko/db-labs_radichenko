import { Sequelize } from 'sequelize-typescript';
import * as process from 'process';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';
import { RoleHasPermission } from './entities/role-has-permission.entity';

export const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(process.env.DATABASE_URL);
    sequelize.addModels([Role, Permission, RoleHasPermission]);
    await sequelize.sync();
    return sequelize;
  },
};