import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/messages', 'MessagesController.find')
	Route.get('api/messages/:id', 'MessagesController.find')
	Route.post('api/messages', 'MessagesController.create')
	Route.put('api/messages/:id', 'MessagesController.update')
	Route.delete('api/messages/:id', 'MessagesController.delete')
}).middleware(['security'])