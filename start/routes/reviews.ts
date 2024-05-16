import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/reviews', 'ReviewsController.find')
	Route.get('api/reviews/:id', 'ReviewsController.find')
	Route.post('api/reviews', 'ReviewsController.create')
	Route.put('api/reviews/:id', 'ReviewsController.update')
	Route.delete('api/reviews/:id', 'ReviewsController.delete')
}).middleware(['security'])