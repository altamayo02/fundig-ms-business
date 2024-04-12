import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/service_executions', 'ServiceExecutionsController.find')
	Route.get('/service_executions/:id', 'ServiceExecutionsController.find')
	Route.post('/service_executions', 'ServiceExecutionsController.create')
	Route.put('/service_executions/:id', 'ServiceExecutionsController.update')
	Route.delete('/service_executions/:id', 'ServiceExecutionsController.delete')
})