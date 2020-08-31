const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const movieBook = require('../models/tickets');

const movieRouter = express.Router();

movieRouter.use(bodyParser.json());


movieRouter.route('/')
.get((req, res, next) => {
        movieBook.find({Timings:req.body.Timings})
        .then((tickets) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tickets);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req,res,next) => {
    (movieBook.count({Timings:req.body.Timings}, function(err, countData){ if(countData < 20)
    
        {
            movieBook.create(req.body, )
            .then((ticket) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(ticket);
            }, (err) => next(err))
            .catch((err) => next(err));
    }
    else{
        res.end("All 20 tickets for current timings are already sold");
    }
    }))
})
.put((req,res,next) => {
    movieBook.update({TicketID: req.body.TicketID}, {$set: { Timings: req.body.Timings}} )
    .then((ticket) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(ticket);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req,res,next) => {
    movieBook.remove({TicketID:req.body.TicketID})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));  
});

movieRouter.route('/:ticketID')
.get((req,res,next) => {
    movieBook.find({TicketID:req.params.ticketID})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = movieRouter;