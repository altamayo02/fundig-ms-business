import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/clients', 'ClientsController.find')
	Route.get('/clients/:id', 'ClientsController.find')
	Route.post('/clients', 'ClientsController.create')
	Route.put('/clients/:id', 'ClientsController.update')
	Route.delete('/clients/:id', 'ClientsController.delete')
}).middleware(['security'])