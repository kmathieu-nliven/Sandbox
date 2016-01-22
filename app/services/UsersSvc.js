/**
 * Created by ksl5137 on 1/21/16.
 */

angular.module('sandboxApp').factory('UsersSvc', function(Restangular){

    var service = {
      getList: getUsers
    };

    function getUsers() {
      return Restangular.all('users').getList().then(function(data) {
        console.log(data.plain());
        return data.plain();
      });
    }

    return service;
  });
