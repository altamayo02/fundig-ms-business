import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/plans', 'PlansController.find')
	Route.get('api/plans/:id', 'PlansController.find')
	Route.post('api/plans', 'PlansController.create')
	Route.put('api/plans/:id', 'PlansController.update')
	Route.delete('api/plans/:id', 'PlansController.delete')
}).middleware(['security'])