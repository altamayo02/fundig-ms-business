import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/administrators', 'AdministratorsController.find')
	Route.get('api/administrators/:id', 'AdministratorsController.find')
	Route.post('api/administrators', 'AdministratorsController.create')
	Route.put('api/administrators/:id', 'AdministratorsController.update')
	Route.delete('api/administrators/:id', 'AdministratorsController.delete')
}).middleware(['security'])