<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>FreeTree</title>
    <link rel="icon" type="image/x-icon" href="../../public/favicon.ico">
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    @vite('resources/css/app.css')
</head>

<body class="bg-chiaro dark:bg-black">
    <div id="app"></div>
    @vite('resources/js/app.js')
</body>

</html>
