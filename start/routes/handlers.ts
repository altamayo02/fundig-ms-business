import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/handlers', 'HandlersController.find')
	Route.get('api/handlers/:id', 'HandlersController.find')
	Route.post('api/handlers', 'HandlersController.create')
	Route.put('api/handlers/:id', 'HandlersController.update')
	Route.delete('api/handlers/:id', 'HandlersController.delete')
}).middleware(['security'])