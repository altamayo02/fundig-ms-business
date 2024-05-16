import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/clients', 'ClientsController.find')
	Route.get('api/clients/:id', 'ClientsController.find')
	Route.post('api/clients', 'ClientsController.create')
	Route.put('api/clients/:id', 'ClientsController.update')
	Route.delete('api/clients/:id', 'ClientsController.delete')
}).middleware(['security'])