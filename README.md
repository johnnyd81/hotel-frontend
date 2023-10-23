# Hotel booking app

## App Description

This application allows a user to book a hotel for a certain amount of time. The app is protected therefore only users who are authenticated can use it. After authentication the user will be taken to the homepage where three cities are displayed. Each city has a certain amount of hotels to choose from and a user has to select the city, amount of people, amount of rooms to be booked and the checking in and checking out dates. The amount to be paid will vary according to the amount of rooms booked as well as the different prices of each hotel. The admin dashboard can be used to delete or edit users in the database as well as to cancel any previous bookings made by the users.

![image](https://github.com/johnnyd81/hotel-frontend/assets/95863021/8222b538-628e-4872-9eac-f607de227b4a)

![image](https://github.com/johnnyd81/hotel-frontend/assets/95863021/e891c754-e70f-40e2-ac8d-d4003ccce4fc)


## User instructions

To use the app a user first has to register. Once registered a user has the choice of choosing a hotel in three South African cities namely Johannesburg, Durban and Cape Town. Each city has hotels that are very highly rated and offer excellent customer service. A price range can also be entered to find a hotel that suits a user i.e. a price range between R500 and R1000 per night. A user is then navigated to the booking page where a Book Now button confirms the booking. The final page is a Confirmation page that shows a user the details of their booking i.e. username, stay duration etc. It is at this stage that a user can cancel their booking and remove it from the database. If not then a homepage button navigates a user back to the homepage. The log out button on the navigation bar can be clicked to return a user to the login page.

## Admin user instructions

To log in as an admin user the admin button needs to be clicked on the navigation bar. Once clicked a modal appears that requires a username and a password to be entered. If either fields receive incorrect data then an error appears. Once logged in the admin user has the option of editing usernames, deleting users from the database and cancelling bookings that have been made by the users. To log out of the admin dashboard the log out button can be clicked to return a user to the login page.

## Installing the app

1. Clone/Download the project to your computer.
2. In the command terminal cd into the hotel-app-capstone directory.
3. cd into the frontend and enter "npm install"
4. Next cd back into the root directory and cd into the backend and enter "npm install".
5. Next enter "npm start" from the backend to start the frontend and the backend simultaneously

## Security

The app is secured with the helmet security package.

## Deployment

The frontend of my app is deployed on vercel and the backend is deployed on render.com. View the live demo [here](https://hotel-frontend-alpha.vercel.app/)

## System Architecture

The application will be built using the MERN stack of technologies. This stack will be used to create the frontend user interface(React.js), the backend(Node.js, Express.js) and the database(MongoDb). The primary reason for using the MERN stack for this application is that JavaScript can be used for all the technologies involved in the application, thereby simplifying the development process.The frontend of the application(created using Create-React-App) will be styled using a combination of React-bootstrap and CSS. The backend will be created using Node.js/Express.js and mongoose will be used to interact with the database. The application will be hosted on vercel and render.com on completion of development.

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
