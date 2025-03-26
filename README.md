# Tech Quiz Test Suite
This project implements component and end-to-end testing for a Tech Quiz application using Cypress. The app was built using the MERN stack with a React front end, a MongoDB database, and a Node.js/Express.js API. It allows users to take a quiz of ten random questions and view their final score.

## Acceptance Criteria
- When I click the start button, the quiz begins and I see a question.
- When I answer a question, the next question is shown.
- When all questions are answered, the quiz ends.
- When the quiz ends, I can see my score.
- I can start a new quiz once the previous one ends.

##  Walkthrough Video
[Click here to see the video](https://drive.google.com/file/d/1BA8J0uQNWExpYJBCwmQXbizOym8mR5Kn/view)

## Installation

1. Clone this repo to your machine and navigate into it:

   ```bash
   git clone 

2. Install all dependencies: npm i

3. Build and run the app in development mode: npm run start:dev
4. In a second terminal, run Cypress tests: npm run test

## Testing
You can run all Cypress tests using: npm run test