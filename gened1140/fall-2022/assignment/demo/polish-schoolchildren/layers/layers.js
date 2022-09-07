var wms_layers = [];


        var lyr_PolandNationalities1919_0 = new ol.layer.Tile({
            'title': 'Poland Nationalities 1919',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://allmaps.xyz/maps/8d5cc5d1fec615d6/{z}/{x}/{y}.png'
            })
        });
var format_Allensteinplebisciteregion_1 = new ol.format.GeoJSON();
var features_Allensteinplebisciteregion_1 = format_Allensteinplebisciteregion_1.readFeatures(json_Allensteinplebisciteregion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allensteinplebisciteregion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allensteinplebisciteregion_1.addFeatures(features_Allensteinplebisciteregion_1);
var lyr_Allensteinplebisciteregion_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Allensteinplebisciteregion_1, 
                style: style_Allensteinplebisciteregion_1,
                interactive: false,
                title: '<img src="styles/legend/Allensteinplebisciteregion_1.png" /> Allenstein plebiscite region'
            });
var format_PercentageofPolishspeakingschoolchildren1911_2 = new ol.format.GeoJSON();
var features_PercentageofPolishspeakingschoolchildren1911_2 = format_PercentageofPolishspeakingschoolchildren1911_2.readFeatures(json_PercentageofPolishspeakingschoolchildren1911_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentageofPolishspeakingschoolchildren1911_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentageofPolishspeakingschoolchildren1911_2.addFeatures(features_PercentageofPolishspeakingschoolchildren1911_2);
var lyr_PercentageofPolishspeakingschoolchildren1911_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentageofPolishspeakingschoolchildren1911_2, 
                style: style_PercentageofPolishspeakingschoolchildren1911_2,
                interactive: false,
    title: 'Percentage of Polish-speaking schoolchildren, 1911<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_2_0.png" /> 22.1 - 22.1<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_2_1.png" /> 22.1 - 24.6<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_2_2.png" /> 24.6 - 70.2<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_2_3.png" /> 70.2 - 86<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_2_4.png" /> 86 - 90.7<br />'
        });

lyr_PolandNationalities1919_0.setVisible(true);lyr_Allensteinplebisciteregion_1.setVisible(true);lyr_PercentageofPolishspeakingschoolchildren1911_2.setVisible(true);
var layersList = [lyr_PolandNationalities1919_0,lyr_Allensteinplebisciteregion_1,lyr_PercentageofPolishspeakingschoolchildren1911_2];
lyr_Allensteinplebisciteregion_1.set('fieldAliases', {'label': 'label', });
lyr_PercentageofPolishspeakingschoolchildren1911_2.set('fieldAliases', {'city': 'city', 'pct': 'pct', });
lyr_Allensteinplebisciteregion_1.set('fieldImages', {'label': 'TextEdit', });
lyr_PercentageofPolishspeakingschoolchildren1911_2.set('fieldImages', {'city': 'TextEdit', 'pct': 'TextEdit', });
lyr_Allensteinplebisciteregion_1.set('fieldLabels', {'label': 'no label', });
lyr_PercentageofPolishspeakingschoolchildren1911_2.set('fieldLabels', {'city': 'no label', 'pct': 'no label', });
lyr_PercentageofPolishspeakingschoolchildren1911_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});