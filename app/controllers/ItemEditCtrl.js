app.controller("ItemEditCtrl", function($scope, $http, $location, itemStorage, $routeParams){
    $scope.title = "Edit Item";
    $scope.submitButtonText = "Update";
    $scope.newTask = {};

    itemStorage.getSingleItem($routeParams.itemId)
    .then(function successCallback(response){
        $scope.newTask=response;
    });

    $scope.addNewItem = function(){
        itemStorage.updateItem($routeParams.itemId, $scope.newTask)
            .then(function successCallback(response) {
                console.log(response);
                $location.url("/items/list");
            });
    };
});