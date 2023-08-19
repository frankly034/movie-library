import Genre from '../../genre/genre.entity';

export const genreMockData = {
  name: 'action',
  tmbdId: 1,
};

export const expectedGenreMock = {
  ...genreMockData,
  id: '57912f05-c010-4242-b522-24c8a3ed1858',
};

export const mockTMBDGenres = [
  { tmbdId: 1, name: 'Action' },
  { tmbdId: 2, name: 'Drama' },
];

export const genreLinkedListMock = {
  [genreMockData.tmbdId]: expectedGenreMock as Genre,
};
