'use strict';

angular.module('diguSignApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $http, socket, $cookieStore) {
    $scope.user = {};
    $scope.errors = {};

    socket.socket.on('token', function(data){
      console.log(data);
      Auth.loginbitId(data);
      $location.path('/');
    })

    $scope.manualLogin = function(form) {
      $scope.submitted = true;

      console.log($('#signature').val())

      let obj = {
        uri: $scope.uri,
        address: $('#formAddress').val(),
        signature: $('#formSignature').val(),
      }
      console.log(obj);
      Auth.manualLogin(obj).then(function(data){
        console.log(data);
      }).catch(function(err){
        console.log(err);
      });
    };

    $http.get('/auth/bitid/login').success(function(resp){
      $scope.qrcode = resp.qrcode;
      $scope.uri = resp.uri;
    }).catch(function(err){
      console.log(err);
    });

    $scope.tabs = [{
            title: 'QR Code',
            url: 'one.tpl.html'
        }, {
            title: 'Manual',
            url: 'two.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

  });
