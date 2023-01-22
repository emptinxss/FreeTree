<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\api\v1\ResponseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Filter\v1\UsersFilter;

class UserController extends ResponseController
{
    public function index(Request $request, User $user)
    {
        $pUsers = $user->where('public', true)->get();

        $filter = new UsersFilter();
        $filteredItem = $filter->transform($request);

        if (count($filteredItem) == 0) {
            if (count($pUsers) == 0) {
                return  $this->succResponse($pUsers, "There is no public user available at the moment.");
            }
            return $this->succResponse($pUsers, "Public Users Found Succesfully.");
        }
        $filterPublicUser = $user->where('public', true)->where($filteredItem)->get();
        if (count($filterPublicUser) == 0) {
            return $this->errResponse("There is no public user with that name.");
        }
        return $this->succResponse($filterPublicUser, "Filtered Users Found Succesfully.");
    }

    public function getUser()
    {
        /** @var User $user */
        $user = Auth::user();

        return $this->succResponse($user, "User  Found Succesfully.");
    }

    public function show($username, User $user)
    {
        $publicUser = $user->where('name', '=', $username)->where('public', true)->get();

        if (count($publicUser) == 0) {
            return  $this->errResponse("0 Users Found.", 404);
        }

        $filterUser = ['name' => $publicUser[0]->name, 'image' => $publicUser[0]->image, 'links' => $publicUser[0]->links];
        return $this->succResponse($filterUser, "Public User Found Succesfully.", 200);
    }

    public function update(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();

        $validateUser = $request->validate(
            [
                'name' => 'sometimes|string|max:255',
                'email' => 'sometimes|email|unique:users,email',
            ]
        );

        $user->update($validateUser);

        return $this->succResponse($user, "User Updated Succesfully.");
    }

    public function upload(Request $request)
    {
        /** @var User $user*/
        $user = Auth::user();

        $file = $request->hasFile('image');
        if ($file) {
            $newfile = $request->file('image');

            $request->validate([
                'image' => 'required|image|max:2048'
            ]);

            if ($newfile->isValid()) {
                $file_path = $newfile->store('images', 'public_uploads');

                $exiestedImage = $user->image;
                if ($exiestedImage != null) {
                    Storage::delete($exiestedImage);
                }


                $user->update(['image' => $file_path]);

                return $this->succResponse($user->image, "Image Updated Succesfully.");
            }
        }
        return  $this->errResponse("File Not Found.");
    }

    public function publicUser()
    {
        /** @var User $user */
        $user = Auth::user();

        if ($user->public == false) {
            $user->update(['public' => true]);
        } else {
            $user->update(['public' => false]);
        }

        return $this->succResponse($user, "Your user is now public.");
    }

    public function destroy()
    {
        /** @var User $user */
        $user = Auth::user();

        $user->delete();

        return $this->succResponse($user, "Account Deleted Successfully");
    }
}
