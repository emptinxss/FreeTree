<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;


class ResponseController extends Controller
{
    protected function succResponse($result, $message, $status = 200)
    {
        $response = [
            'success' => true,
            'status' => $status,
            'message' => $message,
            'data'  => $result,

        ];
        return response()->json($response, $status);
    }

    protected function errResponse($error,  $status = 404)
    {
        $response = [
            'success' => false,
            'status' => $status,
            'message' => $error,
        ];
        return response()->json($response, $status);
    }
}
