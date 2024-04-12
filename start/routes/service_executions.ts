import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/service-executions', 'ServiceExecutionsController.find')
	Route.get('/service-executions/:id', 'ServiceExecutionsController.find')
	Route.post('/service-executions', 'ServiceExecutionsController.create')
	Route.put('/service-executions/:id', 'ServiceExecutionsController.update')
	Route.delete('/service-executions/:id', 'ServiceExecutionsController.delete')
})