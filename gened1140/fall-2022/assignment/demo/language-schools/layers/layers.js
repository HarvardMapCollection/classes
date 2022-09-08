var wms_layers = [];


        var lyr_PolandNationalities1919_0 = new ol.layer.Tile({
            'title': 'Poland Nationalities, 1919',
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
var format_PercentageofinhabitantsofPolishmothertongue1912_2 = new ol.format.GeoJSON();
var features_PercentageofinhabitantsofPolishmothertongue1912_2 = format_PercentageofinhabitantsofPolishmothertongue1912_2.readFeatures(json_PercentageofinhabitantsofPolishmothertongue1912_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentageofinhabitantsofPolishmothertongue1912_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentageofinhabitantsofPolishmothertongue1912_2.addFeatures(features_PercentageofinhabitantsofPolishmothertongue1912_2);
var lyr_PercentageofinhabitantsofPolishmothertongue1912_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentageofinhabitantsofPolishmothertongue1912_2, 
                style: style_PercentageofinhabitantsofPolishmothertongue1912_2,
                interactive: true,
    title: 'Percentage of inhabitants of Polish mother tongue, 1912<br />\
    <img src="styles/legend/PercentageofinhabitantsofPolishmothertongue1912_2_0.png" /> 11.1 - 11.1<br />\
    <img src="styles/legend/PercentageofinhabitantsofPolishmothertongue1912_2_1.png" /> 11.1 - 14.4<br />\
    <img src="styles/legend/PercentageofinhabitantsofPolishmothertongue1912_2_2.png" /> 14.4 - 41.7<br />\
    <img src="styles/legend/PercentageofinhabitantsofPolishmothertongue1912_2_3.png" /> 41.7 - 64.4<br />\
    <img src="styles/legend/PercentageofinhabitantsofPolishmothertongue1912_2_4.png" /> 64.4 - 70.9<br />'
        });
var format_PercentageofPolishspeakingschoolchildren1911_3 = new ol.format.GeoJSON();
var features_PercentageofPolishspeakingschoolchildren1911_3 = format_PercentageofPolishspeakingschoolchildren1911_3.readFeatures(json_PercentageofPolishspeakingschoolchildren1911_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentageofPolishspeakingschoolchildren1911_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentageofPolishspeakingschoolchildren1911_3.addFeatures(features_PercentageofPolishspeakingschoolchildren1911_3);
var lyr_PercentageofPolishspeakingschoolchildren1911_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentageofPolishspeakingschoolchildren1911_3, 
                style: style_PercentageofPolishspeakingschoolchildren1911_3,
                interactive: true,
    title: 'Percentage of Polish-speaking school children, 1911<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_3_0.png" /> 22.1 - 22.1<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_3_1.png" /> 22.1 - 24.6<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_3_2.png" /> 24.6 - 70.2<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_3_3.png" /> 70.2 - 86<br />\
    <img src="styles/legend/PercentageofPolishspeakingschoolchildren1911_3_4.png" /> 86 - 90.7<br />'
        });

lyr_PolandNationalities1919_0.setVisible(true);lyr_Allensteinplebisciteregion_1.setVisible(true);lyr_PercentageofinhabitantsofPolishmothertongue1912_2.setVisible(true);lyr_PercentageofPolishspeakingschoolchildren1911_3.setVisible(false);
var layersList = [lyr_PolandNationalities1919_0,lyr_Allensteinplebisciteregion_1,lyr_PercentageofinhabitantsofPolishmothertongue1912_2,lyr_PercentageofPolishspeakingschoolchildren1911_3];
lyr_Allensteinplebisciteregion_1.set('fieldAliases', {'label': 'label', });
lyr_PercentageofinhabitantsofPolishmothertongue1912_2.set('fieldAliases', {'CITY': 'CITY', 'P0001': 'P0001', 'P0002': 'P0002', 'P0003': 'P0003', 'P0004': 'P0004', 'P0005': 'P0005', 'P0006': 'P0006', 'P0007': 'P0007', });
lyr_PercentageofPolishspeakingschoolchildren1911_3.set('fieldAliases', {'CITY': 'CITY', 'P0001': 'P0001', 'P0002': 'P0002', 'P0003': 'P0003', 'P0004': 'P0004', 'P0005': 'P0005', 'P0006': 'P0006', 'P0007': 'P0007', });
lyr_Allensteinplebisciteregion_1.set('fieldImages', {'label': 'TextEdit', });
lyr_PercentageofinhabitantsofPolishmothertongue1912_2.set('fieldImages', {'CITY': 'TextEdit', 'P0001': 'TextEdit', 'P0002': 'TextEdit', 'P0003': 'TextEdit', 'P0004': 'TextEdit', 'P0005': 'TextEdit', 'P0006': 'TextEdit', 'P0007': 'TextEdit', });
lyr_PercentageofPolishspeakingschoolchildren1911_3.set('fieldImages', {'CITY': 'TextEdit', 'P0001': 'TextEdit', 'P0002': 'TextEdit', 'P0003': 'TextEdit', 'P0004': 'TextEdit', 'P0005': 'TextEdit', 'P0006': 'TextEdit', 'P0007': 'TextEdit', });
lyr_Allensteinplebisciteregion_1.set('fieldLabels', {'label': 'no label', });
lyr_PercentageofinhabitantsofPolishmothertongue1912_2.set('fieldLabels', {'CITY': 'inline label', 'P0001': 'inline label', 'P0002': 'inline label', 'P0003': 'inline label', 'P0004': 'inline label', 'P0005': 'inline label', 'P0006': 'inline label', 'P0007': 'inline label', });
lyr_PercentageofPolishspeakingschoolchildren1911_3.set('fieldLabels', {'CITY': 'inline label', 'P0001': 'inline label', 'P0002': 'inline label', 'P0003': 'inline label', 'P0004': 'inline label', 'P0005': 'inline label', 'P0006': 'inline label', 'P0007': 'inline label', });
lyr_PercentageofPolishspeakingschoolchildren1911_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});