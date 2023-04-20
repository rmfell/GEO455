var mymap = L.map('map', {
    center: [43.0672902307, -89.418123],
    zoom: 7,
    layer: grayscale,
});

var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
    maxZoom: 11,
    minZoom: 2,
}).addTo(mymap);

var counties = L.geoJson(poly, {
     style: function (feature) {
        return {fillOpacity: 0.7, weight: 2.5, color: feature.properties.color};
     },
   onEachFeature: function(feature, featureLayer) {
        featureLayer.bindTooltip(feature.properties.NAME, {permanent: false, direction: 'right'});
    }
}).addTo(mymap);

var migrationLayer = new L.migrationLayer({
    map: mymap,
    data: data,
    pulseRadius:30,
    pulseBorderWidth:3,
    arcWidth:1,
    arcLabel:false,
    arcLabelFont:'10px sans-serif',
    maxWidth:10
});

migrationLayer.addTo(mymap);

mymap.fitBounds(counties.getBounds());

function hide(){
    migrationLayer.hide();
}
function show(){
    migrationLayer.show();
}
function play(){
    migrationLayer.play();
}
function pause(){
    migrationLayer.pause();
}