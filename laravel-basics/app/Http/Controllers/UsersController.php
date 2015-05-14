<?php namespace App\Http\Controllers;

class UsersController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//TODO
	}

	public function login()
	{
		//$username= Input::get('mail');
		//return view('index');
		//return View::make('hello');
	}
	public function logout()
	{
		return view('index');
	}

}
