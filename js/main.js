
/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/homepage.html", controller: "PageCtrl"})
    // Pages
    .when("/donate", {templateUrl: "pages/donate.html", controller: "postController"})
    .when("/success", {templateUrl: "/pages/success.html", controller: "SuccessCtrl"})
    .when("/failure", {templateUrl: "pages/failure.html", controller: "FailureCtrl"})
    .when("/homepage", {templateUrl: "pages/homepage.html", controller: "HomePageCtrl"})
    .when("/resume", {templateUrl: "pages/resume.html", controller: "resumeCtrl"})
    .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
    
}]);

/**
 * Controls the Blog
 */
app.controller('resumeCtrl', function (/* $scope, $location, $http */) {
  });

/**
 * Controls for Failure Page
 */
app.controller('FailureCtrl', function (/* $scope, $location, $http */) {
  console.log("Failure  Controller reporting for duty.");
});

/**
 * Controls for Failure Page
 */
app.controller('HomePageCtrl', function (/* $scope, $location, $http */) {
  console.log("HomePage  Controller reporting for duty.");
});


/**
 * Controls the Success
 */
app.controller('SuccessCtrl', function ($scope, $location, $http,$routeParams ) {
  console.log("Success Controller reporting for duty.");
  $scope.url=$location.absUrl();
  console.log($routeParams);
  $scope.buynetRef= $location.search()['buynetRef'];
  $scope.target1 = $location.search()['giftAidAmt'];
  $scope.target2 = $location.search()['donationAmt'];

  /*
  console.log('Target value is as below '+$scope.target);
  var search = $routeParams.search;
  console.log('routeparams is as below '+search);
  $location.search('donationAmt', '32');
*/

});


  //var postApp = angular.module('postApp', []);
    // Controller function and passing $http service and $scope var.
    app.controller('postController', function($scope, $http,TestDataResource,$timeout) {
      // create a blank object to handle form data.
        $scope.user = {};
        $scope.user.targetType = 'PARTICIPANT';
        $scope.user.targetID = '425372';
        $scope.user.targetURL = '/fundraisers/abdulrahman251';
        $scope.user.targetTitle = 'RCF Syria Appeal';
        $scope.user.donorPreferredName = 'anon';
        $scope.paymentFormEnable=false;
        $scope.user.clientId='clientApp';
        $scope.donation_details=true;
        $scope.payment_page=false;
        $scope.loading=false;
        

      // calling our submit function.
        $scope.submitForm = function() {
$scope.loading=true;
          $timeout(function () {
      $scope.loading = false; 
    $scope.payment_page=true;  }, 2000);

        $scope.donation_details=false;
        };
    });



app.controller('Hello', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
          $scope.greeting = response.data;
          $scope.iframeUrl='https://mydonatetest.bt.com/donation/iframe?donationId=51082';
          
        });
});