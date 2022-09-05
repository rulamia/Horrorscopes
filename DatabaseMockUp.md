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

  The table killers test is just what it sounds like, originally it was intended to be used solely to test the connection string and database hosting verification. It
  did help verify hosting but the connection string was another matter. This will be discussed further in the rest of this section. This was one of the hurdles we
  faced in segment 2. We had mistakenly built our database in the wrong loaction on the server. This also led to using the worng address within the connection string. 

  The tables above are slightly different from the original ERD and are the result of manipulation and cleaning practices. As different aspects of the data were 
  explored, it seemed that it could be narrowed down a bit more. As data conversions were attempted to match the database, some other issues surface. Some data wasn't 
  uniform. As a result the data would not convert into the desired data type. This means data that was thought to be cleaned actually wasn't, partially because the 
  planning phase had not been thorough enough to flush out these potential issues.
  
  As mentioned earlier in this section, the testing table, ```killers_test``` had served the purpose of verifying that the database was functioning. However, the 
  connection string had failed. We had mistakenly built the database in the wrong location in our within our database server. This also led to using the wrong address
  when constructing the connection string. 

  I had planned for another version of the moon chart table with a Boolean column for “Full_Moon” in place of the “Moon_Type” column currently used. I will try to
  upload this updated table or perhaps include it in the code for the machine model.

  This segment has highlighted the potential problems of that can be born in the planning phase of an ETL. Had the final cleaned data been planned out more thoroughly,
  the database could have been constructed more easily. As it stands the database should be functional and complete within the next two days. Although this is slightly
  behind schedule, it doesn't appear to affect the finished project.
  
    
  ### New ERD
  
  ![Schema] (https://github.com/rulamia/Horrorscopes/blob/Angelique/photos%20for%20group%20work/segment_2_ERD.png)

 ### Updated database
 The database has been reconstructed and the connection string now works. Data can be uploaded remotely and hosted on Amazon Web Services.
 
