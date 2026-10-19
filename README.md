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
- Store notes in MongoDB with creation and update timestamps

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a note by ID |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Local Setup

1. Install [Node.js](https://nodejs.org/).
2. Install and start MongoDB locally.
3. Navigate to the project directory:

   ```bash
   cd notes-api
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file:

   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/notes_db
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open `http://localhost:3000` to check that the server is running.

### What I Learned

- Structuring an Express application using routes, controllers, and models
- Building RESTful CRUD endpoints
- Using Mongoose to interact with MongoDB
- Handling asynchronous operations with `async/await`
- Using HTTP status codes and error handling
- Managing environment variables and development scripts

**Status:** Completed — local CRUD operations implemented and tested.