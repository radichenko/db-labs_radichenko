import {AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import {RoleHasPermission} from "./role-has-permission.entity";

@Table({
  tableName: 'permissions',
  timestamps: false,
})
export class Permission extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => RoleHasPermission)
  roles: RoleHasPermission[];
}