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



# install
$ docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
Digest: sha256:ca1e9182f3f6e1e40a766b1bb72f13fa89b8061477dd7843a79bf53e4b2307ae
Status: Downloaded newer image for redis/redis-stack:latest
88b3a1690474e8781cdf95fdb0d8132ed7b1b352bcc1f16ca45ce28bca20e26f