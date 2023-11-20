# Quiz_App
Server Application For Quiz

## Introduction
An application that allows users to create and participate in timed quizzes. The application have a RESTful API that provides functionalities for creating and retrieving quizzes.

## Features

- User can create new quiz.
- User can get all active quizes.
- User Can get result of a quiz (means right answers) when quiz is finished.
- User can get all the quizes.
- Status of quiz is updated automatically by cron job.
- Deployed On AWS EC2.

## Getting Started

- clone repo 
- nmp i
- nodemon server.js 

## API Reference
- Endpoint to create quiz:(POST)
  http://13.127.84.129/api/v1/quiz/quizzes
  Sample Body:{
  "questions":[
    { "question":"of the following river flows between Vindhyan and Satpura ranges?",
      "options":{
         "a":"Akky",
         "b":"Mahanadi",
         "c":"Son",
         "d":"Netravati"
      },
     "rightAnswer":"Narmada"
    },
    { "question":"The Central Rice Research Station is situated in?",
      "options":{
         "a":"Chennai",
         "b":"Cuttack",
         "c":"Bangalore",
         "d":"Quilon"
      },
     "rightAnswer":"Cuttack"
    },
    { "question":"Who among the following wrote Sanskrit grammar?",
      "options":{
         "a":"Kalidasa",
         "b":"Charak",
         "c":"Panini",
         "d":"Aryabhatt"
      },
     "rightAnswer":"Panini"
    }
    ],
  "startDate":"2023-11-19",
  "endDate":"2023-11-20"
}
- Endpoint to get all active quizes:(GET)
  http://13.127.84.129/api/v1/quiz/quizzes/active
- Endpoint to get result of finished quizes:(GET)
  http://13.127.84.129/api/v1/quiz/quizzes/:id/result
- Endpoin to get all Quizes:(GET)
  http://13.127.84.129/api/v1/quiz/quizzes/all


