# Horrorscopes
## Segment One: Database Mock Up
### Overview: Analyzing crime and the Zodiac
Can Kansas City crime data filtered by date and Zodiac season tell us which season is the most criminal?
Based on Texas death row data, which sign is the most dangerous?

### Technology
 - Jupyter Notebook
 - PostgreSQL
 - Amazon Web Services

For the purposes of our research we are using Jupyter Notebook to preprocess our data and convert it into csv files. The prepared data will be hosted on an AWS database 
instance and accessed locally using a PostgreSQL database.

### Schema and ERD
There are currently four tables anticipated for our presentation: 
 - KC crime data 2009
 - Zodiac moon chart 2009
 - Texas death row birthdays
 - Sign Date Ranges
 
 The KC crime data will be filtered for the zodiac season using the Zodiac moon chart. Texas death row birthdays will be matched to the Sign Date Ranges table.
 
 ![Schema] (/github.com/rulamia/Horrorscopes/blob/Angelique/photos%20for%20group%20work/schema_erd.png)
 
 ### Status 8/16/22
 The AWS host is created, team is connected, local database is ready for table build testing.

