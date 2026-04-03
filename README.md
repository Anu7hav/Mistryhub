# MistryHub

MistryHub is a full-stack web application designed to connect users with skilled professionals ("Mistrys") for various household and technical services. The platform facilitates seamless service booking, reviews, and payments, ensuring a hassle-free experience for both service providers and customers.

## Features

- **User Authentication**: Secure login and registration system.
- **Service Listings**: Users can browse and search for various service providers.
- **Booking System**: Allows users to schedule and book services.
- **Reviews & Ratings**: Users can provide feedback and rate service providers.
- **Payment Integration**: Secure online payment for hassle-free transactions.
- **Admin Dashboard**: Manage users, services, and transactions.

## Tech Stack

### Frontend
- React.js (with Vite for fast builds)
- Tailwind CSS for styling
- Redux for state management

### Backend
- Node.js with Express.js
- MongoDB (NoSQL database)
- JWT for authentication

### Additional Technologies
- Cloudinary for image uploads
- Stripe/PayPal for payment processing
- Nodemailer for email notifications

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Anu7hav/Mistryhub.git
   cd mistryhub
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_URL=your_cloudinary_url
   STRIPE_SECRET_KEY=your_stripe_key
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. For backend, navigate to the server folder and start it:
   ```sh
   cd server
   npm start
   ```
## Contact
For queries, reach out at: meanubhavkr@gmail.com
