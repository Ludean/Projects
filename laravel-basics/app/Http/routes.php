<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*Route::get('/', 'WelcomeController@index');*/
Route::get('/', 'WelcomeController@index');
Route::get('home', 'HomeController@index');
/*Route::get('test', function()
	{
		return View::make('test',array('name'=>'Luis'));
	});
*/
Route::get('/test','testcontroller@index');
Route::get('/db',function()
	{
      return DB::select('select database();');
	});
Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
