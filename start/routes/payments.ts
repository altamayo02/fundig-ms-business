import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/payments', 'PaymentsController.find')
	Route.get('api/payments/:id', 'PaymentsController.find')
	Route.post('api/payments', 'PaymentsController.create')
	Route.put('api/payments/:id', 'PaymentsController.update')
	Route.delete('api/payments/:id', 'PaymentsController.delete')
}).middleware(['security'])