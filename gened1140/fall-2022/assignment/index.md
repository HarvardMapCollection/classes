# Mapping Assignment

## What you will learn (and some GIS basics)

In this mapping assignment, you will gain familiarity with the following useful GIS competencies.

### What is GIS?

GIS stands for **G**eographic **I**nformation **S**ystems. GIS helps us study *where*. It is a combination of data sources, software, and methods which allow us to do so. When we say **GIS data**, we mean datasets which have some spatial dimension. These datasets are created in special formats which can be used with special software designed to make maps. The datasets, the software, and the methods all fall under the umbrella of "GIS".

### Common GIS data types

To make your own map someday, you'll need to be comfortable with the two main forms of GIS data: **vector** and **raster** data.

![Chart showing vector data which is points, lines and polygons..](media/1.jpeg)

**Vector data** consists of **points, lines and polygons**. 

![Screenshot of QGIS interface with point dataset of trees loaded in and appearing on the map](media/3.png)
_GIS vector dataset showing [historic old growth trees in Washington State](https://geo.wa.gov/maps/61db62e6e6864b579e0e36c005e94e71/about) loaded into QGIS, a map making software._

Pictured above is a **points** dataset showing historic old growth trees in Washington State.

When you open the data table, every row in the table represents one of the point features. In this example, that means one row = one tree. Every column in the table is a piece of information about that feature, or tree. For example, in this dataset, we can see there is a column for the age of the tree, and recommendations for caring for that type of tree.

![Screenshot of QGIS interface showing the back end of the dataset, a table with rows and columns about each tree ](media/2.png)
_[Historic old growth trees in Washington State](https://geo.wa.gov/maps/61db62e6e6864b579e0e36c005e94e71/about) dataset in QGIS table view._

GIS software allows us to take tables of features like this and display them visually as a map. 

Here is an example of a **line** dataset of all of the major streams in Massachusetts displayed visually as a map.

![Map of all the major streams in Massachusetts](media/4.png)

Examples of **polygon** vector datasets could be ponds or bodies of water, or political or administrative units. Census data showing counties or census tracts would be polygon data. 

Here is an example of a polygon dataset showing towns in Massachusetts. If you opened the table view of this dataset, each row would represent one Massachusetts town. Each column would contain information about the town. In this case, the attributes include the name of the town, and population statistics from each census year.


Hover over the towns to display **attributes** (column information) for each town/feature/polygon.

<iframe title="Example of polygon data showing towns in Massachussetts you can hover over to expose the column information" src="https://harvardmapcollection.github.io/classes/gened1140/fall-2022/assignment/demo/polygon-data/" width="100%" height="500px"></iframe>

When you are making a GIS map, you can download vector data or create your own. Vector data will usually come in **shapefile** format. The file extension is **.shp**. Some example datasets you could download include:
- road networks (line)
- census data (polygon)
- points of interest like schools, or churches (point)

You can also create your own vector datasets using GIS software, by manually drawing or tracing points, lines, or polygons in a mapping interface, and then typing in any attribute or column information you want to pop up or be visualized from each feature.

The Harvard Map Collection will work with you to find the datasets you need to download for your topic of study, or teach you how to create your own if you think there might not be GIS data readily available.

### Working with georeferenced maps (raster data).

Another common type of GIS data is **raster** data. Instead of points, lines, or polygons, raster data is in the format of image pixels.

![Chart explaining raster data, showing the earth broken up into gridded pixels](media/5.png)

When you use Google maps satellite view, you are viewing raster data. The satellite imagery exists in pixels, and it is "spatial data", meaning the computer can tell *where* on the earth the imagery pertains to.

At the Map Collection, we use raster data a lot, because we have so many historical maps, which are in an image format such as `.jpeg` or `.tiff`. We can line these images up to correspond with a spatial location. To do this, we need to perform a process called **georeferencing**.

Georeferencing is the process of lining up an image so it overlays onto modern geography. There are many historical maps created before the time of computers which contain useful information. You can work with that information by georeferencing.

In the example below, you can explore georeferenced old maps of Harvard Square from 1871. In 1871, Felipe's used to be a furniture repair shop! You can scroll to zoom in and out and drag the map around to see more areas. This historical map layer is an example of raster data.

<iframe width="400" height="550" title="Atlascope app zoomed in to Felipes in Harvard Square" src="https://atlascope.leventhalmap.org/#view:embed$base:000$overlay:39999059015436$zoom:19.87$center:-7917105.72511056,5217102.087088008$mode:glass$pos:192"></iframe>
_[Atlascope](https://atlascope.leventhalmap.org/), a tool for exploring historical atlases of Boston._

After this tutorial, you will be able to work with different kinds of GIS data. Then, you will be ready to learn how to analyze or visualize information sources that speak to the *where* of a situation.


## What you will need

In order to work on this assignment, you will need the free, open-source desktop software QGIS. This tutorial will teach you how to download it, and use some of its most useful features. 

There are many software options for manipulating, analyzing, and visualizing geospatial data. QGIS is a favorite, as it is free, lightweight, and doesn't require a login or license. If you learn QGIS now, you'll be able to use it and all of its functionalities long after you graduate.

To download QGIS, visit the [QGIS download page](https://www.qgis.org/en/site/forusers/download.html). Select the `long-term release (most stable)`.

Install the program. 

### Size constraints
The QGIS application is about 3.2GB. If you don't have enough space on your computer, the following places in the library have computers you can use:
- [The Lamont Multimedia Lab](https://library.harvard.edu/services-tools/lamont-multimedia-lab) in B-level of Lamont (drop in hours until 10pm daily)
- [The Map Collection](https://library.harvard.edu/libraries/harvard-map-collection) in Pusey Library (you can drop by between 10-4:30pm M-F, but to assure a time slot, you can email us at [maps@harvard.edu](mailto:maps@harvard.edu))

### Mac users
If you get an error message that Apple can’t check the app for malicious software, right-click the application and select `Open`.


## Tutorial overview

In this tutorial we are going to leverage GIS tools and data to look at demographics in Europe around the time of WWI. At the end, you'll have maps and datasets which will help with your midterm. At any point, you can skip ahead to the [maps and datasets](https://harvardmapcollection.github.io/classes/gened1140/fall-2022/assignment/completed). 


We are going to be working with three datasets.

### GIS dataset #1 
A [map showing nationalities in Poland](https://digitalcollections.library.harvard.edu/catalog/990152910700203941) in 1919. We have already georeferenced the map, so it lines up nicely with our other data.
![GIF showing the 1919 map superimposed over a modern map of Europe](media/poland-opacity.gif)
![Map key of the historic map showing the different ethnicities breakdown](media/legend.gif)
*Here is the map legend showing what we can learn from the map -- the breakdown of nationalities in Poland at the time the map was made, in 1919.*

### GIS Dataset #2 
A polygon dataset representing the extent of the Allenstein plebiscite region.
![An outline around the plebiscite region in Poland](media/2-2.png)
*We can use this layer to understand the extent of the region we are studying.*

### GIS Dataset #3 
A point dataset containing statistical information about Polish cities in the 1910s, including spoken languages, and the plebiscite vote results, city by city.
<iframe title="Interactive map of the Polish cities statistical data. Hovering over each city reveals information about the city." src="https://harvardmapcollection.github.io/classes/gened1140/fall-2022/assignment/demo/polish-cities/" width="100%" height="600px"></iframe>
*Hover over each city to display the statistics we will be working with.*

> We created the Polish cities dataset using a table found in *The American Political Science Review*. Here is a link to the _[HOLLIS record](https://hollis.harvard.edu/permalink/f/1mdq5o5/TN_cdi_crossref_primary_10_2307_1947652)_ for the article from which the cities data is derived.
![screenshot of a table from an online journal article showing stats for Polish cities](media/book-table.png)
*Table we used to create the GIS data for Polish cities.*


## Tutorial

If you are having trouble with this tutorial, please don't hesitate to reach out to [maps@harvard.edu](mailto:maps@harvard.edu).

### Adding the raster dataset to the GIS project

1. If you haven't already, [download and install QGIS](https://harvardmapcollection.github.io/tutorials/qgis/download/).

2. Open QGIS.

3. Open a `New Empty Project`.

4. In the left-hand `Browser` menu, find the dropdown titled `XYZ tiles`.
![Screenshot of XYZ tiles in the QGIS browser menu interface](media/6.png)

5. Expand the `XYZ tiles` dropown and double-click `OpenStreetMap` to add a basemap to your project. The basemap exists in the background of the project to give us a reference while we are working.

6. In the banner that runs across the top of the QGIS project, find the `Zoom in` button. Select this button. 
![Screenshot of the QGIS interface showing the top banner with the Zoom in button highlighted](media/7.png)

7. Click and hold to drag a square around Europe. You can also scroll in and out on your mouse to Zoom in and out. To pan around the map without zooming, engage the `Pan map` button, which looks like a hand.
![GIF of zooming and panning around the QGIS map document](media/zoompan.gif)

8. In the left-hand browser menu, right-click `XYZ Tiles` and select `New Connection`. 
![Screenshot of New XYZ tile connection menu option in QGIS](media/9.png)
> We are adding the map of Poland nationalities. This map has already been georeferenced. Georeferencing maps like this one allows us to overlay it onto other maps and directly compare maps and data of the same area. The map is currently hosted online as a streaming data layer. We can bring it into our project by specifying in QGIS what the layer URL is.

9. In the XYZ Connection wizard, title the new layer `Poland Nationalities 1919`.

10. Copy and paste the following link into where it asks for a URL: `https://allmaps.xyz/maps/8d5cc5d1fec615d6/{z}/{x}/{y}.png`
![Screenshot of XYZ Connection wizard in QGIS](media/25.png)
> To learn how we georeferenced this [map from our Digital Collections](https://iiif.lib.harvard.edu/manifests/view/ids:445002895), you can follow [this tutorial](https://harvardmapcollection.github.io/tutorials/allmaps/georeference/).  

11. Accept all other defaults. Select `OK`.

12. Make sure the dropdown caret next to `XYZ Tiles` in the browser menu is expanded. To add the Poland Nationalities 1919 map layer to your QGIS project, double-click on `Poland Nationalities 1919`. You should be able to see the old map overlaid on the basemap now. 
> It might take a few moments to render. As you zoom in and pan around, you are querying the map data at different zoom levels. The resolution should improve as it finishes loading.


### Adding the vector datasets to the GIS project


1. Download [the zipped data from this Google Drive link](https://drive.google.com/file/d/1oUeFFey5rcTN6tnFdbKZL0uxNtSUVanX/view?usp=sharing).

2. Uncompress the zipped data folder. If you need help unzipping folders, follow [the steps on this website](https://www.sweetwater.com/sweetcare/articles/how-to-zip-and-unzip-files/).

3. In the very top QGIS program menu, select `Layer → Add Layer → Add Vector Layer`. 
![Screenshot of Add Vector Layer menu option in QGIS](media/13.png)

4. In the Data Source Manager, Under `Source`, click the ellipsis next to `Vector dataset(s)`. This will open your computer's files. Navigate to where you downloaded and unzipped the project data. In the `allenstein-region` folder, select the file `allenstein-region.shp`.
![GIF of navigating to find the right shapefile file](media/add-shp.gif)

5. Select `Open`.

6. Select `Add` and `Close`. The `allenstein-region` layer should now appear in your layer list, and on your map.

6. Follow the same prompts to add the Polish cities statistical data. In the Data Source Manager, Under `Source`, click the ellipsis next to `Vector dataset(s)`. This will open your computer's files. Navigate to where you downloaded and unzipped the project data. In the `poland-stats` folder, select the file `poland-stats.shp`.

5. Select `Open`.

6. Select `Add` and `Close`. The `poland-stats` layer should now appear in your layer list, and on your map. Your map document should look something like this. 
![Screenshot of the QGIS document showing all three layers](media/2-5.png)
*All three layers, the georeferenced map, the allenstein region, and the polish cities statistics.*

7. Let's make this data a little easier to work with. Double-click the `allenstein-region` layer in the `Layers Panel`. This will open up the `Layer Properties` for the `allenstein-region` shapefile. 
![GIF of double-clicking the layer in the layer list to open the properties](media/layer-props1.gif)

8. Select the `Symbology` tab from the Layer Properties menu.
![Screenshot of the Symbology layer properties in QGIS](media/2-6.png)

9. We want to change the symbology on the plebiscite region layer so that instead of QGIS symbolizing the region as a solid shape, it is just a border around the region. Select where it says `Simple Fill`.
![GIF of clicking on the Simple Fill button in the Symbology Properties Menu](media/simple-fill.gif)

10. In the `Fill Style` drop-down, change `Solid` to `No Brush`.
![Screenshot of Fill style symbology options in QGIS](media/no-brush.gif)

11. Let's change the border outline, or "Stroke", to a color and width that appears a bit more prominently against the detail of the bold colors on the historic map. Click the colorful bar which appears to the right of the `Stroke Color` option to open the `Select Stroke Color` menu.
![GIF of clicking on the select stroke color menu](media/select-fill-color.gif)

12. We're going to use a light greenish color which will pop against the map background. Paste the color code for this color into where it says `HTML notation`. The value to paste in is `#e0f3db`
![GIF of pasting in the correct color code](media/color-code.gif)
> To learn more about color codes, check out [htmlcolorcodes.com](https://htmlcolorcodes.com/).

13. Increase the `Stroke Width` to `1.0`.
![Screenshot of the Stroke width symbology options in QGIS](media/stroke-width.gif)

14. Select `OK`

15. This works better for us, because now we can see the extent of the plebiscite region, but can also "peer under" the layer to see the details of the historic map. Your map should look something like this.
![Screenshot of map with the allenstein region layer's symbology adjusted](media/2-7.png)

16. Now let's label the Allenstein region. Double-click the `allenstein-region` layer in the `Layers Panel` again, to open up the `Layer Properties`.
![GIF of double-clicking the layer in the layer list to open the properties](media/layer-props2.gif) 

17. Select the `Labels` tab in the `Layer Properties` menu.
![Screenshot of the Label tab in the Layer Properties menu](media/2-8.png)

18. Select the drop-down that says `No Labels`, and change it to `Single Labels`.
![GIF of changing no labels to single labels in the label interface](media/single-labels.gif)

19. Select the `Text` tab, and change the size of the label to `14.0`.
![GIF of changing the text size](media/text-size.gif)

20. Click the color bar next to `Color` and paste the same `#e0f3db` color code into the `HTML notation` field. The color may appear in the `Recent Colors` window, in which case, you can click on that instead of copy pasting. 
![GIF of changing the text color](media/text-color.gif)

21. Let's add a drop shadow to make the label stand out better against the map background. Select the label tab called `Shadow`, and toggle on `Draw drop shadow`.
![GIF of toggling on the drop shadow](media/drop-shadow.gif)

22. Select `OK`. Your map should now look like this, with the Allenstein region outlined and labeled. 
![Screenshot of the map with the allenstein region labeled](media/2-10.png)

23. The points representing the Polish cities in the `poland-stats` layer are also quite small and difficult to see. Let's make them bigger. Double-click the `poland-stats` layer in the `Layers Panel` to open the `Layer Properties`. 

24. Select the `Symbology` tab.

25. Select where it says `Simple Marker`.
![GIF of selecting simple marker from the Layer Properties symbology tab](media/simple-marker.gif)

25. In the text box next to `Size`, change the marker size to `6.0`.
![GIF of changing the marker size from 2.0 to 6.0 in the QGIS layer properties symbology interface](media/marker-size.gif)

26. Select `OK`. Your map should look something like this.
![Screenshot of the current map state, showing the cities layer with larger points](media/2-11.png)

### Exploring the Polish cities dataset

1. Now, let's familiarize ourselves with the Polish cities statistical data. Right-click on the `poland-stats` layer in the `Layer Panel` and select `Open Attribute Table`. 
![GIF of right-clicking the layer in the layer list to open attribute table](media/open-attribute-table.gif)

2. 

### Experimenting with different map symbology

### Designing a shareable map “for print” 