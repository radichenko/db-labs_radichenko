import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { RoleHasPermission } from './role-has-permission.entity';

@Table({
  tableName: 'roles',
  timestamps: false,
})
export class Role extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  description: string;

  @HasMany(() => RoleHasPermission)
  permissions: RoleHasPermission[];
}