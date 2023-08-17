const paginateRepositoryMock = (expectedItems) => ({
  limit: jest.fn().mockReturnThis(),
  offset: jest.fn().mockReturnThis(),
  cache: jest.fn().mockReturnThis(),
  getMany: jest.fn().mockReturnValue(expectedItems),
  clone: jest.fn().mockReturnThis(),
  skip: jest.fn().mockReturnThis(),
  take: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
  getQuery: jest.fn().mockReturnValue(''),
  getParameters: jest.fn().mockReturnValue(''),
  connection: jest.mocked({
    createQueryBuilder: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    cache: jest.fn().mockReturnThis(),
    setParameters: jest.fn().mockReturnThis(),
    getRawOne: jest.fn().mockReturnValue({}),
  }),
});

export default paginateRepositoryMock;
