import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/plan-services', 'PlanServicesController.find')
	Route.get('api/plan-services/:id', 'PlanServicesController.find')
	Route.post('api/plan-services', 'PlanServicesController.create')
	Route.put('api/plan-services/:id', 'PlanServicesController.update')
	Route.delete('api/plan-services/:id', 'PlanServicesController.delete')
}).middleware(['security'])