import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/houses', 'HousesController.find')
	Route.get('api/houses/:id', 'HousesController.find')
	Route.post('api/houses', 'HousesController.create')
	Route.put('api/houses/:id', 'HousesController.update')
	Route.delete('api/houses/:id', 'HousesController.delete')
}).middleware(['security'])