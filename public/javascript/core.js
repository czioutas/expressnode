var PressPublic = angular.module('MyMonitor', ['ngSanitize']);

function IsUndefined(value) {
    if (value === undefined)
        return true;
    return false;
}

PressPublic.controller('mainController', function ($scope, $http) {
    $scope.widgetCreateFormPost = {};

    $http.get('/acknowledgement')
		.success(function (result) {
		    $scope.acknowledgement = result;
		})
		.error(function (data) {
		    console.log('Error: ' + result);
		});

    $scope.postWidget = function () {
      if(widgetCreateFormData.Name.value != '' && widgetCreateFormData.Name.value.length >0) {
        $http.post('/api/postWidget', $scope.widgetCreateFormData)
            .success(function (data) {
                $scope.anonymPostFormData = {};
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
      }
      else {
        //alert or something
      }
    }
});
