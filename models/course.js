const mongoose = require('mongoose')
const { info, error } = require('../utils/logger')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

info('connecting to database')

mongoose.connect(url)
  .then(result => {
    info('connected to MongoDB')
  })
  .catch(error => {
    error('error connecting to MongoDB: ', error.messsage)
  })

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

courseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Course', courseSchema)