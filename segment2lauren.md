# Segment 2 Group 2 Horrorscopes
## Presentation/ Slides
### Description of Data Exploration Phase
### Description of Analysis Phase
### List of Technologies/Languages/Tools/Algorithms Used

# Github Repository and Project Overview
## Outline of Project



# Machine Learning Model

## Preliminary Data Preprocessing

### KC Crime Data

For a successful linear regression model to determine if there is any correlation, careful preprocessing will need to take place. Our dependent variable, Description of the type of crime committed, will need to transformed from categorical data to numerical data. To make this possible, one-hot encoding will be utilized to transform the features into a dummy set. This dataset is quite large, and the Description feature contains several different types of crimes committed. To run a smooth linear regression, the types of crime will be bucketed into smaller categories, including an “other” category for the least common occurrences. 

Any missing data will need to be addressed as well. The scikit learn imputer will be used to transform any null values into the mean value. Date values will need to be cleaned up and in a consistent format for the machine to read them.

### Serial Killer Data

After further analyzing the decided upon datasets, we made the decision to drop the Texas Death Row csv. Instead, we scraped wikipedia for Serial Killer data. This is more relevant to our initial questions “Is there a particular zodiac sign that is more likely to be a murderer?” And “Are Pisces men the worst?” Clustering will still be the appropriate model for machine learning, but it was decided kNN (k Nearest Neighbors) Clustering will be more appropriate. 

K Nearest Neighbors is a supervised learning algorithm used for classification. This model will group the serial killers together by zodiac sign and kill count to determine if our hypothesis is correct. The most important features of this dataset are the date of birth and kill count. Irrelevant columns will be dropped. Buckets separating the dates of birth within the range of each astrological sign will need to be created. Like the KC Crime Data, we will need to clean up the date formats before bucketing.


## Preliminary Feature Engineering, Feature Selection, and Decision Making Process

### KC Crime Data and Serial Killer Data

Before performing feature engineering, the columns that will need to be used in the linear regression on the KC Crime Data are the Description and From Date columns, and in row kNN model for the Serial Killer Data will be Zodiac Sign and From Date. As this is not a computed decision, I would like to use proper procedures in Feature Selection to confirm the correct features are chosen. If a feature contains mostly the same value, the model will not learn from it and will need to be dropped. Any 2 features that are highly correlated will cause redundancy. The Pairwise Correlation method can be used to resolve this. One of the redundant columns can be dropped. Also, if any features have low correlation, they will also be dropped. The Forward Selection method can be used to determine the best features by running the predicted best feature first, followed by the rest one at a time to confirm the correct features are chosen.

The decision making process is about simple techniques that are not solely reliant on human instinct that may skew the results. Scikit learn supports computational feature engineering and selection and will be used throughout this process.

## Testing and Training

### KC Crime Data and Serial Killer Data

Because the KC Crime Dataset contains over 100,000 rows of information, the testing and training will begin with the standard 70% training and testing method. This will be altered throughout the process if needed, but will not be overdone as to skew the results.

I will also begin with the 70/30 training and testing on the Serial Killer Data. Even though this dataset is significantly smaller, this is a popular start for training and testing the data. As we grow more familiar with the data during this process, this plan may change.

## Model Choices, limitations, and benefits

### KC Crime Data

A linear regression model was chosen for this dataset because we are trying to answer a question asking how strong the relationship between two variables is. 

#### Benefits

Linear Regression is a simple model. It is easier to communicate how the model will work and interpret the results. To avoid overfitting, the model can be regularized. New data can be plugged in easily if more questions come up in the analysis.

#### Limitations

Even though the model can be regularized to avoid overfitting, linear regression models are prone to overfitting. With such a large dataset, there is a possibility of outliers that will skew the data.

### Serial Killer Data

The kNN model was chosen for the Serial Killer Data because it is also simple to understand classification model, which will be needed to group the zodiac signs and kill counts.

#### Benefits

As mentioned above, these models are simple and easy to understand. There are no assumptions of the data like a linear regression model would have. This model is ever evolving and adjustable to multi-class problems.

#### Limitations

As great as the kNN is for the questions we are asking, this model can be slow running. Finding the optimal number of neighbors can be challenging. If any data is imbalanced, the model will not perform well. Like linear regression, this algorithm is sensitive to outliers.

# Dashboard
## Description of Tools
## Description onf interactive element(s)