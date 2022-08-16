var wms_layers = [];

var format_TOWNSSURVEY_POLYM_0 = new ol.format.GeoJSON();
var features_TOWNSSURVEY_POLYM_0 = format_TOWNSSURVEY_POLYM_0.readFeatures(json_TOWNSSURVEY_POLYM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOWNSSURVEY_POLYM_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOWNSSURVEY_POLYM_0.addFeatures(features_TOWNSSURVEY_POLYM_0);
var lyr_TOWNSSURVEY_POLYM_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOWNSSURVEY_POLYM_0, 
                style: style_TOWNSSURVEY_POLYM_0,
                interactive: true,
                title: '<img src="styles/legend/TOWNSSURVEY_POLYM_0.png" /> TOWNSSURVEY_POLYM'
            });

lyr_TOWNSSURVEY_POLYM_0.setVisible(true);
var layersList = [lyr_TOWNSSURVEY_POLYM_0];
lyr_TOWNSSURVEY_POLYM_0.set('fieldAliases', {'TOWN': 'TOWN', 'POP1980': 'POP1980', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', });
lyr_TOWNSSURVEY_POLYM_0.set('fieldImages', {'TOWN': 'TextEdit', 'POP1980': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', });
lyr_TOWNSSURVEY_POLYM_0.set('fieldLabels', {'TOWN': 'header label', 'POP1980': 'header label', 'POP1990': 'header label', 'POP2000': 'header label', 'POP2010': 'header label', });
lyr_TOWNSSURVEY_POLYM_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});