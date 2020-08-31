# zomentum-hiring-challenge
## REST API for movie tickets booking

This repository contains the server-side implementation of a movie ticket booking API using NodeJS, Express and Mongoose (MongoDB).
The API contains the following endpoints:

        - /movies
                *An endpoint to book a ticket using a Username, PhoneNumber, TicketID, Timings & Movie name
                *An endpoint to update a ticket timing of the specified TicketID
                *An endpoint to view all tickets for a particular time
                *An endpoint to delete a particular ticket
                *Mark the ticket as expired if there is a diff of 8 hors between the ticket timing and current time    

        - /movies/:TicketID
                *An endpoint to view the user's details based on TicketID
     
####For a particular timing, a maximum of 20 tickets can be booked

All the endpoints are tested using postman and the screenshots are included in the repository.
