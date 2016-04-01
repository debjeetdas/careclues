var app = angular.module("TestApp", []);

app.controller("TestCtrl", ["$http", "$scope", function($http, $scope) {
    $http.get("js/jsondata.json")
    .success(function (response) {
        $scope.patients = response.data;
        // console.log("RESPONSE", response);
    })
    .error(function () {
        alert("fail");
    });
}]);