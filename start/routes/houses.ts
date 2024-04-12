import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/houses', 'HousesController.find')
	Route.get('/houses/:id', 'HousesController.find')
	Route.post('/houses', 'HousesController.create')
	Route.put('/houses/:id', 'HousesController.update')
	Route.delete('/houses/:id', 'HousesController.delete')
})