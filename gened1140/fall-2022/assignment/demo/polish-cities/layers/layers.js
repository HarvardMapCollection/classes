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
var format_polandstats_1 = new ol.format.GeoJSON();
var features_polandstats_1 = format_polandstats_1.readFeatures(json_polandstats_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polandstats_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polandstats_1.addFeatures(features_polandstats_1);
var lyr_polandstats_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polandstats_1, 
                style: style_polandstats_1,
                interactive: true,
                title: '<img src="styles/legend/polandstats_1.png" /> poland-stats'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_polandstats_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_polandstats_1];
lyr_polandstats_1.set('fieldAliases', {'CITY': 'City (historic name)', 'P0001': '% Polish speaking school children', 'P0003': 'Total number of votes in plebiscite', 'P0004': 'Votes for East Prussia', 'P0005': 'Votes for Poland', });
lyr_polandstats_1.set('fieldImages', {'CITY': 'TextEdit', 'P0001': 'TextEdit', 'P0003': 'Range', 'P0004': 'Range', 'P0005': 'Range', });
lyr_polandstats_1.set('fieldLabels', {'CITY': 'header label', 'P0001': 'header label', 'P0003': 'header label', 'P0004': 'header label', 'P0005': 'header label', });
lyr_polandstats_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});