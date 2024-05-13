import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/payments', 'PaymentsController.find')
	Route.get('/payments/:id', 'PaymentsController.find')
	Route.post('/payments', 'PaymentsController.create')
	Route.put('/payments/:id', 'PaymentsController.update')
	Route.delete('/payments/:id', 'PaymentsController.delete')
}).middleware(['security'])