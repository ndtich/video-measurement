# Welcome
This is the basic structure of our recruitment assignment. Please refer to the requirements section for the minimum requirements/objective of this assignment. Please use anything you want that fits the requirements. You can structure this example any way you want. It is important to show your coding preference and use your own style!

### Data information
This service tracks video performance. In the database you can find videos for different channels. Each video is measured *once* per day. This data will be used for analysis. 

### Requirements
Our goal is to have a simple web application with the following functionality:

 - List each video
 - For each video also show the measurement made **2 days after the video was created**  (do not show any other measurements)
 - Create backend API endpoint to retrieve the videos with relevant measurement
 - Visualize the frontend by using your favorite React components

### Must use
 1. Use Flask and Flask-SQLAlchemy for the backend
 2. Use React for the frontend (use your favorite React components)

### Do not
 - You do not need to interact with the YouTube API
 - You don't have to add any data to the database

### Bonus
You don't have to do this in case you are time constrained but we will appreciate it if you:
 - Restructure the project folders and files to your preferred working style for both frontend and backend
 - Write some tests

### Contact
If you have any questions please do not hesitate to contact Trang at: trang.nguyen@creatory.vn

### How to use
##### Backend
Install requirements in requirements.txt and run the application with:

`flask run`
##### Frontend
Made with create-react-app. Use with yarn/npm and adjust as you see fit. Use any packages you like however please do not eject.

Commands to use are:
`yarn start` and `yarn test`
