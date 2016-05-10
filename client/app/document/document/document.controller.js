'use strict';

angular.module('diguSignApp')
  .controller('DocumentCtrl', function ($scope, $http, $stateParams, socket, fileUploadService, apiService) {
    let docHash = $stateParams.id
    

    apiService.findDoc(docHash).then(function(doc){
      $scope.doc = doc;
      console.log(doc);
    }).catch(function(err){
      console.log(err);
    });


  });