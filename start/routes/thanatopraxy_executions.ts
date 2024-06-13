import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/thanatopraxy-executions', 'ThanatopraxyExecutionsController.find')
	Route.get('api/thanatopraxy-executions/:id', 'ThanatopraxyExecutionsController.find')
	Route.post('api/thanatopraxy-executions', 'ThanatopraxyExecutionsController.create')
	Route.put('api/thanatopraxy-executions/:id', 'ThanatopraxyExecutionsController.update')
	Route.delete('api/thanatopraxy-executions/:id', 'ThanatopraxyExecutionsController.delete')
}).middleware(['security'])