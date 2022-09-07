var size = 0;
var placement = 'point';

var style_PercentageofPolishspeakingschoolchildren1911_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("pct");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 22.100000 && value <= 22.100000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
             fill: new ol.style.Fill({color: 'rgba(49,130,189,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22.100000 && value <= 24.600000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.5 + size,
             fill: new ol.style.Fill({color: 'rgba(49,130,189,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.600000 && value <= 70.200000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.0 + size,
             fill: new ol.style.Fill({color: 'rgba(49,130,189,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 70.200000 && value <= 86.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.5 + size,
             fill: new ol.style.Fill({color: 'rgba(49,130,189,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 86.000000 && value <= 90.700000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
             fill: new ol.style.Fill({color: 'rgba(49,130,189,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
