# Horrorscopes
We selected the topic of "Horrorscopes: Does Astrological Season or Sign Have Any Effect on Crime?" This topic was selected as many share a fascination with crimes and the reasons why they are committed. In addition, many have a deep interest in astrology and the hypothesis that the stars and planets may have an effect on how we lead our lives. We want to explore whether or not there could be any possible connection between these two fascinations, or if it is a case of correlation =/= causation.

## Overview

### Data Sets
  - KCPD Crime Data Set: A data set from 2009 containing every crime recorded in Kansas City, Missouri during that year. It distinguishes on type of crime and the time and date the crime was committed. This data set has over 100,000 rows.
  - Texas Death Row Data Set: A dataset depicting the name, date of birth, and type of crime committed by Texas Death Row inmates. This is our smallest data set, coming in at just over 200 rows.
  - Wikipedia Serial Killer Data Set: a data set directly scraped from Wikipedia containing the name and data birth of many famous serial killers.
  
### Question We Hope to Answer
  - Does crime happen more during certain astrological seasons?
  - Is there a particular zodiac sign that is more likely to be a murderer?
  - Are pisces men the worst?

# Group 2 Communication Protocol
## Participants
* Angelique Walker
* Corrine Moore
* Darcy Barnett
* Jessica Stearns
* Lauren Debes

## Methodology
* Slack
* Zoom
* Google Documents

## Summary
Group 2 has committed to meeting multiple times a week on Zoom outside of designated class time to collaborate and delegate specific tasks amongst our group members. When not in a meeting, we communicate via Slack to update each other on the status of our specific tasks as well as coordinate schedules. While meeting, we make contributions to a shared Google Document that keeps a running log of each meeting, what is discussed, what is delegated, and what has yet to be delegated. This document is also referenced outside of class to remind each group member of what everyone should be working on.

Group 2 is dedicated to maintaining professionalism and upholding a deep respect for every other group member's time, input, and experience.

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


  ##### End Segment One.

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
## Provisional Machine Learning Models

At this time in the analysis, we have committed to a Kansas City Crime dataset with over 300,000 rows and a Texas Death Row dataset, specifically a CSV that includes the dates of birth with 238 rows. Ideally, we will be using Machine Learning to answer the following questions:
  - Does crime happen more during certain astrological seasons?
  - Is there a particular zodiac sign that is more likely to be a murderer?
  - Are pisces men the worst?
  
 ### Using Linear Regression to answer, "Does crime happen more during certain astrological seasons?"
 
The dataset that contains the information we need to answer this question is the Kansas City Crime Data resource. I took a quick look at the data in Pandas to determine which columns contain the information for this problem that can be plugged into an appropriate machine learning model.
 
![KC Crime DF](https://github.com/rulamia/Horrorscopes/blob/Jessica/Provisional%20Machine%20Learning%20/Resources/KC%20Crime%20DF%20example.png?raw=true)

It is determined the Description and From Date columns hold the most relevant information to answer our question. Due to Description being a target, or dependent variable, I have concluded a Linear Regression model can be used to answer this question. To make this work effectively, the Description data will need to be transformed into numerical classifcations. With 136 unique possibilities under Description, bucketing the descriptions that are least present in the data into an "other category" will need to be done for efficiency.

### Using Decision Trees and Clustering to answer, "Is there a particular zodiac sign that is more likely to be a murderer?" and cheekily, "Are pisces men the worst?"

The Texas Death Row dataset contains a csv file that features a date of birth column. This is important to classify the data by each Astrological House's timeframe. 

![Death Row DF](https://github.com/rulamia/Horrorscopes/blob/Jessica/Provisional%20Machine%20Learning%20/Resources/death-row%20df%20example.png?raw=true)

Utilizing the Decision Tree Classifier can group together data with similar attributes; i.e. the dates of birth that fall into each sign's date range.

![Decision Tree](https://github.com/rulamia/Horrorscopes/blob/Jessica/Provisional%20Machine%20Learning%20/Resources/decision%20tree.png?raw=true)

### Summary

While confident our questions can be answered using Linear Regression and Decision Trees, I am not confident the Texas Death Row data has enough information to gather the results we are looking for with only 238 lines. I believe a larger dataset with more data will be needed.
