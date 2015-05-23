(function() {
  var app = angular.module('maikonAngularApp');

  app.controller('HomeController',['$scope', 'contactService', function($scope, contactService) {
    $scope.data = [];
    $scope.isArea1Open = true;
    $scope.isArea2Open = true;
    $scope.isArea3Open = true;
    
    contactService.getContacts().then(function(data){
      console.log(data);
      $scope.data = data;
    });
    
    $scope.toggleArea1 = function(elementId){
      if(!$(elementId).hasClass('collapsing')){
        $scope.isArea1Open = !$(elementId).hasClass('in'); 
      }
    };
    
    $scope.toggleArea2 = function(elementId){
      if(!$(elementId).hasClass('collapsing')){
        $scope.isArea2Open = !$(elementId).hasClass('in'); 
      }
    };
    
    $scope.toggleArea3 = function(elementId){
      if(!$(elementId).hasClass('collapsing')){
        $scope.isArea3Open = !$(elementId).hasClass('in'); 
      }
    };
  }]);
  
  app.directive("contactListItem", function() {
    return {
      restrict:"E",
      templateUrl: "partials/contact-list-item.html"
    };
  });
  
  app.service("contactService", function($http, $q){
    this.getContacts = function() {
      var defered = $q.defer();
      $http.get('data.json').success(function(data){
        defered.resolve(data);
      });
      return defered.promise;
    };
  });

})();
