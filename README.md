# Entain Movie Library

This movie library application has been developed using [Nest](https://github.com/nestjs/nest) for the backend and [Next](https://nextjs.org/), a React framework, for the frontend. The application's movie data is sourced and populated from [TMDB](https://developer.themoviedb.org/docs), ensuring a comprehensive and up-to-date collection of films.

## Backend Tech Tools

- NestJS (express framework)
- Postgres
- Typeorm
- Docker
- Axios
- Jest and supertest for testing
- Typescript

## Frontend Tech Tools

- React
- NextJS (As recommended by the react team)
- Storybook for component documentation
- Styled component for styling
- Redux Toolkit
- Redux Toolkit Query
- Jest and React Testing Library for tests
- Typescript

## Running the app

Begin by cloning this repository to your local machine.

```bash
git clone https://github.com/frankly034/movie-library.git
```

`Copy .env.example to .env in the server and client folders and update the variables.`

Docker is essential for executing the backend service.

To initiate the backend service, navigate to the project's root directory and execute the following command:

```bash
# development
$ cd server && docker-compose up
```

To launch the client application, execute the following command from the project's root directory:

```bash
# development
$ cd client && npm run start dev
```

`To launch Storybook, run the following command from the root directory of the application:`

```bash
# storybook
$ cd client && npm run storybook
```

## Acknowledgements

- [Entain](https://www.entaingroup.com/)
- [NestJS](https://nestjs.com/)
- [React](https://twitter.com/nestframework)
- [TMDB](https://www.themoviedb.org/documentation/api.)
