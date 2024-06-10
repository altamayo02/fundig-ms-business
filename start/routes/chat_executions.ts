import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/chat-executions', 'ChatExecutionsController.find')
	Route.get('api/chat-executions/:id', 'ChatExecutionsController.find')
	Route.post('api/chat-executions', 'ChatExecutionsController.create')
	Route.put('api/chat-executions/:id', 'ChatExecutionsController.update')
	Route.delete('api/chat-executions/:id', 'ChatExecutionsController.delete')
}).middleware(['security'])