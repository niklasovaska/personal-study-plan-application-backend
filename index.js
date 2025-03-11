const express = require('express')
const morgan = require('morgan')
const cors = require('cors')  
const app = express()

morgan.token('body', (request) => JSON.stringify(request.body))

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

app.use(requestLogger)

let courses = [
    {
        "name": "Professional Communication",
        "code": "COM001HH1A",
        "credits": 5,
        "grade": 3,
        "status": "completed",
        "id": "522e"
      },
    {
        "name": "Customer Insight and Marketing",
        "code": "MAR001HH1A",
        "credits": 5,
        "grade": null,
        "status": "upcoming",
        "id": "8fd0"
    },
    {
        "name": "ICT Competencies",
        "code": "ICB001HH1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "5bb8"
    },
    {
        "name": "Customer Experience and Sales",
        "code": "SAL001HH1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "d1d7"
    },
    {
        "name": "Teamwork and Project Management",
        "code": "HRL001HH1A",
        "credits": 5,
        "grade": null,
        "status": "S25",
        "id": "d455"
    },
    {
        "name": "Basics of Financial Management",
        "code": "ECO001HH1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "bf98"
    },
    {
        "name": "Entrepreneurship and Business Operations",
        "code": "ENT001HH1A",
        "credits": 5,
        "grade": 4,
        "status": "completed",
        "id": "a684"
    },
    {
        "name": "Professional English",
        "code": "ENG001HH1AE",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "b979"
    },
    {
        "name": "Professional Swedish",
        "code": "SWE001HH1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "d814"
    },
    {
        "name": "Introduction to Studies",
        "code": "STU001HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed",
        "id": "7756"
    },
    {
        "name": "Introduction to Digital Learning Environments",
        "code": "STU002HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed",
        "id": "8b82"
    },
    {
        "name": "Career Planning",
        "code": "STU007HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed",
        "id": "eddd"
    },
    {
        "name": "Job-Seeking Skills",
        "code": "STU008HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed",
        "id": "cce7"
    },
    {
        "name": "Studies and Entrepreneurship",
        "code": "STU010HH1A",
        "credits": 1,
        "grade": "pass",
        "status": "completed",
        "id": "bb40"
    },
    {
        "name": "Introduction to Digital Services",
        "code": "DIG001IT1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "1c4a"
    },
    {
        "name": "Introduction to Business Driven ICT",
        "code": "ICB001IT1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "4dd3"
    },
    {
        "name": "Introduction to ICT Infrastructure and Cloud Services",
        "code": "ICI001IT1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "c78d"
    },
    {
        "name": "Introduction to Software Development",
        "code": "SOF001IT1A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "7add"
    },
    {
        "name": "Programming I",
        "code": "SOF005AS2A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "2713"
    },
    {
        "name": "Programming II",
        "code": "SOF001AS3A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "b998"
    },
    {
        "name": "Data Management and Databases",
        "code": "SOF001AS2A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "4515"
    },
    {
        "name": "Back End Programming",
        "code": "SOF003AS3A",
        "credits": 5,
        "grade": null,
        "status": "S25",
        "id": "34a6"
    },
    {
        "name": "Front End Programming",
        "code": "SOF004AS3A",
        "credits": 5,
        "grade": null,
        "status": "S25",
        "id": "5aef"
    },
    {
        "name": "Software Requirements Analysis",
        "code": "SOF002AS2A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "4b20"
    },
    {
        "name": "Python Programming",
        "code": "SOF004AS2A",
        "credits": 5,
        "grade": 5,
        "status": "completed",
        "id": "9bcc"
    },
    {
        "name": "Software Development Project I",
        "code": "SOF005AS3A",
        "credits": 5,
        "grade": null,
        "status": "S25",
        "id": "66bf"
    },
    {
        "name": "Software Development Project II",
        "code": "SOF007AS3A",
        "credits": 10,
        "grade": null,
        "status": "A25",
        "id": "d7c6"
    },
    {
        "name": "Software Testing",
        "code": "SOF015AS3A",
        "credits": 5,
        "grade": null,
        "status": "S25",
        "id": "db64"
    },
    {
        "name": "Mobile Programming",
        "code": "SOF008AS3A",
        "credits": 5,
        "grade": null,
        "status": "A25",
        "id": "4833"
    },
    {
        "name": "Software Development Technologies",
        "code": "SOF009AS3A",
        "credits": 5,
        "grade": null,
        "status": "A25",
        "id": "a02c"
    },
    {
        "name": "Software Test Automation",
        "code": "SOF017AS3A",
        "credits": 5,
        "grade": null,
        "status": "A25",
        "id": "50fc"
      },
      {
        "name": "Softala Project",
        "code": "SOF011AS3A",
        "credits": 10,
        "grade": null,
        "status": "A25",
        "id": "0625"
      },
      {
        "name": "Cloud Service Technologies",
        "code": "ICI003AS3A",
        "credits": 5,
        "grade": null,
        "status": "S25",
        "id": "7f0e"
      },
      {
        "name": "Database Developer",
        "code": "SOF013AS3AE",
        "credits": 5,
        "grade": null,
        "status": "upcoming",
        "id": "639c"
      },
      {
        "name": "Basic Work Placement",
        "code": "PLA001HH1A",
        "credits": 15,
        "grade": "pass",
        "status": "completed",
        "id": "625a"
      },
      {
        "name": "Professional Work Placement",
        "code": "PLA001HH2A",
        "credits": 15,
        "grade": "pass",
        "status": "completed",
        "id": "3a67"
      },
      {
        "id": "e9a1",
        "name": "Research and Development Skills",
        "code": "ANA001HH1AE",
        "credits": 5,
        "grade": null,
        "status": "S26"
      },
      {
        "id": "1fba",
        "name": "Thesis",
        "code": "THE7HH801",
        "credits": 15,
        "grade": null,
        "status": "S26"
      }
]

app.get('/api/courses', (request, response) => {
    response.json(courses)
})

app.get('/api/courses/:id', (request, response) => {
    const id = request.params.id
    const course = courses.find(course => course.id === id)

    if(course) {
        response.json(course) 
    } else {
        response.status(404).end()
    }
    
})

const generateId = () => {
    const Id = Math.floor(Math.random() * 1000)
    return String(Id)
  }

app.post('/api/courses', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.code || !body.credits) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const course = {
      name: body.name,
      code: body.code,
      credits: body.credits,
      grade: null,
      status: 'upcoming',
      id: generateId(),
    }
  
    courses = courses.concat(course)
  
    response.json(course)
  })

app.delete('/api/courses/:id', (request, response) => {
    const id = request.params.id
    courses = courses.filter(c => c.id !== id)
  
    response.status(204).end()
  })

const unknownEndpoint = (request, response) => {
response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
