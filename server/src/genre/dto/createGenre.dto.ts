import { IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString({ message: 'Name is required' })
  name: string;
}

export default CreateGenreDto;
