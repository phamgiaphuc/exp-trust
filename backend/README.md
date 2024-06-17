# ExpTrust Backend

This folder contains the backend application for ExpTrust, built with TypeScript, Express.js, and Node.js.

## Prerequisites

Before running the backend application, ensure you have Node.js and npm installed on your machine.

## Installation

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the backend server with auto-reloading using nodemon:

```bash
npm run dev
```

This command runs the backend application in development mode with nodemon for automatic restarts upon file changes.

## Build and Start

To build and start the production-ready backend application:

```bash
npm run build
npm start
```

## Additional Information

- This project uses TypeScript for enhanced JavaScript development.
- Express.js is used as the web framework for building robust APIs.
- Nodemon ensures automatic restarts of the server during development for a smoother workflow.

## Integration with Solana Blockchain

ExpTrust leverages the Solana blockchain for its underlying technology. Solana offers high-performance and low-cost transactions, making it ideal for secure credential verification and management. Ensure your backend server interacts seamlessly with Solana using appropriate Solana SDKs and APIs.

## Integration with Frontend

Ensure the backend server is running on [http://localhost:8000](http://localhost:8000) to allow the frontend to communicate with it for data exchange.

