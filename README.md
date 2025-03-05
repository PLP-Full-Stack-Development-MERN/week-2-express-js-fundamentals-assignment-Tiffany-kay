```markdown
# Express Assignment

## Project Overview
This project is an Express.js application that demonstrates the creation of RESTful APIs with routes, middleware, controllers, and environment variables.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Setup and Installation
1. Install Node.js using NVM:
   ```sh
   nvm install node
   nvm use node
   ```

2. Clone the repository and navigate to the project folder:
   ```sh
   git clone https://github.com/PLP-Full-Stack-Development-MERN/week-2-express-js-fundamentals-assignment-Tiffany-kay.git
   cd express-assignment
   ```

3. Initialize a Node.js project:
   ```sh
   npm init -y
   ```

4. Install necessary dependencies:
   ```sh
   npm install express dotenv
   ```

## Project Structure
```
express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
```

## API Endpoints
### User Endpoints
- GET /users: Get all users
- POST /users: Create a new user
- GET /users/:id: Get a user by ID
- PUT /users/:id: Update a user by ID
- DELETE /users/:id: Delete a user by ID

### Product Endpoints
- GET /products: Get all products
- POST /products: Create a new product
- GET /products/:id: Get a product by ID
- PUT /products/:id: Update a product by ID
- DELETE /products/:id: Delete a product by ID

## Usage
1. Run the server:
   ```sh
   node index.js
   ```

2. Access the API endpoints using Postman or cURL.

## Middleware
- **Logger Middleware**: Logs request details (method, URL, timestamp).

## Environment Variables
- **PORT**: Define the port number in the `.env` file.
   ```env
   PORT=3000
   ```

## Error Handling
- Global error-handling middleware to catch and respond to errors gracefully.

## Testing
Test API endpoints using Postman or cURL to verify routes, middleware functionality, and error handling.

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License.
