import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('/plan-services', 'PlanServicesController.find')
	Route.get('/plan-services/:id', 'PlanServicesController.find')
	Route.post('/plan-services', 'PlanServicesController.create')
	Route.put('/plan-services/:id', 'PlanServicesController.update')
	Route.delete('/plan-services/:id', 'PlanServicesController.delete')
}).middleware(['security'])