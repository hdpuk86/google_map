var initialize = function(){
  //get container
  var container = document.getElementById('main-map');

  //add coord
  var center = {lat: 55.856946, lng: -4.244088};
  var interestingPlace = {lat: 55.847258, lng: -4.440114};

  //set map
  var mainMap = new MapWrapper(container, center, 10);

  //add map markers
  var codeClan = mainMap.addMarker(center, "<h3>CodeClan</h3>");
  var paisley = mainMap.addMarker(interestingPlace, "<h3>Paisley</h3>");

  //add marker on click
  mainMap.addClickEvent();

  //make markers bounce on button click
  var bounceButton = document.getElementById('button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  //add button to move map view to sydney
  var newCityButton = document.getElementById('move-to-sydney');
  newCityButton.addEventListener('click', mainMap.moveToSydney.bind(mainMap));

  //add button to move map to user location
  var whereAmIButton = document.getElementById('find-me');
  whereAmIButton.addEventListener('click', mainMap.findMe.bind(mainMap));

};

window.addEventListener('load', initialize);
