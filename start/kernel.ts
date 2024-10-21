import Server from '@ioc:Adonis/Core/Server'

/*
|--------------------------------------------------------------------------
| Global middleware
|--------------------------------------------------------------------------
| An array of global middleware that will be executed in the order they
| are defined for every HTTP request.
*/
Server.middleware.register([() => import('@ioc:Adonis/Core/BodyParser')])

/*
|--------------------------------------------------------------------------
| Named middleware
|--------------------------------------------------------------------------
| Named middleware are defined as key-value pairs. The value is the 
| namespace or middleware function and the key is the alias. Later you can
| use these aliases on individual routes. For example:
| { auth: () => import('App/Middleware/Auth') }
|
| Make sure to import the auth middleware from the Adonis Auth package
*/
Server.middleware.registerNamed({
  auth: () => import('App/Middleware/Auth'),
})
