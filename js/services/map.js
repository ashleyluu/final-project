var MapService = function(){
  this.stylesArray = [
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#e9ebed"
              },
              {
                  "saturation": -78
              },
              {
                  "lightness": 67
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#ffffff"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 100
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#bbc0c4"
              },
              {
                  "saturation": -93
              },
              {
                  "lightness": 31
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "hue": "#ffffff"
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 100
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#e9ebed"
              },
              {
                  "saturation": -90
              },
              {
                  "lightness": -8
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "hue": "#e9ebed"
              },
              {
                  "saturation": 10
              },
              {
                  "lightness": 69
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "hue": "#2c2e33"
              },
              {
                  "saturation": 7
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "hue": "#bbc0c4"
              },
              {
                  "saturation": -93
              },
              {
                  "lightness": 31
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "hue": "#bbc0c4"
              },
              {
                  "saturation": -93
              },
              {
                  "lightness": -2
              }
          ]
      }
  ];
  this.myresults = [];
};

MapService.prototype.initialize = function() {
  var self = this;
  var mapCanvas = document.getElementById("map");
  var myLatLng = {lat: 34.051503, lng: -118.248660};
  var mapOptions = {
    center: myLatLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: this.stylesArray
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var service = new google.maps.places.PlacesService(map);

  return new Promise(function(resolve, reject){
    var hotspots = [
      {name:'Tacomiendo', place_id:'ChIJB8GQ7wu6woAR6Oq3TGm0QkE'},
      {name:'Espresso Profeta', place_id:'ChIJkydzloG8woARi25SOkVMPx4'},
      {name:'Mohawk Bend', place_id:'ChIJ_7FXrxDHwoARpqgRGbQdn0Q'},
      {name:'Rutts Hawaiian Cafe & Catering', place_id:'ChIJTTmBLGm6woARXEBO8oTxLfk'},
      {name:'Glorias Cafe', place_id:'ChIJSdQYRS66woARTbJSr73TdTY'}
    ];

    hotspots.forEach(function(result){
        var request = {
           placeId: result.place_id
         };

         service.getDetails(request, function (place, status) {

           if (status == google.maps.places.PlacesServiceStatus.OK) {
             result.details = place;
             self.myresults.push(result.details);
             var marker = new google.maps.Marker({
               map: map,
               position: place.geometry.location
             });

             google.maps.event.addListener(marker, 'click', function() {
               infowindow.setContent(place.name);
               infowindow.open(map, this);
             });
           }
         });

    });
    console.log(hotspots)
    resolve(hotspots);
  });


}
