app.controller("ItemListCtrl", function($scope, $http, $location, itemStorage){
	$scope.items = [];
// 	var getItems = function(){
// 	$http.get("https://ad-to-do-app.firebaseio.com/items.json")
// 	.success(function(itemObject){
// 		var itemCollection = itemObject;
// 		Object.keys(itemCollection).forEach(function(key){
// 			itemCollection[key].id=key;
// 			$scope.items.push(itemCollection[key]);
// 		})
// 	});
// }
// getItems();

	itemStorage.getItemList().then(function(itemCollection){
		console.log("itemCollection from promise", itemCollection);
		$scope.items = itemCollection;
	})

	$scope.itemDelete = function(itemId){
		console.log("itemId", itemId);
		$http
			.delete(`https://ad-to-do-app.firebaseio.com/items/${itemId}.json`)
			.success(function(response){
				console.log(response);
				$scope.items=[];
				getItems();
			});
		};
});