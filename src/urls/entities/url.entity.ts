import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UrlCreationAttrs {
  key: string;
  value: string;
}

@Table({ tableName: 'urls' })
export class Url extends Model<Url, UrlCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  shortUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  originalUrl: string;
}
