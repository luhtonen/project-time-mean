'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: 'Email cannot be empty'
  },
  phone: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Contact', ContactSchema);
