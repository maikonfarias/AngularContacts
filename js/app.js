(function() {
  var app = angular.module('maikonAngularApp', ['ui.router', 'ngMaterial']);
  
  app.config(function($stateProvider, $urlRouterProvider) {
    //alert(0);
    //
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "partials/home.html"
      })
      .state('contact', {
        url: "/contact/:contactId",
        templateUrl: "partials/contact.html",
        controller: function ($stateParams, $scope) {
          $scope.contactId = $stateParams.contactId;
        }
      });     
  });
  
  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('green');
  });
})();