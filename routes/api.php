<?php

use App\Http\Controllers\api\v1\AuthController;
use App\Http\Controllers\api\v1\LinkController;
use App\Http\Controllers\api\v1\UserController;
use App\Http\Controllers\api\v1\VisitController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    //LOGIN & REGISTER
    Route::post('v1/login', 'login');
    Route::post('v1/register', 'register');
});


Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    //LINK
    Route::get('/links', [LinkController::class, 'index']);
    Route::post('/links/new', [LinkController::class, 'store']);
    Route::get('/links/{link}', [LinkController::class, 'show']);
    Route::post('/links/{link}', [LinkController::class, 'update']);
    Route::delete('/links/{link}', [LinkController::class, 'destroy']);

    //USER SETTINGS
    Route::get('/dashboard', [UserController::class, 'index']);
    Route::get('/users/data', [UserController::class, 'getUser']);
    Route::put('/users/settings/edit', [UserController::class, 'update']);
    Route::post('/users/settings/edit/upload/image', [UserController::class, 'upload']);
    Route::post('/users/settings/public', [UserController::class, 'publicUser']);
    Route::delete('/users/settings', [UserController::class, 'destroy']);

    //LOGOUT
    Route::post('/logout', [AuthController::class, 'logout']);
});

//VISIT
Route::post('/v1/visit/{link}', [VisitController::class, 'store']);

//USER PUBLIC
Route::get('/v1/users/{username}', [UserController::class, 'show']);
