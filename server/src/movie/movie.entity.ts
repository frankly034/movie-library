import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { IsString } from 'class-validator';

import BaseAbstractEntity from '../common/entity/base.entity';
import Genre from '../genre/genre.entity';

@Entity()
export class Movie extends BaseAbstractEntity {
  @Column({ nullable: false })
  @IsString({ message: 'Title is required' })
  public title: string;

  @Column()
  public backdropPath: string;

  @Column()
  public overview: string;

  @Column('decimal')
  public voteAverage: number;

  @Column('int')
  public voteCount: number;

  @Column('decimal')
  public popularity: number;

  @Column()
  public posterPath: string;

  @Column('date', { nullable: true })
  public releaseDate: string;

  @ManyToMany(() => Genre)
  @JoinTable()
  public genres: Genre[];
}

export default Movie;
