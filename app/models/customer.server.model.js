'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Customer name cannot be empty'
  },
  address: {
    type: Schema.ObjectId,
    ref: 'Address'
  },
  contact: {
    type: Schema.ObjectId,
    ref: 'Contact'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Customer', CustomerSchema);
