## Mapping Assignment Next Steps 

In the [first part of the mapping tutorial](https://harvardmapcollection.github.io/classes/gened1140/fall-2022/assignment/), we learned how to bring in two different kinds of GIS data into a desktop GIS program, QGIS. 

In this part of the tutorial, we will learn how to make any map you create in QGIS web-enabled. To do this, we will use a QGIS plugin called "QGIS2Web"

### Share the project as a webmap

1. In the very top QGIS program menu, select `Plugins → Manage and Install Plugins`. 
![Screenshot of Plugins menus](media/19.png)

2. Search for `QGIS2Web` and select `Install plugin`.

3. In the very top QGIS program menu, select `Web → QGIS2Web → Create a webmap`. 
![Screenshot of Web plugins menus](media/20.png)

4. Configure the `Layers and Groups` settings as follows:
![Layers and groups setting in QGIS2web plugin interface](media/21.png)
> - Make sure all of the layers are toggled on, including the basemap
- Make sure all of the layers are toggled on as `Visible`
- Toggle on `Popups` only for the `treaty-summary-1919` territories; make sure `Popups` are turned **off** for the other data layers. 
- Under `treaty-summary-1919` `Popup fields`, use the dropdowns to select `header label` for each field. 
*To learn more about configuring popups, you can follow this guide, [Web Mapping with QGIS2Web](http://www.qgistutorials.com/en/docs/web_mapping_with_qgis2web.html).*

5. Configure the `Appearance` settings as follows:
![Appearance settings in QGIS2web plugin interface](media/22.png)
> - Under `Add layers list` select `Expanded`
- Toggle on the checkbox next to `Show popups on hover`

6. Under the `Export` tab, click the ellipsis to the right of where it says `Export to folder`. Select a place to save your webmap to. Choose somewhere easy to find. Select open.
![Export settings in QGIS2web interface](media/23.png)


7. Select export. It might take a few moments to complete the export. 

8. When the `Progress` bar says `Success, exported to your location`, navigate to that location in your computer files. 

9. Double-click `index.html`. The interactive webmap you created will appear in your default web browser. You can use this map to explore the relationships between nationality and political boundary-making in Europe in 1919.



### Publish the interactive map (optional)

The interactive webmap you created currently lives only on your computer. To share the link publicly (as we did with [the demo](https://harvardmapcollection.github.io/classes/gened1140/fall-2022/assignment/demo/completed-map/)), you will need to follow a few more steps. 

The QGIS2Web plugin exports your webmap as a series of website files. They look like this.
![Screenshot of website files in the file explorer exported by QGIS2Web](media/1.png)

If you were to open `index.html` in a text editor, the file would look like this. It is website code: HTML, CSS, and JavaScript.
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="./resources/ol.css">
        <link rel="stylesheet" href="resources/fontawesome-all.min.css">
        <link rel="stylesheet" href="./resources/ol-layerswitcher.css">
        <link rel="stylesheet" href="./resources/qgis2web.css">
<style>
.search-layer {
  top: 65px;
  left: .5em;
}
.ol-touch .search-layer {
  top: 80px;
}
</style>
        <style>
        html, body {
            background-color: #ffffff;
        }
        .ol-control button {
            background-color: #f8f8f8 !important;
            color: #000000 !important;
            border-radius: 0px !important;
        }
        .ol-zoom, .geolocate, .gcd-gl-control .ol-control {
            background-color: rgba(255,255,255,.4) !important;
            padding: 3px !important;
        }
        .ol-scale-line {
            background: none !important;
        }
        .ol-scale-line-inner {
            border: 2px solid #f8f8f8 !important;
            border-top: none !important;
            background: rgba(255, 255, 255, 0.5) !important;
            color: black !important;
        }
        </style>
        <style>
        html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }
        </style>
        <title></title>
    </head>
    <body>
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>
        <script src="resources/qgis2web_expressions.js"></script>
        <script src="resources/polyfills.js"></script>
        <script src="./resources/functions.js"></script>
        <script src="./resources/ol.js"></script>
        <script src="./resources/ol-layerswitcher.js"></script>
        <script src="layers/TreatySummary1919_2.js"></script>
        <script src="styles/TreatySummary1919_2_style.js"></script>
        <script src="./layers/layers.js" type="text/javascript"></script> 
        <script src="./resources/Autolinker.min.js"></script>
        <script src="./resources/qgis2web.js"></script>
    </body>
</html>
```