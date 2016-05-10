'use strict';

angular.module('diguSignApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sign', {
        url: '/sign',
        templateUrl: 'app/document/sign/sign.html',
        controller: 'SignCtrl',
        authenticate: true
      })
      .state('document', {
        url: '/document/:id',
        templateUrl: 'app/document/document/document.html',
        controller: 'DocumentCtrl'
      })
      .state('verify', {
        url: '/verify',
        templateUrl: 'app/document/verify/verify.html',
        controller: 'VerifyCtrl'
      });
  });