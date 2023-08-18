import { Column, Entity, OneToMany } from 'typeorm';

import BaseAbstractEntity from '../common/entity/base.entity';
import Genre from '../genre/genre.entity';
import { IsString } from 'class-validator';

@Entity()
export class Movie extends BaseAbstractEntity {
  @Column('int', { unique: true, nullable: false })
  @IsString({ message: 'tmbdId is required' })
  public tmbdId: number;

  @Column({ nullable: false })
  @IsString({ message: 'Title is required' })
  public title: string;

  @Column()
  public overview: string;

  @Column('decimal')
  public voteAverage: number;

  @Column('int')
  public voteCount: number;

  @Column('decimal')
  public popularity: number;

  @Column()
  public poasterPath: string;

  @Column('date')
  public releaseDate: string;

  @OneToMany(() => Genre, (genre) => genre.movie)
  public genres: Genre[];
}

export default Movie;
