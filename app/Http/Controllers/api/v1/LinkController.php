<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\api\v1\ResponseController;
use App\Models\Link;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LinkController extends ResponseController
{
    public function __construct()
    {
        $this->middleware('checklink')->only('show', 'update', 'destroy');
    }
    public function index()
    {
        /** @var User $user */
        $user = Auth::user();
        $id = Auth::id();
        $linkId = $user->links()->where('user_id', $id)->get();
        if (count($linkId) == 0) {
            return  $this->succResponse([], "Links not found");
        }
        $links = $user->links()->where('user_id', $id)->withCount('visits')->with('latest_visit')->get();
        return $this->succResponse($links, "Links  Found Succesfully.");
    }
    public function store(Request $request)
    {
        try {
            $validateLink = $request->validate(
                [
                    'link_name' => 'required|string|max:255',
                    'link' => 'required|url'
                ]
            );
            /** @var User $user */
            $user = Auth::user();
            $link = $user->links()->create($validateLink);
            return $this->succResponse($link, "Link Added Successfully.");
        } catch (\Exception $e) {
            return  $this->errResponse($e->getMessage(), 400);
        }
    }
    public function show(Link $link)
    {
        $filterLink = $link->where('id', $link->id)->withCount('visits')->with('latest_visit')->get();
        return $this->succResponse($filterLink, "Link Found Succesfully.");
    }
    public function update(Request $request, Link $link)
    {
        $validateLink = $request->validate(
            [
                'link_name' => 'sometimes|string|max:255',
                'link' => 'sometimes|url'
            ]
        );

        $link->update($validateLink);
        return $this->succResponse(['link' => $link, 'index' => $request->index], "Link Updated Succesfully.");
    }
    public function destroy(Link $link)
    {
        $link->delete();
        return $this->succResponse([], "Link Deleted Succesfully.");
    }
}
