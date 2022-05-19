<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
		{
			$validUserData = $request->validate([
				'name' => 'required|string|max:255',
				'email' => 'required|string|email|max:255',
				'password' => 'required|min:8'
			]);

			$validUserData['password'] = Hash::make($validUserData['password']);

			$user = User::create($validUserData);

			return response()->json($user, Response::HTTP_CREATED);
		}


		public function login(Request $request)
		{
			if(!Auth::attempt($request->only('email', 'password'))){
				return response()->json([
					'message' => 'Invalid credentials'
				], Response::HTTP_UNAUTHORIZED);
			}

			$user = Auth::user();

			$token = $user->createToken('token')->plainTextToken;

			$cookie = cookie('jwt', $token, 60*24);

			return response()->json([
				'message' => 'Login successful'
			], Response::HTTP_OK)->withCookie($cookie);
		}

		public function user()
		{
			return response()->json(Auth::user(), Response::HTTP_OK);
		}

		public function logout(Request $request)
		{
			$cookie = Cookie::forget('jwt');
			$request->user()->currentAccessToken()->delete();

			return response()->json([
				'message' => 'Logged out successfully'
			])->withCookie($cookie);
		}
}
