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

export class users extends Model<users> {
    @PrimaryKey
    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    public rollno: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    public Name: string;

    @Column({
       type: DataType.STRING 
    })
    public mobilenumber: number;
    
    @CreatedAt public createdAt: Date;

    @UpdatedAt public updatedAt: Date;

    @DeletedAt public deletedAt: Date;
}
