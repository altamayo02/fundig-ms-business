import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/locations', 'LocationsController.find')
	Route.get('api/locations/:id', 'LocationsController.find')
	Route.post('api/locations', 'LocationsController.create')
	Route.put('api/locations/:id', 'LocationsController.update')
	Route.delete('api/locations/:id', 'LocationsController.delete')
}).middleware(['security'])