import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/transport_executions', 'TransportExecutionsController.find')
	Route.get('api/transport_executions/:id', 'TransportExecutionsController.find')
	Route.post('api/transport_executions', 'TransportExecutionsController.create')
	Route.put('api/transport_executions/:id', 'TransportExecutionsController.update')
	Route.delete('api/transport_executions/:id', 'TransportExecutionsController.delete')
}).middleware(['security'])