# Node API for Quote

This is a simple Node.js API project that implements CRUD (Create, Read, Update, Delete) operations for managing quotes using Express and file storage.

## Features

- **Create:** Add new quotes to the collection.
- **Read:** Retrieve the list of all quotes or a specific quote by ID.
- **Update:** Modify an existing quote.
- **Delete:** Remove a quote by its ID.

## Tech Stack

- **Node.js:** JavaScript runtime.
- **Express:** Web application framework for Node.js.
- **Nodemon:** Utility that monitors for changes and automatically restarts the server.
- **File Storage:** Quotes are stored in a JSON file (`dummy.json`).
- **npm:** Node Package Manager for managing project dependencies.

## Getting Started

### Prerequisites

- Node.js: [Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/node-api-for-quote.git
   ```

2. Navigate to the project directory:

```bash
cd node-api-for-quote
```

3. Install Dependencies:

   ```bash
   npm install
   ```

4. Start Server:

```bash
npm start
```

## Route Instructions

### 1. Create a New Quote

- **Endpoint:** `POST /quotes`
- **Description:** Add a new quote to the collection.
- **Request Body:** JSON object with `quote` and `author` properties.

  ```json
  {
    "quote": "Your quote text here",
    "author": "Author name"
  }
  ```

  ### 2. Read All Quotes

- **Endpoint:** `GET /quotes`
- **Description:** Retrieve the list of all quotes.
- **Response:** JSON array containing all quotes.
- **Example:**

  ```bash
  curl http://localhost:8585/quotes
  ```

  ### 3. Read a Specific Quote

- **Endpoint:** `GET /quotes/:id`
- **Description:** Retrieve a specific quote by its `id`.
- **Response:** JSON object representing the quote with the specified `id`.
- **Example:**

  ```bash
  curl http://localhost:8585/quotes/1
  ```

  ### 4. Update a Quote

- **Endpoint:** `PUT /quotes/:id`
- **Description:** Modify an existing quote by its `id`.
- **Request Body:** JSON object with updated `quote` and/or `author` properties.
  ```json
  {
    "quote": "Updated quote text",
    "author": "Updated author name"
  }
  ```

````
### 5. Delete a Quote

- **Endpoint:** `DELETE /quotes/:id`
- **Description:** Remove a quote by its `id`.
- **Response:** JSON object with a success message.
- **Example:**
  ```bash
  curl -X DELETE http://localhost:8585/quotes/1
````
