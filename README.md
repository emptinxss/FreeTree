# FreeTree

## Table of contents

-   [Overview](#overview)
    -   [Start2impact](#Start2impact)
    -   [Project](#Project)
    -   [Built with](#built-with)
-   [Getting started](#Getting-started)
-   [Usage](#Usage)
    -   [Register](#Register)
    -   [Login](#Log-in)
    -   [Logout](#Log-out)
    -   [Users](#Users)
    -   [Links](#Links)
    -   [Filter](#Filter)
-   [Links](#Links)
-   [License](#License)

## Overview

### Start2impact

This is the final project from the **full stack Start2Impact's** guide.
You can find all the info [here](https://www.start2impact.it/percorsi/) about start2impact courses.

### Project

This is the creation, both of the front end and the back end, of an app that can manage calls to a RESTful API, developed by me and which implements a login/logout and user registration system.
The service offered by the created site was inspired by the famous linktree.

When you create your account there is no need to set a valid email adress because there is no email verification (also for the privacy).
I suggest to use a dummy email adress like: **test@example.com**

### Built with

-   [Laravel](https://laravel.com/)
-   [Vite](https://vitejs.dev/)
-   [Vuejs](https://vuejs.org/)
-   [Axios](https://axios-http.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Headlessui](https://headlessui.com/)
-   [Formkit](https://formkit.com/)
-   [Heroicons](https://heroicons.com/)
-   [Momentjs](https://momentjs.com/timezone/)
-   [SweetAlert2](https://sweetalert2.github.io/)
-   [Vuex](https://vuex.vuejs.org/)
-   [Vue-router](https://router.vuejs.org/)

## Getting Started

You can try the front end [here]()

You will find the REST API at []()then use the endpoints below

## Usage

Raccomended tool to try the requests. [Postman](https://www.postman.com/)

For this request you need the authorization token that can be found in the response of the API when you perform login or register. You can also find that in the front end in the settings tab under token.
Make sure to have Bearer token when you make a request as the example below:

REST API endpoints:

### Register

No Authorization needed

**POST** /api/v1/register

### Login

No Authorization needed

**POST** /api/v1/register

### Logout

Authorization needed (token)

**POST** /api/v1/register

### Users

-   **GET** /api/v1/dashboard - Get all the public users
-   **GET** /api/v1/user/data - Get the data of your account
-   **GET** /api/v1/{username} - Get the public user page (if the user is public) \*no authorization needed
-   **PUT** /api/v1/settings/edit - Edit your name or email
-   **POST** /api/v1/settings/edit/upload/image - Edit your profile picture
-   **POST** /api/v1/settings/public - Set your user public or private (default is private)
-   **DELETE** /api/v1/settings - Delete your account

> **Note**
> If you set your user public it will be visible to anyone, to all the FreeTree users in the dashboard page and even to doesn't have an account if they have the URL of your public user page.

### Links

-   **GET** /api/v1/mylinks - Get all the links you created
-   **GET** /api/v1/mylinks/{linkID} - Get a signle link associated with your account
-   **POST** /api/v1/mylinks/new - Create a new link
-   **POST** /api/v1/mylinks/{linkID} - Edit an existing link
-   **DELETE** /api/v1/mylinks/{linkID} - Delete a link

### Filter

You can filter by **name** with [eq] that rappresent '=', in the dashboard section endpoint.

**GET** request : filter public users by name that must be euqal to the value: [eq] => '='

```sh
   /api/v1/dashboard?name[eq]=mario
```

## Links

-   Test my app on []()
-   Try online API [Here]() (POST media request available only in local)
-   My other projects on [Github](https://github.com/emptinxss)

## License

Distributed under the MIT License. See `LICENSE` for more information.