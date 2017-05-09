mainApp.controller('nameCtrl', function ($scope, $http) {

    var url = "http://162.17.231.114:121/SpinoService.svc/GetCategory";

    //var url = "../data.txt";
    console.log(url);
    $http.get(url).success(function (response) {
        console.log(response);
        $scope.GetCategoryResult = response.GetCategoryResult;
    });
}

);