import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/streams', 'StreamsController.find')
	Route.get('/streams/:id', 'StreamsController.find')
	Route.post('/streams', 'StreamsController.create')
}).middleware(['security'])