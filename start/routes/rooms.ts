import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/rooms', 'RoomsController.find')
	Route.get('api/rooms/:id', 'RoomsController.find')
	Route.post('api/rooms', 'RoomsController.create')
	Route.put('api/rooms/:id', 'RoomsController.update')
	Route.delete('api/rooms/:id', 'RoomsController.delete')
}).middleware(['security'])