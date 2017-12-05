var initialize = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 55.856946, lng: -4.244088};
  var interestingPlace = {lat: 55.847258, lng: -4.440114};
  var mainMap = new MapWrapper(container, center, 10);
  var codeClan = mainMap.addMarker(center);
  mainMap.addMarker(interestingPlace);
  mainMap.addClickEvent();

  var bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var codeClanInfo = "<h2>CodeClan, Glasgow</h2>";
  var infoWindow = new google.maps.InfoWindow({
    content: codeClanInfo
  })
  codeClan.addListener('click', function(){
    infoWindow.open(mainMap, codeClan);
  })

  var newCityButton = document.getElementById('move-to-sydney');
  newCityButton.addEventListener('click', mainMap.moveToSydney.bind(mainMap));

  var whereAmIButton = document.getElementById('find-me');
  whereAmIButton.addEventListener('click', mainMap.findMe.bind(mainMap));

};

window.addEventListener('load', initialize);
