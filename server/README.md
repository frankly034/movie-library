# Entain Movie Library: Server

Welcome to the Movie Listing Application built with Nest.js! This application provides a feature-rich movie listing experience, including the ability to browse genres, discover movies, search for films by title and genre.

## Features

- **TMDB Data Integration**: This application seamlessly loads genre and movie data from The Movie Database (TMDB) using Nest.js lifecycle methods.

- **API Endpoints**:
  - **Fetch Paginated List of Genres**: Retrieve a paginated list of genres to help categorize movies.
  - **Fetch Paginated List of Movies**: Explore a paginated list of movies, making it easy to discover new films.
  - **Search Movies by Title and Genre**: Effortlessly find movies based on their title and genre.
- **Testing with Jest and Supertest**: Robust testing has been implemented using Jest and Supertest to ensure the application functions reliably.

- **Caching with a Database**: The application employs caching using a database to enhance performance and reduce external API calls.

- **Docker Compose Setup**: Docker Compose is utilized to simplify the setup and deployment of the application, making it easier to get started.

- **Rate Limiting**: To ensure fair usage and protect against abuse, rate limiting is in place to control the frequency of API requests.

## Getting Started

To get the Movie Listing Application up and running, follow these steps:

**Clone the Repository**: Begin by cloning this repository to your local machine.

```bash
git clone https://github.com/frankly034/movie-library.git
```

### Docker Compose

A Docker Compose setup is provided to facilitate development and deployment. To start the application using Docker Compose, run:

```bash
docker-compose up
```

`This command will launch the application along with any necessary services.`

**Access the API**: Open your web browser or a tool like **[Postman](https://www.postman.com/)** and interact with the API endpoints. The API will be available at http://localhost:5000.

### Development

#### Running Tests

To execute the tests using Jest, use the following command:

```bash
npm test
```

Thank you for using the Movie Listing Application built with Nest.js. Enjoy exploring the world of movies!
