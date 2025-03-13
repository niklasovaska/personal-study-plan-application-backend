const courseRouter = require('express').Router()
const Course = require('../models/course')

courseRouter.get('/', (request, response) => {
    Course.find({}).then(courses => {
            response.json(courses)
        })
})

courseRouter.get('/:id', (request, response, next) => {
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

courseRouter.post('/', (request, response, next) => {
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

courseRouter.put('/:id', (request, response, next) => {
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

courseRouter.delete('/:id', (request, response, next) => {
    Course.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
  })

module.exports = courseRouter