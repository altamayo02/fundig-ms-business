import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/services', 'ServicesController.find')
	Route.get('api/services/:id', 'ServicesController.find')
	Route.post('api/services', 'ServicesController.create')
	Route.put('api/services/:id', 'ServicesController.update')
	Route.delete('api/services/:id', 'ServicesController.delete')
}).middleware(['security'])