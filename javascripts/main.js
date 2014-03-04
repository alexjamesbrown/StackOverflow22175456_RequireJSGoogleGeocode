requirejs.config({
    baseUrl: 'javascripts',
    waitSeconds: 200,
    paths: {
        'async': 'lib/require.async',
        'jquery': 'lib/jquery-1.7.2.min',
        'knockout': 'lib/knockout-3.0.0',
        'bootstrap': 'lib/bootstrap',
        'geocomplete': 'lib/jquery.geocomplete.min'
    },
    shim: {
        'jquery.bootstrap': ['jquery'],
        'geocomplete': ['jquery']
    }
});

define('gmaps', ['async!http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false'],
function () {
    return window.google.maps;
});

//this is in here as it's used on almost every page
require(['gmaps', 'jquery', 'bootstrap', 'geocomplete'], function () {
    $('#locationSearchTextBox').geocomplete()
	.bind('geocode:result', function (event, result) {
	    $('#locationSearchResultLat').val(result.geometry.location.lat());
	    $('#locationSearchResultLon').val(result.geometry.location.lng());
	});
});