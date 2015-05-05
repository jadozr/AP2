'use strict';

var _ = require('lodash');
var Cars = require('./cars.model');

// Get list of carss
exports.index = function(req, res) {
  Cars.find(function (err, carss) {
    if(err) { return handleError(res, err); }
    return res.json(200, carss);
  });
};

// Get a single cars
exports.show = function(req, res) {
  Cars.findById(req.params.id, function (err, cars) {
    if(err) { return handleError(res, err); }
    if(!cars) { return res.send(404); }
    return res.json(cars);
  });
};

// Creates a new cars in the DB.
exports.create = function(req, res) {
  Cars.create(req.body, function(err, cars) {
    if(err) { return handleError(res, err); }
    return res.json(201, cars);
  });
};

// Updates an existing cars in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cars.findById(req.params.id, function (err, cars) {
    if (err) { return handleError(res, err); }
    if(!cars) { return res.send(404); }
    var updated = _.merge(cars, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, cars);
    });
  });
};

// Deletes a cars from the DB.
exports.destroy = function(req, res) {
  Cars.findById(req.params.id, function (err, cars) {
    if(err) { return handleError(res, err); }
    if(!cars) { return res.send(404); }
    cars.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}