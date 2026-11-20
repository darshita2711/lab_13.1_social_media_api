# Social Media API – Database Connection

## Overview
A simple Node.js and Express application connected to MongoDB Atlas using the MongoDB Node.js driver.

## Technologies
- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Driver
- dotenv

## Installation

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI="your_mongodb_connection_string"
```

Start the server:

```bash
node server.js
```

## API Endpoint

**GET /**

Success response:

```json
{
  "message": "Successfully connected to the database!"
}
```

## Security
The `.env` file is excluded from GitHub using `.gitignore` to protect database credentials.