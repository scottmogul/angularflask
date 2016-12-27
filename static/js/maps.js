myApp.controller('mapsCtrl', function($scope, $http){

    $scope.centerCoordinates = [37.09024, -95.71289100000001];
    $scope.vehicles = [];
    $scope.latitude = 40.04968;
    $scope.longitude = -82.83061900000001;
    $scope.mapData = [
        {id: 1, coordinates: [$scope.latitude, $scope.longitude], model: 'Silverado 1500', make: 'Cheverolet', price: '48000'},
        {id: 2, coordinates:[40, -82.9], model: 'Civic', make: 'Honda', price: '23000'},
        {id: 2, coordinates:[40, -82.9], model: 'Civic', make: 'Honda', price: '23000'},
        {id: 2, coordinates:[40, -82.9], model: 'Civic', make: 'Honda', price: '23000'},
        {id: 2, coordinates:[40, -82.9], model: 'Civic', make: 'Honda', price: '23000'},
        {id: 2, coordinates:[40, -82.9], model: 'Civic', make: 'Honda', price: '23000'}
    ];

    // pyTool.py('test', 'my_first_function', {}).then(
    //     function (response) {
    //         $scope.vehicle = response.data
    // });

    $http.get("/carbitrage/gettest").success(function(data){
        data.forEach(function(entry){
            $scope.vehicles.push(entry);
        })

    });
    //console.log($scope.vehicle);
});

