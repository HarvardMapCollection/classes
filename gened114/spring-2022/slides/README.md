# GENED 1140: Borders

## Monday class slides

[Monday, April 18th Class Slides](https://harvardmapcollection.github.io/GIS-presentations/spring-2022/gened-1140)

## Homework for Wednesday

1. Download QGIS using [this guide](https://harvardmapcollection.github.io/tutorials/qgis/download/).

2. Choose one of the layers you think you will need to make your argument, and search for it, using the search syntax `"topic" + gis + data + download`. 
Example searches:
- "climate vulnerable areas gis data download"
- "country boundaries 1990 gis data download"
- "crime rates San Ysirdo gis data download"
> Tip: try adding the word "shapefile". This will usually bring you to some open data portals, which you can use to find more results. 

3. As you survey available datasets, take note of the file formats the data is made available in. Are they:
- shapefiles (.shp)
- geojsons (.geoJSON)
- tabular data with no geography (.xlsx or .csv)
- images (.png, .jpg, or .tiff)
- PDF reports (.pdf)

4. If you are able to find shapefiles or geoJSONs related to your topic, open them in QGIS, using the steps from [this guide](https://harvardmapcollection.github.io/tutorials/qgis/open-vector/). 

5. If you are able to succesfully add shapefile or geoJSON data layers to your QGIS project, right-click the layer in the layer list, and select `Open Attribute Table`. Explore the values in the dataset. Will this data help you make your argument?

6. We will meet on Wednesday to discuss any problems that came up as a class. 
Common problems:
- Can't find data for your project as a shapefile or geoJSON?
- Couldn't find any relevant data at all?
- Found some data but had trouble making sense of it?
- Found data but had technical issues with GIS and mapping software?


### Tips
1. If you are able to find data in tabular format (.xlsx or .csv), open the dataset in Excel or Google sheets. Are there any mentions of geography in this dataset that could help make it "spatial"? E.g. a **column with an administrative unit code, town names, coordinates**, etc.
    - If you have a column with spatial information such as administrative units, town names, zip codes, or census tracts, you can join your table to spatial data by [performing a table join](https://www.qgistutorials.com/en/docs/performing_table_joins.html).
    - If your table has coordinates, you can [import the data into QGIS](https://www.qgistutorials.com/en/docs/importing_spreadsheets_csv.html).
    - If you have addresses, but not coordinates, you can create coordinates by [geocoding](https://www.gislounge.com/how-to-geocode-addresses-using-qgis/).


2. If you are able to find data in image format, such as historic maps, how might you line these up with other datasets in the GIS software? This process is called "georeferencing". If the maps are already in the [Harvard Map Collection digital collections](https://library.harvard.edu/digital-collections), you can georeference them using [this guide](https://harvardmapcollection.github.io/tutorials/allmaps/georeference/), and bring the georeferenced layers into QGIS. 
> Tip: many of the maps you might want to use (especially if they are still under copyright), will not show up in the digital collections. To find maps and obtain images for your project, get started early by making an appointment with maps@harvard.edu. 

3. If you can't find any spatial or structured, tabular data to support your argument, but can find figures in reports like PDFs, or other non-structured formats, think about how you might turn them into data. Can you create your own table and then follow the steps in tip #1? Can you [create your own vector dataset in QGIS](https://docs.qgis.org/2.14/en/docs/training_manual/create_vector_data/create_new_vector.html)?

## Support
Need maps or data? maps@harvard.edu
Questions for Belle? belle_lipton@harvard.edu.








