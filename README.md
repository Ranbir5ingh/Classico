# Classico

Classico is a MERN E-Commerce Application

## Description

Classico is a full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless shopping experience with features like product listings, user authentication, and order management.

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Cloudinary
- **Payment Integration**: PayPal

## Key Features
- User authentication (login, registration)
- Product listings with detailed views
- Shopping cart functionality
- Order management for users and admins
- Responsive design with Tailwind CSS

## Installation Instructions

### Client

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

### Environment Variables

Before starting the application, you need to set up the following environment variables:

1. Create a `.env` file in the `client` directory and add the following variables:
   ```
   VITE_API_URL=http://localhost:5000
   ```

2. Create a `.env` file in the `server` directory and add the following variables:
   ```
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   MONGO_URL=your_mongodb_connection_string
   PORT=5000
   CLIENT_BASE_URL=http://localhost:5173
   PAYPAL_MODE=sandbox
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```

Make sure to replace the placeholder values with your actual credentials.

## Usage

Once both the client and server are started, you can access the application in your web browser by navigating to the localhost address followed by the port number displayed in the client's terminal output.

### Accessing the Admin Panel

To access the admin panel, you need to set a super admin manually by configuring the role of a user to admin in the Mongoose user model.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.
