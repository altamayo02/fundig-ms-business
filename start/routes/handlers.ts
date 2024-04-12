import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/handlers', 'HandlersController.find')
	Route.get('/handlers/:id', 'HandlersController.find')
	Route.post('/handlers', 'HandlersController.create')
	Route.put('/handlers/:id', 'HandlersController.update')
	Route.delete('/handlers/:id', 'HandlersController.delete')
})