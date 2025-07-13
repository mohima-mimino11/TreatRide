# TreatRide: A Super-App for Ride-Hailing and Food Delivery

**TreatRide** is a modern super-app that combines **LinkRide** (ride-hailing) and **LinkEats** (food delivery) into a single, user-friendly platform. Built with a modular architecture, it offers seamless authentication, real-time updates, and user profile management, with plans for additional features like push notifications and payment processing. The app is designed for scalability, maintainability, and an intuitive user experience, making it accessible on both mobile and desktop devices.

## Features

###  Planned Features (Please Keep In mind the project is still at very primary stage)
- **User Authentication**:
  - Sign up and log in using email and password via Supabase Authentication.
  - Secure JWT-based session management.
- **LinkRide (Ride-Hailing)**:
  - Book rides with a step-by-step flow: select pickup location, destination, vehicle type, confirm booking, find a driver, and track the trip.
  - Real-time ride status updates (e.g., "Finding Driver" to "On Trip") using Supabase subscriptions.
  - View ride history for authenticated users.
- **LinkEats (Food Delivery)**:
  - Browse restaurants and their menus.
  - Add items to a cart and place food orders.
  - Real-time order status updates (e.g., "Pending" to "Preparing") via Supabase.
- **User Profile Management**:
  - View and update profile details (name, email, payment methods).
  - Secure access restricted to authenticated users via Row-Level Security (RLS).
- **Responsive UI**:
  - Built with Tailwind CSS for a consistent, mobile-friendly interface.
  - Uses the CSS box model for layout (padding, margins, shadows).
- **Real-Time Updates**:
  - Instant updates for ride and order statuses using Supabase’s WebSocket-based subscriptions.

- **Push Notifications**:
  - Notify users of ride or order status changes (e.g., “Driver Assigned”, “Order Ready”) using Firebase Cloud Messaging (FCM) and Supabase.
- **Payment Processing**:
  - Integrate a payment gateway (e.g., Stripe) for secure ride and food order payments.
- **Ratings and Reviews**:
  - Allow users to rate drivers and restaurants, enhancing trust and quality.
- **Driver Portal**:
  - A separate interface for drivers to accept and manage ride requests.
- **Restaurant Management**:
  - Enable restaurants to update menus and track orders.
- **Advanced Search and Filters**:
  - Add search functionality for restaurants and menu items, with filters for cuisine, price, or location.
- **Multi-Language Support**:
  - Support for multiple languages to improve accessibility.

- **Deployment**:
  - Frontend deployed on Vercel for fast, scalable hosting.
  - Backend deployed on Fly.io with a GraphQL API and Supabase integration.
- **Testing**:
  - Unit tests for backend utilities (cart, ride flow) and frontend components using Vitest.


## Tech Stack

### Backend
- **Node.js**: Runtime environment for the server.
- **Bun**: Fast JavaScript runtime for running and managing dependencies.
- **GraphQL Yoga**: GraphQL server for handling queries and mutations.
- **Supabase**: Backend-as-a-Service for authentication, database, and real-time subscriptions.
- **Hono**: Lightweight web framework for routing and middleware.
- **@dotenvx/dotenvx**: Environment variable management, loading from root `.env`.
- **TypeScript**: Type safety for robust server-side code.
- **Vitest**: Testing framework for backend unit tests.

### Frontend
- **React**: JavaScript library for building the user interface.
- **TypeScript**: Type safety for components, state, and API interactions.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **Apollo Client**: GraphQL client for querying the backend API.
- **Zustand**: Lightweight state management for authentication and app state.
- **React Router**: Client-side routing for navigation.
- **Vitest**: Testing framework for frontend unit tests.

### Deployment
- **Vercel**: Hosts the React frontend with automatic scaling and Git integration.
- **Fly.io**: Hosts the Node.js backend with containerized deployment.
- **Supabase**: Managed database and real-time subscriptions.

### Other Tools
- **Git**: Version control for code management.
- **GitHub**: Repository hosting for frontend and backend code.
- **Docker**: Containerization for Fly.io backend deployment.

## Project Structure Plan:

```
treatride-fullstack/
├── .env                        # Root environment variables (Supabase URL, Anon Key)
├── backend/                    # Backend code
│   ├── package.json            # Backend dependencies and scripts
│   ├── bun.lockb               # Bun lockfile
│   ├── tsconfig.json           # TypeScript configuration
│   ├── index.ts                # GraphQL server entry point
│   ├── schema.ts               # GraphQL schema and resolvers
│   ├── cart.ts                 # Closure-based cart utility
│   ├── rideFlow.ts             # Generator-based ride booking flow
│   ├── __tests__/              # Backend unit tests
│   ├── fly.toml                # Fly.io deployment configuration
│   └── Dockerfile              # Docker configuration for Fly.io
├── frontend/                   # Frontend code
│   ├── package.json            # Frontend dependencies and scripts
│   ├── bun.lockb               # Bun lockfile
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite configuration
│   ├── vitest.config.ts        # Vitest configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── index.css               # Global CSS with Tailwind
│   ├── public/                 # Static assets
│   └── src/                    # React source code
│       ├── main.tsx            # React entry point
│       ├── types.ts            # TypeScript type definitions
│       ├── context/            # Zustand auth context
│       ├── components/         # Reusable React components
│       ├── pages/              # Page components (Dashboard, Login, Profile, etc.)
│       ├── utils/              # Utilities (API setup, cart)
│       ├── graphql/            # GraphQL queries and mutations
│       ├── __mocks__/          # Mock files for testing
│       ├── __tests__/          # Frontend unit tests
│       └── setupTests.ts       # Vitest setup
└── README.md                   # Project documentation
```

## Installation

### Prerequisites
- **Bun**: Install Bun (`curl -fsSL https://bun.sh/install | bash`).
- **Git**: For cloning the repository.
- **Vercel and Fly.io Accounts**: For deployment.
- **Supabase Project**: Create a project on [Supabase](https://supabase.com) to get `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

### Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/treatride-fullstack.git
   cd treatride-fullstack
   ```

2. **Set Up Environment Variables**:
   - Create `treatride-fullstack/.env`:
     ```env
     SUPABASE_URL=https://your-supabase-project.supabase.co
     SUPABASE_ANON_KEY=your-supabase-anon-key
     ```
   - Replace with your Supabase project’s URL and Anon Key from the Supabase dashboard.

3. **Install Backend Dependencies**:
   ```bash
   cd backend
   bun install
   ```

4. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   bun install
   ```

### Running Locally
1. **Start the Backend**:
   ```bash
   cd backend
   bunx @dotenvx/dotenvx run -- bun run index.ts
   ```
   - Access the GraphQL API at `http://localhost:3000/graphql`.

2. **Start the Frontend**:
   ```bash
   cd frontend
   bun run dev
   ```
   - Access the app at `http://localhost:5173`.

### Running Tests
- **Backend Tests**:
  ```bash
  cd backend
  bun test
  ```
- **Frontend Tests**:
  ```bash
  cd frontend
  bun test
  ```

### Deployment
1. **Backend (Fly.io)**:
   - Initialize Fly.io app:
     ```bash
     cd backend
     flyctl launch
     ```
   - Deploy:
     ```bash
     flyctl deploy
     ```
   - Set environment variables in Fly.io dashboard (`SUPABASE_URL`, `SUPABASE_KEY`).

2. **Frontend (Vercel)**:
   - Push the frontend code to a GitHub repository.
   - Import the repository in Vercel and configure:
     - Framework: Vite
     - Root Directory: `frontend`
     - Environment Variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
   - Deploy via Vercel dashboard or Git push.

## Usage
1. **Sign Up/Login**: Create an account or log in to access the dashboard.
2. **LinkRide**: Book a ride by selecting pickup, destination, and vehicle type.
3. **LinkEats**: Browse restaurants, add items to the cart, and place orders.
4. **Profile**: Update your name, email, or payment methods.
5. **Real-Time Updates**: Monitor ride or order status changes in real-time.

## Future Enhancements
- Implement push notifications for real-time user updates.
- Add payment processing with a secure gateway.
- Introduce ratings and reviews for drivers and restaurants.
- Develop driver and restaurant portals for enhanced functionality.
- Support advanced search, filters, and multi-language options.

<!-- ## Contributing
Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback, reach out via [GitHub Issues](https://github.com/mohima-mimino11/treatride-fullstack/issues). -->