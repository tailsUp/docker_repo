# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

# Visit counter

When running the server, visit http://localhost:3000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# Miten BACKEND ajetaan käyntiin?

1. Tarvitset kaksi terminaalia:
    --> docker compose -f docker-compose.dev.yml up
    --> npm run dev
    TAI

# Miten BACKEND ajetaan development containerissa

1. Tarvitse kaksi terminaalia:
    --> docker compose -f docker-compose.dev.yml up
    --> 