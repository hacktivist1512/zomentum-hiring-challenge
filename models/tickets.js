const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketsSchema = new Schema({
    TicketID: {
        type: String,
        required: true
    },
    User: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    Movie: {
        type: String,
        required: true
    },
    Timings: {
        type: Date,
    },
    Expiry: {
        type: Date,
        default: function() { 
            return new Date(Date.now() + 60*60*8);
        }
    }
});

var Tickets = mongoose.model('Ticket', ticketsSchema);

module.exports = Tickets;