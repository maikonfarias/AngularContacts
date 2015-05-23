(function() {
  var app = angular.module('maikonAngularApp');

  app.controller('ContactController',['$scope', '$http', function($scope, $http) {
    $scope.data = {};
    $http.get('contacts.json').success(function(data){
      
      //filter
      for(var i in data){
        if(data[i].contactId == $scope.contactId){
          $scope.data = data[i];
          return;
        }
      }      
    });
  }]);
    
})();