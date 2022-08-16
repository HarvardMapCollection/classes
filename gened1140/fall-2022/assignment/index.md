# Mapping Assignment

## What you will learn (and some GIS basics)

In this mapping assignment, you will gain familiarity with the following useful GIS competencies:

1. Common GIS data types.

To make your own map someday, you'll need to be comfortable with the two main forms of GIS data: **vector** and **raster** data.

![Chart showing vector data which is points, lines and polygons..](media/1.jpeg)

**Vector data**, pictured above, consists of **points, lines and polygons**. When you download a vector dataset (usually it comes in **shapefile** format, **.shp**), the data table will appear similarly to any other spreadsheet you have worked with in the past, with columns and rows. With GIS datasets, however, every row in the table is one **feature** on the map. For instance, in a **point shapefile** about post offices in the United States, every row in the table would be one post office. Every column would contain some piece of information about that post office (hours of operation, year established, etc.).

![Screenshot of QGIS interface showing the back end of the dataset, a table with rows and columns about each tree ](media/2.png)
_GIS vector dataset in shapefile format showing [historic old growth trees in Washington State](https://geo.wa.gov/maps/61db62e6e6864b579e0e36c005e94e71/about) in QGIS table view._

For instance, when you open the table view of this GIS shapefile showing historic old growth trees in Washington State, the data is organized so that every row is one **point** (one tree), and every column is some information about that tree (how old it is, recommendations for caring for it, etc.)

In addition to qualitative or quantitative **attributes** about each tree, there are also columns that provide some geospatial information. In this case, it is an x and y coordinate.

![Screenshot of QGIS interface with point dataset of trees loaded in and appearing on the map](media/3.png)
_GIS vector dataset in shapefile format of [historic old growth trees in Washington State](https://geo.wa.gov/maps/61db62e6e6864b579e0e36c005e94e71/about) loaded into the QGIS map interface_

This allows GIS software like QGIS to interpret these columns and rows and render them visually on a map.

To recap -- GIS vector data is similar to a regular spreadsheet, where every row is a map feature (point, line or polygon), and every column are things about that feature, including some spatial information that GIS software can use to turn into a map.

Examples of line vector datasets might be:
* rivers
* roads 

Examples of polygon vector datasets might be:
* lakes and bodies of water
* political or administrative units like states




2. Working with georeferenced maps (raster data).



Georeferencing is the process of lining up an old map so it overlays on modern geography. There are many historical maps created before the time of computers which contain useful information. Knowing how to work with georeferenced maps will allow you to take a digital scan of any old map and use it alongside other digital datsets.

2. 

## What you will need

In order to work on this assignment, you will need the free, open-source desktop software QGIS. This tutorial will teach you how to download it, and use some of it's most useful features. 

There are many software options for working with, manipulating, analyzing, and visualizing geospatial data. QGIS is a favorite, as it is free, lightweight, and doesn't require a login or license. If you learn QGIS now, you'll be able to use it and all of its functionalities long after you graduate.

To download QGIS, visit the [QGIS download page](https://www.qgis.org/en/site/forusers/download.html). Select the `long-term release (most stable)`.

Install the program. 

### Size constraints
The QGIS application is about 3.2GB. If you don't have enough space on your computer, the following places in the library have computers you can use:
- [The Lamont Multimedia Lab](https://library.harvard.edu/services-tools/lamont-multimedia-lab) in B-level of Lamont (drop in hours until 10pm daily)
- [The Map Collection](https://library.harvard.edu/libraries/harvard-map-collection) in Pusey Library (you can drop by between 10-4:30pm, but to assure a time slot, you can email us at [maps@harvard.edu](mailto:maps@harvard.edu))

### Mac users
If you get an error message that Apple can’t check the app for malicious software, right-click the application and select `Open`.


## Steps overview

## Steps

## Optional steps 

(publish the map to Github)