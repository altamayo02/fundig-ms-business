import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/users', 'UsersController.find')
	Route.get('api/users/:id', 'UsersController.find')
	Route.get('api/users/mongo/:id', 'UsersController.findByMongoId')
	Route.post('api/users/create', 'UsersController.create')
	Route.put('api/users/:id', 'UsersController.update')
	Route.delete('api/users/:id', 'UsersController.delete')
}).middleware(['security'])