import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/service-executions', 'ServiceExecutionsController.find')
	Route.get('api/service-executions/:id', 'ServiceExecutionsController.find')
	Route.post('api/service-executions', 'ServiceExecutionsController.create')
	Route.put('api/service-executions/:id', 'ServiceExecutionsController.update')
	Route.delete('api/service-executions/:id', 'ServiceExecutionsController.delete')
}).middleware(['security'])