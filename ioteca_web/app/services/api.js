app
.factory("API", function ($resource) {
	var url="http://localhost:8000/api-catalogo/";
	return {
		Categoria: $resource(url+"categorias/:id/",{'id': '@id'},
			{
				'update': { method:'PUT' },
				'list': { method:'GET', isArray:true },
			}),

		//Producto: $resource(),

	}
});