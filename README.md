GateKeeper API

GateKeeper API is a simple Express-based backend application that demonstrates how to structure an API using middleware, routes, and controllers.
The purpose of this project is to show how requests flow through an Express server, how authentication can be handled using middleware, and how APIs can be designed in a clean and predictable way.

What This API Does
-Provides public and protected routes

-Uses middleware to handle authentication

-Logs incoming requests

-Returns JSON responses

-Handles unknown routes and errors centrally

-Authentication

-Protected routes require an Authorization header:

-Authorization: Bearer secret


If the header is missing or invalid, the request is rejected.

Available Routes

GET /
-Returns a basic response to confirm the server is running.

GET /users
-Returns a list of users stored in memory.

GET /profile
-Protected route that returns the authenticated user’s data.

How to Run

Install dependencies
```bash
npm install
```

Start the server
```bash
node app.js
```
Server runs on
```bash
http://localhost:3000
```

Notes

-No database is used

-Data is stored in memory

-Restarting the server resets all data
