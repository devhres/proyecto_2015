
app
.controller("ctrl", function ($scope) {
	// body...
	//$scope.nombre="juan";

	$scope.save=function () {
		console.log("Salvado "+$scope.nombre);
	}
	$scope.lista=[
    {
        "id": 1,
        "nombre": "Revis",
        "activo": false
    },
    {
        "id": 2,
        "nombre": "Libros",
        "activo": true
    },
    {
        "id": 3,
        "nombre": "Periódico",
        "activo": true
    },
    {
        "id": 6,
        "nombre": "Multimedia",
        "activo": false
    }
];
});
