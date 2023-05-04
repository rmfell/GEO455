$(document).ready(function() {
    $("#btn1").click(function(){
        $("#splasher1").show();
    });
    $("#btn2").click(function(){
        $("#splasher1").hide();
    });
    $("#btn3").click(function(){
        $("#splasher2").fadeIn();
    });
    $("#btn4").click(function(){
        $("#splasher2").fadeOut();
    });
});

var mymap = L.map('map', {
    center: [22.44525201361512, 3.0890863813627285],
            zoom: 3,
          });
    
 var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 2
 }).addTo(mymap);

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

//stadium points layer
var stadiums = L.geoJson(stadiums, {
   onEachFeature: function(feature, featureLayer) {
        featureLayer.bindTooltip(feature.properties.USER_stadium_name + "<br>Capacity: " + feature.properties.USER_stadium_capacity + "<br>City: " + feature.properties.USER_city_name, {permanent: false, direction: 'right'});
    }
}).addTo(mymap);

// function to size each icon proportionally based on number of stations
function iconByWins(feature){
  var calculatedSize = (feature.properties.Championships / 5) * 60;
            
  // create trophy icons
  return L.icon({
    iconUrl: 'img/WC_Trophy.png',
    iconSize: [calculatedSize, calculatedSize*2]
  });
}

var proptrophy = new L.geoJson(champions, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Country: <b>'+feature.properties.Name+ '</b></br>' +
                                   'Championships: '+feature.properties.Championships+ '</b></br>' + 'Years: '+feature.properties.Years+'</p>');
    },
    pointToLayer: function(feature, coordinates) {
      return L.marker(coordinates, {
          icon:iconByWins(feature)
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
    });
  }
}).addTo(mymap);

//Host nations layer start - choropleth
function style(feature) {
    return {
        fillColor: feature.properties.Color,
        weight: 0.3,
        fillOpacity: 1,
        borderColor:"#6E6E6E",
    };
}

var hostNations = L.geoJson(hosts, {
                    style: style,
                    }).addTo(mymap);

//Fifa Confederations layer - choropleth    
function style1(feature) {
    return {
        fillColor: feature.properties.Color,
        weight: 0.3,
        fillOpacity:1,
        borderColor:"#6E6E6E",
    };
}

var fifaCon = L.geoJson(fifa, {
                    style: style1,
                    }).addTo(mymap);


var overlays = {
    "Stadiums":stadiums,
    "Champions":proptrophy,
    "Hosts":hostNations,
    "Fifa Confederations":fifaCon
};

var basemaps = {
    "Grayscale":grayscale,
    "Streets":streets,
};

//Creating the menu
var layerControl = L.control.layers(basemaps, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults