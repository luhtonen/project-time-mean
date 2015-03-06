'use strict';

angular.module('customers').controller('CustomersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Customers',
  function($scope, $stateParams, $location, Authentication, Customers) {
    $scope.authentication = Authentication;

    $scope.create = function() {
      var address = new Address({
        address: this.address,
        additional: this.additional,
        city: this.city,
        zipcode: this.zipcode,
        country: this.country
      });
      var contact = new Contact({
        name: this.contactName,
        email: this.email,
        phone: this.phone
      });
      var customer = new Customer({
        name: this.name,
        address: address,
        contact: contact
      });
      customer.save(function(response) {
        $location.path('customers/' + response._id);

        $scope.name = '';
        // todo: clear other values from scope
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.remove = function(customer) {
      if (customer) {
        customer.$remove();

        for (var i in $scope.customers) {
          if ($scope.customers[i] === customer) {
            $scope.customers.splice(i, 1);
          }
        }
      } else {
        $scope.customers.$remove(function() {
          $location.path('customers');
        });
      }
    };

    $scope.update = function() {
      var customer = $scope.customer;

      customer.$update(function() {
        $location.path('customers/' + customer._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function() {
      $scope.customers = Customers.query();
    };

    $scope.findOne = function() {
      $scope.customer = Customers.get({
        customerId: $stateParams.customerId
      });
    };
  }
]);
