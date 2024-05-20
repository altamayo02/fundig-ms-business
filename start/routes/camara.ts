import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/camaras', 'CamarasController.find')
	Route.get('/camaras/:id', 'CamarasController.find')
	Route.post('/camaras', 'CamarasController.create')
}).middleware(['security'])