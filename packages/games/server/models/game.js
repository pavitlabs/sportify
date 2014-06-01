'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var now = new Date();

/**
 * Game Schema
 */
var GameSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    homeTeam: {
        type: String,
        default: '',
        trim: true
    },
    visitingTeam: {
        type: String,
        default: '',
        trim: true
    },
    scheduledDate: {
        type: Date,
        default: now.toJSON()
    },
    venue: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
GameSchema.path('homeTeam').validate(function(homeTeam) {
    return homeTeam.length;
}, 'Home Team cannot be blank');
GameSchema.path('visitingTeam').validate(function(visitingTeam) {
    return visitingTeam.length;
}, 'Visiting Team cannot be blank');
GameSchema.path('venue').validate(function(venue) {
    return venue.length;
}, 'Venue cannot be blank');

/**
 * Statics
 */
GameSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Game', GameSchema);
