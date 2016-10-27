app.controller('photoCtrl', ['$scope', 'myService', function ($scope, myService) {
    $scope.infos = myService.getInfos();
}]);

app.factory('myService', function() {
    var infos = function() {
        return [
                {
                    title: 'Trips',
                    description: 'Sleeping Bear National Park',
                    photoURL: 'photos/IMG_6688.jpg'
                },
                {
                    title: 'Projects',
                    description: 'Web Development'
                },
                {
                    title: 'About:',
                    description: 'Theodore Li'
                }
            ];
    };
    return {
        getInfos : infos
    };
});