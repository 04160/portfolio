<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script src="{{ url('js/app.js') }}"></script>
    </head>
    <body>
    ding dong
        <div id="app">
            <dingdong></dingdong>
            <example-component></example-component>
        </div>
    </body>
</html>
