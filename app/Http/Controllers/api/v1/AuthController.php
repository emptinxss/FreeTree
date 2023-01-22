<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\api\v1\ResponseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends ResponseController
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function register(Request $request)
    {
        $validateUser = $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => [
                    'required',
                    'confirmed',
                    Password::min(8)->mixedCase()->numbers()->symbols()
                ]
            ]
        );
        try {
            $validateUser;

            $user = User::create([
                'name' => $validateUser['name'],
                'email' => $validateUser['email'],
                'password' => Hash::make($validateUser['password'])
            ]);

            $token = $user->createToken("API-TOKEN")->plainTextToken;

            return $this->succResponse(['user' => $user, 'token' => $token], "User Created Successfully");
        } catch (\Exception $e) {
            return  $this->errResponse($e->getMessage(), 400);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function login(Request $request)
    {
        try {
            $validateUser = $request->validate(
                [
                    'email' => 'required|email|string|exists:users,email',
                    'password' => 'required'
                ]
            );

            if (!Auth::attempt($validateUser)) {
                return  $this->errResponse("The provided credentials are not correct.", 400);
            }

            $user = User::where('email', $request->email)->first();
            $token =  $user->createToken("API-TOKEN")->plainTextToken;

            return $this->succResponse(['user' => $user, 'token' => $token], "User Logged In Successfully");
        } catch (\Exception $e) {
            return  $this->errResponse($e->getMessage(), 400);
        }
    }

    public function logout()
    {
        /** @var User $user */
        $user = Auth::user();
        $user->tokens()->delete();


        return $this->succResponse([], "User Logged Out Successfully");
    }
}
