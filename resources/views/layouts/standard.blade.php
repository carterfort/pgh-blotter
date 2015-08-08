<html>
<head>

    <title></title>

    <link rel="stylesheet" href="{{ elixir('css/blotter.css') }}" />
    <script src="{{ elixir('js/blotter.js') }}"></script>

    @yield('head')
</head>
<body>
<div class="container">
    @yield('main')
</div>

@yield('scripts')
</body>
</html>