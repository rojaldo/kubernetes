# Hero API

This project is a simple CRUD API for managing hero objects using TypeScript and Express.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hero-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables (e.g., database connection strings).

## Usage

To start the server, run:
```
npm start
```

The server will listen on the specified port defined in the `.env` file.

## API Endpoints

- **GET /heroes**: Retrieve all heroes.
- **GET /heroes/:id**: Retrieve a hero by ID.
- **POST /heroes**: Create a new hero.
- **PUT /heroes/:id**: Update an existing hero by ID.
- **DELETE /heroes/:id**: Delete a hero by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.