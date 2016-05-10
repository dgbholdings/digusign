'use strict';

angular.module('diguSignApp')
  .factory('apiService', function Auth($location, $rootScope, $http, User, $cookieStore, $q) {

    var root = {};

    root.createDoc = function(doc){
      var defer = $q.defer();
      $http.post('/api/documents/', doc).success(function(txid){
        defer.resolve(txid);
      }).catch(function(err){
        defer.reject(err);
      });

      return defer.promise;
    };

    root.findDoc = function(hash){
      var defer = $q.defer();
      $http.get('/api/documents/find/' + hash).success(function(data){
        defer.resolve(data);
      }).catch(function(err){
        defer.reject(err);
      });
      return defer.promise;
    };

    root.checkOpReturn = function(txid){
      var defer = $q.defer();
      let message = null;
      $http.get('https://digiexplorer.info/api/tx/' + txid).success(function(data){
        console.log(data)
        for(let i in data.vout){
          if(data.vout[i].scriptPubKey.asm.indexOf("OP_RETURN") > -1){
            message = data.vout[i].scriptPubKey.hex;
          }
        }

        let hex = message.toString();//force conversion
        let str = '';
        for (let i = 0; i < hex.length; i += 2){
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); 
        }

        if(str){
          return defer.resolve(str.substring(2));
        }
        defer.reject();
      }).catch(function(err){
        defer.reject(err);
      });

      return defer.promise;
    }

    return root;
  });
