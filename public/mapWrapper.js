var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function(coords, info){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
  });
  var infoWindow = new google.maps.InfoWindow({
    content: info
  })
  marker.addListener('click', function(){
    infoWindow.open(marker.map, marker);
  })
  this.markers.push(marker);
  return marker;
};

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()})
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
};

MapWrapper.prototype.moveToNew = function(coords){
  this.googleMap.setCenter(coords);
};

MapWrapper.prototype.findMe = function(){
  navigator.geolocation.getCurrentPosition(function(position){
    this.googleMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
  }.bind(this))
};
