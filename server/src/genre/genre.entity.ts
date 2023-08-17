import { Column, Entity } from 'typeorm';

import BaseAbstractEntity from '../common/entity/base.entity';

@Entity()
export class Genre extends BaseAbstractEntity {
  @Column({ unique: true })
  public name: string;
}

export default Genre;
