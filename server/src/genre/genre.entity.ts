import { Column, Entity, ManyToOne } from 'typeorm';
import { IsString } from 'class-validator';

import BaseAbstractEntity from '../common/entity/base.entity';
import Movie from '../movie/movie.entity';

@Entity()
export class Genre extends BaseAbstractEntity {
  @Column('int', { unique: true, nullable: false })
  @IsString({ message: 'tmbdId is required' })
  public tmbdId: number;

  @Column({ unique: true, nullable: false })
  @IsString({ message: 'Name is required' })
  public name: string;

  @ManyToOne(() => Movie, (movie) => movie.genres)
  public movie: Movie;
}

export default Genre;
