import { Module } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { RoleController } from '../controllers/role.controller';
import { roleProvider } from '../database/providers/role.provider';

@Module({
  providers: [RoleService, roleProvider],
  controllers: [RoleController],
})
export class RoleModule {}
