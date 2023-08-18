const mockedConfigService = {
  get(key: string) {
    switch (key) {
      case 'TMDB_BASEURL':
        return 'https://api.themoviedb.org/3';
      case 'TMDB_API_KEY':
        return '5432';
    }
  },
};

export default mockedConfigService;
