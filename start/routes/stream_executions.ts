import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/stream_executions', 'StreamExecutionsController.find')
	Route.get('api/stream_executions/:id', 'StreamExecutionsController.find')
	Route.post('api/stream_executions', 'StreamExecutionsController.create')
	Route.put('api/stream_executions/:id', 'StreamExecutionsController.update')
	Route.delete('api/stream_executions/:id', 'StreamExecutionsController.delete')
}).middleware(['security'])