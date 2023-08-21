import { Column, Entity } from 'typeorm';
import { IsString } from 'class-validator';

import BaseAbstractEntity from '../common/entity/base.entity';

@Entity()
export class Genre extends BaseAbstractEntity {
  @Column('int', { unique: true, nullable: false })
  @IsString({ message: 'tmbdId is required' })
  public tmbdId: number;

  @Column({ unique: true, nullable: false })
  @IsString({ message: 'Name is required' })
  public name: string;
}

export default Genre;
