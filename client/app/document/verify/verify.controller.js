'use strict';

angular.module('diguSignApp')
  .controller('VerifyCtrl', function ($scope, $http, $location, socket, fileUploadService, apiService) {

    $scope.hash = null;

    $scope.onFileUpload = function (element) {
      $scope.$apply(function (scope) {
        var file = element.files[0];
        $scope.file = file.name
        fileUploadService.readFileAsync(file).then(function (fileInputContent) {
          $scope.hash = fileInputContent;
        });
      });
    };

    $scope.verifyDocument = function(){
      if($scope.hash){
        apiService.findDoc($scope.hash).then(function(data){
          $location.path('/document/' + data.hash);
        }).catch(function(err){
          console.log(err);
        });
      } else {
        apiService.checkOpReturn($scope.txid).then(function(data){
          $location.path('/document/' + data)
        }).catch(function(err){
          console.log(err);
        });
      }
    }


  });