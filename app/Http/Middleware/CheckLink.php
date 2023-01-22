<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckLink
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $link = $request->route('link');

        if ($link->user_id != Auth::id()) {
            $response = [
                'success' => false,
                'status' => 401,
                'message' => "You can access only your link associated.",
           ];
            return response()->json($response);
        }
        return $next($request);
    }
}
