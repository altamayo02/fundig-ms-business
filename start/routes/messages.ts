import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/messages', 'MessagesController.find')
	Route.get('/messages/:id', 'MessagesController.find')
	Route.post('/messages', 'MessagesController.create')
	Route.put('/messages/:id', 'MessagesController.update')
	Route.delete('/messages/:id', 'MessagesController.delete')
}).middleware(['security'])