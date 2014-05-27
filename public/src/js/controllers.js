
var Phault = angular.module('Phault', []);

Phault.controller('IndexCtrl', ['$scope', '$http',

  function ($scope, $http) {

    $http.get('/api/errors')
      .success(function (latestErrors) {

        $scope.latestErrors = latestErrors;

      });
  
  }

  ]);

Phault.controller('UserCtrl', ['$scope', '$http', '$window',

  function ($scope, $http, $window) {

    var user = $window.location.pathname.replace('/user/', '');

    $http.get('/api/user/' + user)
      .success(function (latestErrors) {

        $scope.latestErrors = latestErrors;

      });
  
  }

  ]);