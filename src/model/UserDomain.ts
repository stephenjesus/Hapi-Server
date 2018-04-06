import { Model, PrimaryKey, BelongsTo, DataType, Table, Column, HasMany, HasOne } from 'sequelize-typescript';
import { DeletedAt, CreatedAt, UpdatedAt, BelongsToMany, ForeignKey } from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
    defaultScope: {
        attributes: {
            exclude: ['createdAt', 'id', 'updatedAt'],
        },
    },
})

export class UserDomain extends Model<UserDomain> {

}
