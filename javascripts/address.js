require(['./main'], function () {
    require(['knockout', 'lib/jquery.typing-0.2.0.min'], function (ko, BusinessDetailsViewModel) {
        //commented out as not relevant
        //var viewModel = new ViewModel();
        //ko.applyBindings(viewModel);

        var geocoder = new google.maps.Geocoder(); //doesn't always get loaded
        var map;

        $('#addressPostCode').typing({
            start: function (event, $elem) {
                //todo: clear map
            },
            stop: function (event, $elem) {
                //would come from address fields on form
                var address = '1 infinite loop cupertino ca 95014';

                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        map = new google.maps.Map(document.getElementById("map_canvas"), results[0].geometry.location);

                        var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location
                        });
                    }
                });
            },

            delay: 400
        });
    });
});