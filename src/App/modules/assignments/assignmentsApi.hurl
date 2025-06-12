GET  http://localhost:5000


GET  http://localhost:5000/not-found



GET  http://localhost:5000/api/v1/schedules



GET  http://localhost:5000/api/v1/coffee/68248f451784c5e7958817ff


DELETE http://localhost:5000/api/v1/coffee/68248f451784c5e7958817fc



PATCH  http://localhost:5000/api/v1/coffee/68248f451784c5e7958817ff
Content-Type: application/json
{
    "name": "testingg"
}


POST http://localhost:5000/api/v1/create-coffee
Content-Type: application/json
{
    "name": "testingg",
    "description": "testingg",
    "price": 3.50,
    "size": "Single",
    "ingredients": ["Espresso Beans", "Water"],
    "available": true,
    "image": "https://example.com/images/espresso.jpg"
}


POST  http://localhost:5000/api/v1/create-schedules

Content-Type: application/json

[
  {
    "title": "Chest Workout",
    "day": "Monday",
    "formattedDate": "2025-05-19",
    "isCompleted": false
  },
  {
    "title": "Back & Biceps",
    "day": "Tuesday",
    "formattedDate": "2025-05-20",
    "isCompleted": false
  },
  {
    "title": "Leg Day",
    "day": "Wednesday",
    "formattedDate": "2025-05-21",
    "isCompleted": false
  },
  {
    "title": "Cardio & Core",
    "day": "Thursday",
    "formattedDate": "2025-05-22",
    "isCompleted": false
  },
  {
    "title": "Shoulders & Triceps",
    "day": "Friday",
    "formattedDate": "2025-05-23",
    "isCompleted": false
  },
  {
    "title": "Full Body Stretch",
    "day": "Saturday",
    "formattedDate": "2025-05-24",
    "isCompleted": false
  },
  {
    "title": "Active Recovery Walk",
    "day": "Sunday",
    "formattedDate": "2025-05-25",
    "isCompleted": false
  },
  {
    "title": "Push Workout",
    "day": "Monday",
    "formattedDate": "2025-05-26",
    "isCompleted": false
  },
  {
    "title": "Pull Workout",
    "day": "Tuesday",
    "formattedDate": "2025-05-27",
    "isCompleted": false
  },
  {
    "title": "HIIT Session",
    "day": "Wednesday",
    "formattedDate": "2025-05-28",
    "isCompleted": false
  }
]



