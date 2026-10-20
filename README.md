# Backend Practice Projects

A collection of small backend projects built to strengthen my understanding of backend development through hands-on practice.

## Projects

| # | Project | Status |
|---|---|---|
| 1 | Notes API | Completed |
| 2 | URL Shortener | Planned |
| 3 | Authentication API | Planned |
| 4 | File Storage Service | Planned |
| 5 | Booking System | Planned |
| 6 | Real-Time Chat Backend | Planned |

## Goals

- Practice REST API development and CRUD operations
- Understand database design and validation
- Learn authentication and authorization
- Handle file uploads and real-time communication
- Improve error handling and API testing

Each project will have its own folder and README with setup instructions and API documentation.

**Note:** These projects are intended for local development and learning.

## Project 1 — Notes API

A RESTful API for creating, retrieving, updating, and deleting notes. Built to practice backend fundamentals using Node.js, Express, and MongoDB.

### Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — REST API and routing
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling
- **dotenv** — Environment variable configuration
- **nodemon** — Automatic server restarts during development

### Features

- Create a note
- Retrieve all notes
- Retrieve a single note by ID
- Update an existing note
- Delete a note
- Validate required fields
- Handle missing notes and invalid IDs
- Automatically maintain creation and update timestamps

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Retrieve all notes |
| GET | `/api/notes/:id` | Retrieve a note by ID |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Learning Outcomes

- Understood REST API fundamentals and HTTP methods.
- Implemented CRUD operations using Express.js.
- Organized backend code using routes, controllers, and models.
- Used Mongoose to interact with MongoDB.
- Practiced asynchronous operations using `async/await`.
- Implemented error handling and appropriate HTTP status codes.
- Used environment variables for configuration.
- Tested API endpoints and debugged routing and module import issues.

### Future Improvements

- Add search and filtering for notes.
- Implement authentication so users can manage their own notes.
- Deploy the API and use a hosted MongoDB database.

These are potential extensions and are not part of the current implementation.

**Status:** Completed — core CRUD operations implemented and tested locally.


## Project 2 — URL Shortener API

### Project Overview
A REST API that converts long URLs into short links and redirects users to their original destinations. Built to practise backend CRUD operations, URL validation, and persistent database storage.

### Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

### Features
- Generate unique six-character short codes.
- Create short URLs with HTTP/HTTPS validation.
- Retrieve all URLs and individual URL details.
- Redirect short URLs to their original destinations.
- Delete URLs by short code.
- Store URL records and creation timestamps in MongoDB.
- Handle invalid input and missing URLs.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/urls` | Create a short URL |
| GET | `/api/urls` | Retrieve all URLs |
| GET | `/api/urls/:code` | Retrieve URL details |
| GET | `/:code` | Redirect to the original URL |
| DELETE | `/api/urls/:code` | Delete a short URL |

### Learning Outcomes
- REST API design and Express routing.
- Controller and model separation.
- CRUD operations using Mongoose.
- URL validation and short-code generation.
- HTTP redirects and status codes.
- Asynchronous database operations and error handling.

### Future Improvements
- Click tracking and basic URL analytics.
- URL expiration and custom short aliases.
- Deployment to make the API publicly accessible.

### Status
**Completed** — Core endpoints, MongoDB persistence, validation, redirects, and edge cases implemented and tested.
