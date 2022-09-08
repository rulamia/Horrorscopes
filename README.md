# Horrorscopes
## Presentation Overview

### Presentation -- Selected Topic and Reason:
We selected the topic of "Horrorscopes: Does Astrological Season or Sign Have Any Effect on Crime?" This topic was selected as many share a fascination with crimes and the reasons why they are committed. In addition, many have a deep interest in astrology and the hypothesis that the stars and planets may have an effect on how we lead our lives. We want to explore whether or not there could be any possible connection between these two fascinations, or if it is a case of correlation =/= causation. Data on crime is also widely available.

### Presentation -- Description of Source Data:
  - List of Famous Serial Killers: Data gathered from Wikipedia scrape. Data contains killers' names, dates of birth, and number of confirmed/potential victims.
  - KCPD Crime Data for 2009: Found on Kaggle, contains data on the dates of crimes, types of crimes, and if a firearm was used.
  - 2009 Moon Chart: Made by group members on Excel, this is a simple list of full moons from 2009 and their corresponding astrological sign.

### Presentation -- Questions We Hope To Answer: 
  - Does crime happen more often during full moons?
  - What astrological full moon sign (astrological season) has the most crime and what types of crime?
  - Is there a particular astrological sign associated with more murder? Does date of birth relate to number of victims or number of killers?
  - Are Pisces men the worst?

### Presentation -- Description of Data Exploration:
  - Wikipedia Data: When we first scraped Wikipedia for serial killers, we found erroneous entries for articles such as "The Dating Game" and "September 11th Attacks" we needed to clean from our data. We also needed to clean out duplicate entries and entries where the year was the date apprehended rather than the killer's date of birth. Code was then written to assign an astrological sign to each killer by their date of birth and this was exported to a CSV file.
  - KCPD Crime Data: We removed unnecessary columns, leaving only the report numbers, dates of crimes, descriptions of crimes, and if a firearm was used. We wanted to narrow our focus and classify the crimes, so we created 3 main categories: theft (e.g. robbery, forgery, carjacking), violent (e.g. assault, murder,  arson), and misconduct (e.g. driving under the influence, drug related crimes, loitering). Then using excel we labelled each crime as fit with the description.

### Presentation -- Analysis Phase:
  - Wikipedia Data: 
       - We put the data into tableau and excel pivot tables to examine any trends between astrological sign and the number of serial killers. We found there were more aquarius killer than other types.
      ![TableauKillersImage1.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauKillersImage1.png)
      - Then, we analyzed number of victims (confirmed) by Killer's astrological sign. Again, the highest number was from aquarius.
      ![TableauKillersImage2.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauKillersImage2.png)
      - Next, we separated the killers by their birth year. We found that the highest number of serial killers were born between 1946-1964 (with the most being in 1953). This generation definition comes from the Pew Research Center.
      ![TableauKillersImage3.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauKillersImage3.png)
      - Last, we looked at the average number of victims associated with each generation of killer. The average highest number of victims (6.907) came from the silent generation, which were individuals born between 1928-1945.
      ![TableauKillersImage4.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauKillersImage4.png)
  - Full Moon Data:
      - First, we looked to see which astrological season full moon was associated with the highest number of crime reports for 2009. Virgo full moon (associated with September) had the highest number of reports.
      ![TableauFullMoonIMage1.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauFullMoonIMage1.png)
      - Then, the reports were separated by crime type to see which astrological season had the most for each crime type. Crimes categorized as "misconduct" were most often commited during the Taurus full moon, theft was commited most during the Aries full moon, and violent crimes occured most often during the Gemini moon.
      ![TableauFullMoonImage2.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauFullMoonImage2.png)
      - Next, we looked to see which full moon sign had the most reports associated with firearms. Pisces full moon had the most firearms.
      ![TableauFullMoonImage3.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauFullMoonImage3.png)
      - Then to better see if there were spikes during full moons, all of the crimes were placed on a line chart with the X-axis being the date the crime was commited and the Y axis being the number of reports. The graph could be filtered to show each month individually. In general, there did not appear to be a major uptick in reported crimes on full moons.
      ![TableauFullMoonImage4.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauFullMoonImage4.png)
      - Last, the same line chart was created to see if more firearms were used during full moons. Again, in general there did not seem to be a major increase.
      ![TableauFullMoonImage5.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/TableauFullMoonImage5.png)

### Presentation -- Technologies, languages, tools, and algorithms used:
  - Google Colab/ Jupyter Notebook
  - Tableau
  - Microsoft Office Programs such as Word and Excel
  - Mito 
  - Adobe Illustrator 
  - Python
  - SQL and Postgres
  - Pandas
  - Javascript
  - Bootstrap
  - AWS

### Presentation -- Results of Analysis:
  - Question: Does crime happen more often during full moons?
  
    Answer: The final results from the Logistic Regression Model on the KC Crime Dataset included an Accuracy Score of 10%. This percentage was raised by 1% after standardizing the data with StandardScaler from sklearn, altering the train-test split to 70/30, and changing the Random State to 1 instead of 42. After reviewing the datasets provided, it was noted the data was organized in a way that could be causing the low accuracy. We chose to shuffle the data in the train_test_split phase, but this did not alter the results at all. The results in the Classification Report for the KC Crime Dataset show this Logistic Regression model can not accurately predict the answers we were looking for on this dataset. The precision, recall, and f1 scores are all very low. This makes logical sense in addition, that crime does not occur more during full moons.
    
  - Question: What astrological full moon sign (astrological season) has the most crime and what types of crime?
  
    Answer: Virgo season Full Moon in 2009 had the most reports in Kansas City. 
  
  - Question: Is there a particular astrological sign associated with more murder? Does date of birth relate to number of victims or number of killers?
  
  Answer: Following the results showing a slight improvement of accuracy on the KC Crime Dataset, we implemented similar updates on the Serial Killer dataset. After standardizing the data with StandardScaler and altering the train-test split to 70/30, the accuracy score is now 11%. Just like the other dataset, shuffling the data during train_test_split did not change the outcomes. As seen in Classification Report, the precision scores are all 14% or below - showing the amount of false positives is high. The recall scores are also quite low, meaning the proportion of actual positives correctly classified are low. The F1 score, a combination of the precision and recall scores, is also low. These results show the Logistic Regression model can not accurately answer our questions. However, likely no model could sense it likely makes logical sense that certain astrological signs are not associated with a higher likelihood of murder.
  
  - Question: Are Pisces men the worst?

### Presentation -- What the team would have done differently:
If this analysis were to continue, the datasets should be re-analyzed to make sure they are not set up in any sort of order that can skew the machine learning models. Attempting a cluster model like K Nearest Neighbors may show more accurate results on both datasets. Changing the features or introducing new data to the datasets to use as new features could also change the outcome of the Machine Learning performed during this project. For crime it would also be better to include more data, a wider range of cities, and over more years.

## Github 
### Github -- Outline of Project:
![project_flowchart_2.png](https://github.com/rulamia/Horrorscopes/blob/Angelique/project_flowchart_2.png) 

### Github -- Link to Draft Presentation Slides:
https://docs.google.com/presentation/d/1n4ICouEj4aP_hmIUv2Y82vsaKj3_vamR2qQDVS9gTEQ/edit?usp=sharing

## Machine Learning Model
### Machine Learning Model -- Questions to Be Answered:
The questions for our analysis "Does crime happen more during certain astrological seasons?" and "Is there a particular zodiac sign that is more likely to be a murderer?" ultimately became the subjects for the machine learning process. To answer the question of whether or not crime happens more during astrological seasons, the KC Crime Data table from our database was used to compare the zodiac signs to three categories of crime: misconduct, theft, and violent. To find out if there is a zodiac sign more likely to be a murder, the kill counts vs zodiac signs were modeled.

### Machine Learning Model -- Description of Data Processing, Feature Engineering, and Selection:
KC Crime Data Logistic Regression: The first step in the data preprocessing was to examine the data pulled from the "full_moon_vs_crime_date" table from our database. It was determined there were 4,152 object types in the "Sign" and "Crime_Type" columns, the chosen features for the machine learning process. "Signs" was chosen to act as the target variable, and "Crime_Type" the independent variable. Deeming the "Crime_Moon_Type column unnecessary for this model, the next step taken was to drop that column, leaving two columns with rows containing objects. The "Sign" column was encoded using LabelEncoder, which changed the object of each row into a number from 0 to 11. The "Crime_Type" columns was encoded using OneHotEncoder. A new DataFrame was created with three new columns for the OneHotEncode crime types, and the "Crime_Type" column was dropped. I then renamed the three new columns based on their crime types: Misconduct, Theft, and Violent. I then created visuals using Seaborn, a data visualization library based on matplotlib.

The first chart shows a distribution of the target variable, "Sign."
![KC Crime Sign Visualization](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/kc_crime_data_datavis1.png?raw=true)

The second chart visualizes the relationship between "Sign" and "Misconduct."
![KC Crime Sign Misconduct](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/kc_crime_signs_misconduct.png?raw=true)

The third chart visualizes the relationship between "Sign" and "Theft."
![KC Crime Sign Theft](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/kc_crime_signs_theft.png?raw=true)

The fourth chart visualizes the relationship between "Sign" and "Violent."
![KC Crime Sign Violent](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/kc_crime_signs_violent.png?raw=true)

Killers Logistic Regression: The data preprocessing, feature engineering, and feature selection was much similar on this dataset as the KC Crime Data due to Logistic Regression also being performed on this data. The target variable is again the Zodiac Sign, which was encoded for the model using LabelEncoder. The independent variable, "proven_victims," was already in numerical form. Seaborn was used again to attractively visualize the distribution of the target variable and the relationship between this variable and the "proven_vistims."

The first chart shows a distribution of the target variable renamed during the encoding process as "Signs_N."
![Killers Tart Var](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/killers%20target%20variable.png?raw=true)

The second chart visualizes the relationship between "Signs_N" and "proven_victims."
![Killers Relationship](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/Signs%20vs%20Proven%20Victims.png?raw=true)

### Machine Learning Model -- How Data was Split Into Training and Testing Sets:
The training and testing sets for both the KC Crime Data and Killers datasets was a standard 80% training set and 20% testing set. 

### Machine Learning Model -- Explanation of Model Choices:
Due to the presence of categorical data and the desire for simplicity, I chose logistic regression models for both Datasets.

  - Limitations: Both datasets are limited using the Logistic Regression due to the model's lack of the ability to obtain complex relationships between the target and independent variables. Both datasets may have benefited from clustering models, like originally planned, instead of trying to force the data into a linear decision because it is a simpler model.
  - Benefits: Logistic Regression was chosen for both datasets because it was thought to have been easier to implement, interpret, and efficient to train. It also would, and may still be, simple to plug in additional tables created during the DataBase phase of this analysis.
  - Changes in model choice: A K Nearest Neighbors model was originally planned for the Serial Killer Dataset. For efficiency purposes, this was changed to Logistic Regression. Linear Regression was originally and incorrectly chosen for the KC Crime Dataset. After realizing the error in choosing Linear Regression for categorical data, it was altered to Logistic Regression.

### Machine Learning Model -- Description of Model Training:

### Machine Learning Model -- Description of Current Accuracy Score:
The accuracy scores for both models are very, very low. The KC Crime Data Logistic Regression's score is a disappointing 9%. Even worse, the Killers Logistic Regression is only 7%.

KC Crime Data Logistic Regession Accuracy Score:
![KC Crime Accuracy](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/KC%20Crime%20Data%20Accuracy%20Score.png?raw=true)

Killers Crime Data Logistic Regression Accuracy Score:
![Killers Accuracy](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/killers%20accuracy%20score.png?raw=true)

I believe the decision to use Logistic Regression with the features chosen from each dataset was wrong. Clustering my also produce results that show no correlation between the data and our questions, but I believe they would be a more realistic test for the data.

### Machine Learning Model -- How Does it Answer the Questions?
Currently, the accuracy score is so low it simply answers "no" to our questions about whether more crime happens during certain astrological seasons and if there is a particular zodiac sign more likely to commit murder. This makes logical sense.

## Database

### Database -- Overview:
For the purposes of our research we are using Jupyter Notebook to preprocess our data and convert it into csv files. The prepared data will be hosted on an AWS database instance and accessed locally using a PostgreSQL database.


### Database -- Schema and ERD:
There are currently four main tables anticipated for our presentation:  
- KC crime data 2009
- Zodiac moon chart 2009
- Sign Date Ranges
 
The KC crime data will be filtered for the zodiac season using the Zodiac moon chart.
![ERDsegment3.png](https://raw.githubusercontent.com/rulamia/Horrorscopes/Lauren/Resource/ERDsegment3.png)


### Database -- Inner Join Update:
We were able to do an inner join between the Full_Moon_2009 Table and the KC Crime Data Table after fixing the date column formatting for both tables and converting the data type to datetime.
All deliverables for Segment 2 are now met.

## Dashboard
### Link to Website/Dashboard:
https://rulamia.github.io/Horrorscopes/
