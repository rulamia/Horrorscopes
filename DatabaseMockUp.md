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
 
 ![Schema] (https://github.com/rulamia/Horrorscopes/blob/Angelique/photos%20for%20group%20work/schema_erd.png)
 
 ### Status 8/16/22
 The AWS host is created, team is connected, local database is ready for table build testing.

 ### Status 8/16/22
 The AWS host is created, team is connected, local database is ready for table build testing.

  End Segment One.

  ## Segement Two: Database Testing and Importing of Data
  ### Creating Tables
  Tables for our incoming data are built in this phase of the work. 
   - Killers test
   - KC crime data 2009
   - Zodiac moon chart 2009
   - Serial killer Zodiac chart
   - Sign date ranges

  Killers test is just what it sounds like, testing for import of data.

  The tables above are slightly different from the original ERD and are the result of manipulation and cleaning practices. As I looked at different aspects of the       data, it seemed that it could be narrowed down a bit more and other edits needed to be done such as data conversions. This caused a challenge, as some of the data     that was thought to be cleaned had to be redressed and I hadn’t been sure of the conversions until I verified with my team.

  I had planned for another version of the moon chart table with a Boolean column for “Full_Moon” in place of the “Moon_Type” column currently used. I will try to       upload this updated table or perhaps include it in the code for the machine model.

  An inner join will be performed between the “kc_crime_v2” table and the full_moons_2009 table, to create a data set that correlates to the full moon.
  
  ### New ERD
  
  ![Schema] (https://github.com/rulamia/Horrorscopes/blob/Angelique/photos%20for%20group%20work/segment_2_ERD.png)
