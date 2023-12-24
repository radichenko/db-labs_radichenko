import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from './role.entity';
import { Permission } from './permission.entity';

@Table({
  tableName: 'role_has_permission',
  timestamps: false,
})
export class RoleHasPermission extends Model {
  @ForeignKey(() => Role)
  @Column({ field: 'role_id'})
  roleId: number;

  @ForeignKey(() => Permission)
  @Column({ field: 'permission_id'})
  permissionId: number;

  @BelongsTo(() => Role, 'roleId')
  role: Role;

  @BelongsTo(() => Permission, 'permissionId')
  permission: Permission;
}