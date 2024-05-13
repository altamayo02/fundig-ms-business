import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/reviews', 'ReviewsController.find')
	Route.get('/reviews/:id', 'ReviewsController.find')
	Route.post('/reviews', 'ReviewsController.create')
	Route.put('/reviews/:id', 'ReviewsController.update')
	Route.delete('/reviews/:id', 'ReviewsController.delete')
}).middleware(['security'])