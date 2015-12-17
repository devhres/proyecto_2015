var app=angular.module("app",[
'ui.router',
'ngResource',
]);


app.config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    // $httpProvider.defaults.headers.post['Content-Type'] = undefined;
    // $httpProvider.defaults.headers.put['Content-Type'] = undefined;
}])

.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);


app
.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/crud');

	$stateProvider

	.state("crud", {
		url:"/crud",
		templateUrl:"app/views/crud.html",
	})



	.state("categoria", {
		url:"/categoria",
		templateUrl:"app/views/categoria.html",
	});

});