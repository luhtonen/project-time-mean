'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Address Schema
 */
var AddressSchema = new Schema({
  address: {
    type: String,
    default: '',
    trim: true
  },
  additional: {
    type: String,
    default: '',
    trim: true
  },
  city: {
    type: String,
    default: '',
    trim: true
  },
  zipcode: {
    type: String,
    default: '',
    trim: true
  },
  country: {
    type: String,
    default: '',
    trim: true,
    required: 'Country cannot be empty'
  }
});

mongoose.model('Address', AddressSchema);
