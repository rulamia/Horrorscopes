# Horrorscopes

## Provisional Machine Learning Models

At this time in the analysis, we have committed to a Kansas City Crime dataset with over 300,000 rows and a Texas Death Row dataset, specifically a CSV that includes the dates of birth with 238 rows. Ideally, we will be using Machine Learning to answer the following questions:
  - Does crime happen more during certain astrological seasons?
  - Is there a particular zodiac sign that is more likely to be a murderer?
  - Are pisces men the worst?
  
 ### Using Linear Regression to answer, "Does crime happen more during certain astrological seasons?"
 
The dataset that contains the information we need to answer this question is the Kansas City Crime Data resource. I took a quick look at the data in Pandas to determine which columns contain the information for this problem that can be plugged into an appropriate machine learning model.
 
![KC Crime DF](https://github.com/rulamia/Horrorscopes/blob/ProvisionalML/Provisional%20Machine%20Learning%20/Resources/KC%20Crime%20DF%20example.png?raw=true)

It is determined the Description and Reported Date columns hold the most relevant information to answer our question. Due to Description being a target, or dependent variable, I have concluded a Linear Regression model can be used to answer this question. To make this work effectively, the Description data will need to be transformed into numerical classifcations. With 136 unique possibilities under Description, bucketing the descriptions that are least present in the data into an "other category" will need to be done for efficiency.

### Using Decision Trees and Clustering to answer, "Is there a particular zodiac sign that is more likely to be a murderer?" and cheekily, "Are pisces men the worst?"

The Texas Death Row dataset contains a csv file that features a date of birth column. This is important to classify the data by each Astrological House's timeframe. 

![Death Row DF](https://github.com/rulamia/Horrorscopes/blob/ProvisionalML/Provisional%20Machine%20Learning%20/Resources/death-row%20df%20example.png?raw=true)

Utilizing the Decision Tree Classifier can group together data with similar attributes; i.e. the dates of birth that fall into each sign's date range.

![Decision Tree](https://github.com/rulamia/Horrorscopes/blob/ProvisionalML/Provisional%20Machine%20Learning%20/Resources/decision%20tree.png?raw=true)

### Summary

While confident our questions can be answered using Linear Regression and Decision Trees, I am not confident the Texas Death Row data has enough information to gather the results we are looking for with only 238 lines. I believe a larger dataset with more data will be needed.
