import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/plans', 'PlansController.find')
	Route.get('/plans/:id', 'PlansController.find')
	Route.post('/plans', 'PlansController.create')
	Route.put('/plans/:id', 'PlansController.update')
	Route.delete('/plans/:id', 'PlansController.delete')
}).middleware(['security'])