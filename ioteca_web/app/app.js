var app=angular.module("app",[
'ui.router'
]);

app
.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/crud');

	$stateProvider

	.state("crud", {
		url:"/crud",
		templateUrl:"app/views/crud.html",
	});

});