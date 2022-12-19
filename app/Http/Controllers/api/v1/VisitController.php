<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\Link;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    public function store(Request $request, Link $link)
    {
        return $link->visits()->create([
            'user_agent' => $request->userAgent()
        ]);
    }
}
