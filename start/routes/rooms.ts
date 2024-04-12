import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/rooms', 'RoomsController.find')
	Route.get('/rooms/:id', 'RoomsController.find')
	Route.post('/rooms', 'RoomsController.create')
	Route.put('/rooms/:id', 'RoomsController.update')
	Route.delete('/rooms/:id', 'RoomsController.delete')
})