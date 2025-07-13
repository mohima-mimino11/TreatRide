import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { Hono } from 'hono';
import { config } from '@dotenvx/dotenvx';

// Load environment variables from root .env
config({ path: '../.env' }); // Adjusted to load from root folder

console.log('Environment variables:', {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
});

// Define GraphQL schema
const typeDefs = `
  type Query {
    hello: String!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => {
      const message = `Welcome to TreatRide GraphQL API! Running on ${process.env.SUPABASE_URL || 'no supabase url'}`;
      console.log('Resolver output:', message); // Debug log
      return message;
    },
  },
};

// Create executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers, // Use resolvers instead of rootValue
});

// Create GraphQL Yoga server
const yoga = createYoga({
  schema,
  context: async () => ({}),
});

// Initialize Hono app
const app = new Hono();

// Mount GraphQL endpoint at /graphql
app.use('/graphql', async (c) => {
  return yoga.handle(c.req.raw, c);
});

// Basic route to test server
app.get('/', (c) => c.text('TreatRide Backend is running!'));

// Start the server with Bun
Bun.serve({
  fetch: app.fetch,
  port: 3000,
});

console.log('Server running at http://localhost:3000');