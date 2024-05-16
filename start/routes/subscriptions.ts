import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
	Route.get('api/subscriptions', 'SubscriptionsController.find')
	Route.get('api/subscriptions/:id', 'SubscriptionsController.find')
	Route.post('api/subscriptions', 'SubscriptionsController.create')
	Route.put('api/subscriptions/:id', 'SubscriptionsController.update')
	Route.delete('api/subscriptions/:id', 'SubscriptionsController.delete')
}).middleware(['security'])