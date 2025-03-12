require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')  
const app = express()
const Course = require('./models/course')
const { info } = require('./utils/logger')

morgan.token('body', (request) => JSON.stringify(request.body))

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())

const requestLogger = (request, response, next) => {
    info('Method:', request.method)
    info('Path:  ', request.path)
    info('Body:  ', request.body)
    info('---')
    next()
  }

app.use(requestLogger)

app.get('/api/courses', (request, response) => {
    Course.find({}).then(courses => {
        response.json(courses)
    })

})

app.get('/api/courses/:id', (request, response, next) => {
    Course.findById(request.params.id)
        .then(course => {
            if(course) {
                response.json(course)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.post('/api/courses', (request, response, next) => {
    const body = request.body

    const course = new Course ({
        name: body.name,
        code: body.code,
        credits: body.credits,
        status: body.status
    })
  
    course.save()
        .then(savedCourse => {
            response.json(savedCourse)
        })
        .catch(error => next(error))
  })

app.put('/api/courses/:id', (request, response, next) => {
    const body = request.body

    const course = {
        name: body.name,
        code: body.code,
        credits: body.credits,
        grade: body.grade,
        status: body.status
    }

    Course.findByIdAndUpdate(request.params.id, course, { new: true, runValidators: true})
        .then(updatedCourse => {
            response.json(updatedCourse)
        })
        .catch(error => next(error))
})

app.delete('/api/courses/:id', (request, response, next) => {
    Course.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
  })

const unknownEndpoint = (request, response) => {
response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    error(error.message)
  
    if(error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
}
  
  app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    info(`Server running on port ${PORT}`)
})