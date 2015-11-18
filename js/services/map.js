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
      {
        name: "Tacomiendo",
        place_id: "ChIJB8GQ7wu6woAR6Oq3TGm0QkE",
        image: "http://farm5.static.flickr.com/4063/4388171640_736b529992.jpg",
        description: ""
      },
      {
        name: "Espresso Profeta",
        place_id: "ChIJkydzloG8woARi25SOkVMPx4",
        image: "http://fantastic-machine.com/penina/wp-content/uploads/2013/07/espresso-profeta_4650.jpg",
        description: ""
      },
      {
        name: "Mohawk Bend",
        place_id: "ChIJ_7FXrxDHwoARpqgRGbQdn0Q",
        image: "http://www.archpaper.com/uploads/image/mohawk_bend_01.jpg",
        description: ""
      },
      {
        name: "Rutt's Hawaiian Cafe & Catering",
        place_id: "ChIJTTmBLGm6woARXEBO8oTxLfk",
        image: "http://momsla.com/wp-content/uploads/2013/07/IMG_5886.jpg",
        description: ""
      },
      {
        name: "Pine & Crane",
        place_id: "ChIJLcT3DEjHwoARZa_z4-ThJCs",
        image: "http://images2.laweekly.com/imager/pine-and-crane-interior/u/original/4605769/img_2834.jpeg",
        description: ""
      },
      {
        name: "Go Get Em Tiger",
        place_id: "ChIJy_y8ese4woARDs78kURK5Gk",
        image: "https://media.timeout.com/images/100717481/617/347/image.jpg",
        description: ""
      },
      {
        name: "Gloria's Cafe",
        place_id: "ChIJSdQYRS66woARTbJSr73TdTY",
        image: "http://www.dinersdriveinsdiveslocations.com/glorias-cafe-california.jpg",
        description: ""
      }
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
    console.log(hotspots);
    resolve(hotspots);
  });
}
