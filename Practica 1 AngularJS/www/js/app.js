(function () {
    var app = angular.module('gemStore', ['store-products']);
    app.controller('StoreController', ['$http',function($http){
        var store = this;
        store.products = [];
        $http.get('services/products.json').success(function(data){
            store.products = data;
        });
    }]);
})();