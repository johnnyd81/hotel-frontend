# Hotel booking app

## App Description

This application allows a user to book a hotel for a certain amount of time. The app is protected therefore only users who are authenticated can use it. After authentication the user will be taken to the homepage where three cities are displayed. Each city has a certain amount of hotels to choose from and a user has to select the city, amount of people, amount of rooms to be booked and the checking in and checking out dates. The amount to be paid will vary according to the amount of rooms booked as well as the different prices of each hotel. The admin dashboard can be used to delete or edit users in the database as well as to cancel any previous bookings made by the users.

## Installing the app

1. Clone/Download the project to your computer.
2. In the command terminal cd into the hotel-app-capstone directory.
3. cd into the frontend and enter "npm install"
4. Next cd back into the root directory and cd into the backend and enter "npm install".
5. Next enter "npm start" from the backend to start the frontend and the backend simultaneously

## Security

The app is secured with the helmet security package.

## Deployment

The removal of heroku's free tier means that deploying fullstack applications has to be done seperately on different platforms. I will update my readme file as soon as my app is deployed

## System Architecture

The application will be built using the MERN stack of technologies. This stack will be used to create the frontend user interface(React.js), the backend(Node.js, Express.js) and the database(MongoDb). The primary reason for using the MERN stack for this application is that JavaScript can be used for all the technologies involved in the application, thereby simplifying the development process.The frontend of the application(created using Create-React-App) will be styled using a combination of React-bootstrap and CSS. The backend will be created using Node.js/Express.js and mongoose will be used to interact with the database. The application will be hosted on either Heroku or Netlify on completion of development. I prefer to keep the frontend and the backend together during deployment therefore a hosting platform like Heroku or Netlify would be the obvious choice.

## System Requirements

The application will allow a user to book accomodation for themselves when they are travelling. The user has choices like country, date-range, adult or child etc. The application is very useful since all the data retrieved will be reliable and in real-time. Similar applications are Agoda, Trivago, Goibibo and HotelArc. To make the application differentiate itself from the rest, a lot of focus is going to be put in a truly responsive and easy-to-understand user interface. Thus a truly intuitive user interface is a priority.

A couple of user stories include:-

- As a user, I want the search results to be relevant to my search, so that I can make an informed decision on my accomodation

- As a user, I want the pricing to be current , so that I have peace of mind that all my travel arrangements can be budgeted correctly

- As a user, I want an intuitive and simple user interface, so that my focus can be solely on finding accomodation rather than learning to use an application

- As a user, I want to know that the information I get from the application can be trusted, so that I can avoid leaving myself or my loved ones stranded

The functional requirements are :-

- To register a user and thereafter a user can sign into the application
- search for accomodation using a searchbar i.e. country, duration etc.
- select accomodation from the search results
- edit details about the reservation/accomodation
- delete their reservation/accomodation

The non-functional requirements are :-

- data has to be protected by only allowing registered users access into the application
- the technologies used have to be current and well supported
- has to maintain the integrity of each user's data
- technology stack to be used will be the MERN stack i.e. MongoDb, Express.js, React.js and Node.js
- has to be scalable
