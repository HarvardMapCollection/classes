var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_PolandNationalities1919_1 = new ol.layer.Tile({
            'title': 'Poland Nationalities 1919',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://allmaps.xyz/maps/8d5cc5d1fec615d6/{z}/{x}/{y}.png'
            })
        });
var format_TreatySummary1919_2 = new ol.format.GeoJSON();
var features_TreatySummary1919_2 = format_TreatySummary1919_2.readFeatures(json_TreatySummary1919_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreatySummary1919_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreatySummary1919_2.addFeatures(features_TreatySummary1919_2);
var lyr_TreatySummary1919_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TreatySummary1919_2, 
                style: style_TreatySummary1919_2,
                interactive: true,
    title: 'Treaty Summary 1919<br />\
    <img src="styles/legend/TreatySummary1919_2_0.png" /> desiring separation from Russia<br />\
    <img src="styles/legend/TreatySummary1919_2_1.png" /> disputed<br />\
    <img src="styles/legend/TreatySummary1919_2_2.png" /> free city<br />\
    <img src="styles/legend/TreatySummary1919_2_3.png" /> governed by League of Nations<br />\
    <img src="styles/legend/TreatySummary1919_2_4.png" /> not officially recognized<br />\
    <img src="styles/legend/TreatySummary1919_2_5.png" /> officially recognized<br />\
    <img src="styles/legend/TreatySummary1919_2_6.png" /> plebescite to decide<br />\
    <img src="styles/legend/TreatySummary1919_2_7.png" /> probably to Greece<br />\
    <img src="styles/legend/TreatySummary1919_2_8.png" /> proposed by U.S.<br />\
    <img src="styles/legend/TreatySummary1919_2_9.png" /> remaining Turkish Empire<br />\
    <img src="styles/legend/TreatySummary1919_2_10.png" /> to Italy<br />\
    <img src="styles/legend/TreatySummary1919_2_11.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_PolandNationalities1919_1.setVisible(true);lyr_TreatySummary1919_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PolandNationalities1919_1,lyr_TreatySummary1919_2];
lyr_TreatySummary1919_2.set('fieldAliases', {'id': 'id', 'map-transc': 'map-transc', 'map-source': 'map-source', 'status': 'status', });
lyr_TreatySummary1919_2.set('fieldImages', {'id': 'TextEdit', 'map-transc': 'TextEdit', 'map-source': 'TextEdit', 'status': 'TextEdit', });
lyr_TreatySummary1919_2.set('fieldLabels', {'id': 'header label', 'map-transc': 'header label', 'map-source': 'header label', 'status': 'header label', });
lyr_TreatySummary1919_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});