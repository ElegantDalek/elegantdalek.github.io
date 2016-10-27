app.controller('tripCtrl', ['$scope', 'myService', function ($scope, myService) {
    $scope.trips = myService.getTrips();
}]);

app.factory('myService', function () {
    var trips = function () {
        return [
                {
                    desc: 'Sleeping Bear National Park',
                    photoURL: 'photos/IMG_6688.jpg'
                },
                {
                    desc: "Devil's Tower"
                    photoURL: 'photos/PANO_20150721_132128.jpg'
                }
            ];
    };
    return {
        getTrips : trips
    };
});