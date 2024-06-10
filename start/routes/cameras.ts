import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/cameras', 'CamerasController.find')
	Route.get('api/cameras/:id', 'CamerasController.find')
	Route.post('api/cameras', 'CamerasController.create')
	Route.put('api/cameras/:id', 'CamerasController.update')
	Route.delete('api/cameras/:id', 'CamerasController.delete')
}).middleware(['security'])