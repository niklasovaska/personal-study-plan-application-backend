# Personal Study Plan App

Node.js back-end application serving endpoints to Personal Study Plan full stack application for accounting completed and scheduling upcoming university courses. The back-end application is communicating with MongoDB and deployed to Fly.io.


Live link to the application: https://nova-study-hops.fly.dev/

Front-end code repo: https://github.com/niklasovaska/personal-study-plan-application-front

## Project structure
Deployed application is structured as follows

```
├── controllers
│   └── notes.js  
├── dist
│   ├── assets  
│   └── index.html
├── models
│   └── note.js
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js
├── index.js  
├── app.js
├── fly.toml 
├── Dockerfile
```

## Libraries and tools used
- CORS
- Dotenv
- Express
- Mongoose
- Morgan
- Nodemon

## Controllers
Courses.js define the route objects with relative parts of the routes. App.js is using the courseRouter with the root path */api/courses*.

Errors are passed to errorHandler middleware with the next function.

```javascript
courseRouter.get('/', (request, response) => {
    // ...
})
```
```javascript
courseRouter.post('/', (request, response, next) => {
    // ...
  })
```
```javascript
courseRouter.put('/:id', (request, response, next) => {
    // ...
})
```
```javascript
courseRouter.delete('/:id', (request, response, next) => {
   // ...
  })
```
## Models
Models folder contains course.js file defining the courses Mongoose schema.
```javascript
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required']
    },
    code: {
        type: String,
        required: [true, 'Course code is required']
    },
    credits: {
        type: Number,
        required: [true, 'Course credits are required']
    },
    grade: {
        type: String
    },
    status: {
        type: String,
        required: [true, 'Course status is required']
    }
})
```

## Utils
Config.js is handling the enivironment variables.

Logging is extracted to a separate module logger.js.

Middleware.js includes middleware for unknown endpoints and error handling.

## Next steps
- Back-end integration testing
- Front-end unit testing - Vitest
- E2E testing - Playwright
