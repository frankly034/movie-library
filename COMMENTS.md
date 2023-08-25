# COMMENTS

Throughout the development process, my primary focus was on functionality and ensuring a robust, well-tested application. I prioritized the following aspects:

1. **Functionality**: I concentrated on ensuring that the core functionality of the application works as expected. This involved thorough testing and validation of features to guarantee a smooth user experience.

2. **Documentation of Frontend Components**: To enhance code maintainability and collaboration, I put a strong emphasis on documenting the frontend components. This documentation will be valuable for future developers working on the project.

## IMPROVEMENTS

- **Elastic Search**: One key improvement I would make with more time is implementing Elastic Search on the backend. This would significantly enhance the search functionality and improve the overall user experience.

- **Redis Caching**: I would introduce Redis caching to optimize data retrieval and reduce the load on the backend server, resulting in faster response times.

- **Search Input Debounce**: Implementing debounce on the search input would prevent unnecessary API calls and enhance the application's responsiveness.

- **Improved Image Loading**: I would work on improving the user experience related to image loading by using image placeholders to reduce the perception of loading times.

- **Error Display Feature**: Adding an error display feature, such as message toasts, would provide users with clearer feedback in case of errors or issues.

- **Dockerization**: Dockerizing the frontend application would streamline both development and deployment processes, making it more efficient and consistent.

- **Data Sectioning and Views**: I would add APIs to categorize data, such as recently released, highly rated, and popular content, and create corresponding views on the client side for a better user experience.

## DECISIONS

Regarding the decisions made during development:

- I chose NestJS as the backend framework due to its robustness, which aligns well with the project's requirements.

- For ease of development and deployment, I bundled the backend services (application and database) with Docker, simplifying the setup process.

- I utilized TypeORM and Postgres for data manipulation and storage, ensuring data integrity and scalability.

- To facilitate data exploration, I included a Docker service for a database client, pgAdmin, allowing for a convenient preview of data stored in the database.

- A rate limiter was added on the backend service to prevent abuse or overloading of the API.

- I designed the database to establish a many-to-many relationship between Genre and Movie entities to accurately represent the data structure.

## ASSUMPTIONS

Lastly, I made certain assumptions during development that:

- data from TMDB is accurate and consistently available.

- there are no missing fields from the Movie and Genre resources from TMDB.

- Genre IDs from TMDB are unique.

- all required data is loaded at the startup of the application.

- the API service would not fail, although I acknowledge the need for robust error handling on the frontend to address potential issues.

These decisions and assumptions guided the development process, and with more time, I would address the identified improvements to further enhance the application's functionality and user experience.
