require('dotenv').config()
const mongoose = require('mongoose')
const assert = require('assert')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(url)

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

const Course = mongoose.model('Course', courseSchema)

// if (process.argv.length === 2) {
//     console.log('courses: ')
//     Course.find({}).then(result => {
//         result.forEach(course => {
//             console.log(`${course.name} ${course.code}`)
//         })
//         mongoose.connection.close()
//     })
// } else {
//     const course = new Course({
//         name: process.argv[2],
//         code: process.argv[3],
//         credits: process.argv[4],
//         grade: process.argv[5],
//         status: 'completed'
//     })

//     course.save().then(result => {
//         console.log(`Course saved ${result}`)
//         mongoose.connection.close()
//     })
// }

data = [
    {
        "name": "Professional Communication",
        "code": "COM001HH1A",
        "credits": 5,
        "grade": "3",
        "status": "completed"
      },
    {
        "name": "Customer Insight and Marketing",
        "code": "MAR001HH1A",
        "credits": 5,
        "status": "upcoming",
    },
    {
        "name": "ICT Competencies",
        "code": "ICB001HH1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Customer Experience and Sales",
        "code": "SAL001HH1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Teamwork and Project Management",
        "code": "HRL001HH1A",
        "credits": 5,
        "status": "S25"
    },
    {
        "name": "Basics of Financial Management",
        "code": "ECO001HH1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Entrepreneurship and Business Operations",
        "code": "ENT001HH1A",
        "credits": 5,
        "grade": "4",
        "status": "completed"
    },
    {
        "name": "Professional English",
        "code": "ENG001HH1AE",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Professional Swedish",
        "code": "SWE001HH1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Introduction to Studies",
        "code": "STU001HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed"
    },
    {
        "name": "Introduction to Digital Learning Environments",
        "code": "STU002HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed"
    },
    {
        "name": "Career Planning",
        "code": "STU007HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed"
    },
    {
        "name": "Job-Seeking Skills",
        "code": "STU008HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed"
    },
    {
        "name": "Studies and Entrepreneurship",
        "code": "STU010HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed"
    },
    {
        "name": "Introduction to Digital Services",
        "code": "DIG001IT1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Introduction to Business Driven ICT",
        "code": "ICB001IT1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Introduction to ICT Infrastructure and Cloud Services",
        "code": "ICI001IT1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Introduction to Software Development",
        "code": "SOF001IT1A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Programming I",
        "code": "SOF005AS2A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Programming II",
        "code": "SOF001AS3A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Data Management and Databases",
        "code": "SOF001AS2A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Back End Programming",
        "code": "SOF003AS3A",
        "credits": 5,
        "status": "S25"
    },
    {
        "name": "Front End Programming",
        "code": "SOF004AS3A",
        "credits": 5,
        "status": "S25"
    },
    {
        "name": "Software Requirements Analysis",
        "code": "SOF002AS2A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Python Programming",
        "code": "SOF004AS2A",
        "credits": 5,
        "grade": "5",
        "status": "completed"
    },
    {
        "name": "Software Development Project I",
        "code": "SOF005AS3A",
        "credits": 5,
        "status": "S25"
    },
    {
        "name": "Software Development Project II",
        "code": "SOF007AS3A",
        "credits": 10,
        "status": "A25"
    },
    {
        "name": "Software Testing",
        "code": "SOF015AS3A",
        "credits": 5,
        "status": "S25"
    },
    {
        "name": "Mobile Programming",
        "code": "SOF008AS3A",
        "credits": 5,
        "status": "A25"
    },
    {
        "name": "Software Development Technologies",
        "code": "SOF009AS3A",
        "credits": 5,
        "status": "A25"
    },
    {
        "name": "Software Test Automation",
        "code": "SOF017AS3A",
        "credits": 5,
        "status": "A25"
      },
      {
        "name": "Softala Project",
        "code": "SOF011AS3A",
        "credits": 10,
        "status": "A25"
      },
      {
        "name": "Cloud Service Technologies",
        "code": "ICI003AS3A",
        "credits": 5,
        "status": "S25"
      },
      {
        "name": "Database Developer",
        "code": "SOF013AS3AE",
        "credits": 5,
        "status": "upcoming"
      },
      {
        "name": "Basic Work Placement",
        "code": "PLA001HH1A",
        "credits": 15,
        "grade": "pass",
        "status": "completed"
      },
      {
        "name": "Professional Work Placement",
        "code": "PLA001HH2A",
        "credits": 15,
        "grade": "pass",
        "status": "completed"
      },
      {
        "name": "Research and Development Skills",
        "code": "ANA001HH1AE",
        "credits": 5,
        "status": "S26"
      },
      {
        "name": "Thesis",
        "code": "THE7HH801",
        "credits": 15,
        "status": "S26"
      }
]

Course.collection.insertMany(data, function(err,r) {
    assert.equal(null, err)
    assert.equal(38, r.insertedCount)
    console.log('Inserted: ', r.insertedCount)

    mongoose.connection.close()
})