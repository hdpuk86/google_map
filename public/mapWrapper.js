var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
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

MapWrapper.prototype.moveToSydney = function(){
  var sydney = {lat: -33.861293, lng: 151.210821};
  this.googleMap.setCenter(sydney);
};

MapWrapper.prototype.findMe = function(){
  var geo = navigator.geolocation;
  var map = this.googleMap;
  geo.getCurrentPosition(function(position){
    map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
  })
}
