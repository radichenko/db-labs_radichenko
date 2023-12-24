import { Module } from '@nestjs/common';
import { RoleModule } from './role.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    RoleModule,
    DatabaseModule,
  ],
})
export class AppModule {}
