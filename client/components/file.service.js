'use strict';

angular.module('diguSignApp')
  .service('fileUploadService', function ($q, $timeout) {

    this.readFileAsync = function (file) {
        let defer = $q.defer();
        let fileReader = new FileReader();
        fileReader.readAsText(file);

        fileReader.onload = function (e) {
            //deferred.resolve(e.target.result);

            CryptoJS.SHA256(e.target.result, crypto_callback, function(hash){
              defer.resolve(hash.toString())
            });

        };

        return defer.promise;
    };

    var crypto_callback = function(p) {
      let w = ((p*100).toFixed(0));
    }

  });
