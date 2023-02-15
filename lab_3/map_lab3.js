var mymap = L.map("map").setView([36.204836, 138.252926], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15, 10]
});

var tokyo = L.marker([35.676716, 139.770712], {icon: myIcon1}).bindPopup("<b>Tokyo")
    .addTo(mymap);
var kyoto = L.marker([35.004902, 135.773764], {icon: myIcon1}).bindPopup("<b>Kyoto")
    .addTo(mymap);
var osaka = L.marker([34.689957, 135.506081], {icon: myIcon1}).bindPopup("<b>Osaka")
    .addTo(mymap);
var fukushima = L.marker([37.758164, 140.481590], {icon: myIcon1}).bindPopup("<b>Fukushima")
    .addTo(mymap);
var niigata = L.marker([37.914288, 139.050368], {icon: myIcon1}).bindPopup("<b>Niigata")
    .addTo(mymap);
var fukuoka = L.marker([33.587801, 130.407002], {icon: myIcon1}).bindPopup("<b>Fukuoka")
    .addTo(mymap);
var hiroshima = L.marker([34.383757, 132.459846], {icon: myIcon1}).bindPopup("<b>Hiroshima")
    .addTo(mymap);
var nagasaki = L.marker([32.749778, 129.880569], {icon: myIcon1}).bindPopup("<b>Nagasaki")
    .addTo(mymap);
var aomori = L.marker([40.815643, 140.759428], {icon: myIcon1}).bindPopup("<b>Aomori")
    .addTo(mymap);
var izumo = L.marker([35.363898, 132.757360], {icon: myIcon1}).bindPopup("<b>Izumo")
    .addTo(mymap);
var mountFuji = L.marker([35.363053, 138.731577], {icon: myIcon1}).bindPopup("<b>Mount Fuji")
    .addTo(mymap);
var asoKuju = L.marker([32.907229, 131.079038], {icon: myIcon1}).bindPopup("<b>Aso-Kuju")
    .addTo(mymap);
