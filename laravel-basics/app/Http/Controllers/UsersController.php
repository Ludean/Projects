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
		$username= Input::get('name');
		//return view('index');
		return view::make('hello',$username);
	}
	public function logout()
	{
		return view('index');
	}

}
