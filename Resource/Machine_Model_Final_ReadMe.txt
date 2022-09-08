### Machine Learning Model Final Results

#### Does crime happen more during certain astrological seasons?

The final results from the Logistic Regression Model on the KC Crime Dataset  included an Accuracy Score of 10%. This percentage was raised by 1% after standardizing the data with StandardScaler from sklearn, altering the train-test split to 70/30, and changing the Random State to 1 instead of 42. After reviewing the datasets provided, it was noted the data was organized in a way that could be causing the low accuracy. I chose to shuffle the data in the train_test_split phase, but this did not alter the results at all.

![KC Crime Final Accuracy Score](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/KC_Crime_Final_Accuracy_Score.png?raw=true)

#### Is there a particular zodiac sign that is more likely to be a murderer?

Following the results showing a slight improvement of accuracy on the KC Crime Dataset, I implemented similar updates on the Serial Killer dataset. After standardizing the data with StandardScaler and altering the train-test split to 70/30, the accuracy score is now 11%. Just like the other dataset, shuffling the data during train_test_split did not change the outcomes.

![Killers Final Accuracy Score](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/Killers_Final_Accuracy_Score.png?raw=true)

### Machine Learning Conclusion

KC Crime Dataset Confusion Matrix

![KC Crime Confusion Matrix](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/KC_Crime_Confusion_Matrix.png?raw=true)

Serial Kilers Confusion Matrix

![Killers Confusion Matrix](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/Killers_Confusion_Matrix.png?raw=true)

KC Crime Dataset Classification Report

The results in the Classification Report for the KC Crime Dataset show this Logistic Regression model can not accurately predict the answers we were looking for on this dataset. The precision, recall, and f1 scores are all very low.

![KC Crime Class Report](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/KC_Crime_Classification_Report.png?raw=true)


Serial Killers Classification Report

As seen in the pictured Classification Report, the precision scores are all 14% or below - showing the amount of false positives is high. The recall scores are also quite low, meaning the proportion of actual positives correctly classified are low. The F1 score, a combination of the precision and recall scores, is also low. These results show the Logistic Regression model can not accurately answer our questions.

![Killers Class Report](https://github.com/rulamia/Horrorscopes/blob/Jessica/Resource/Killers_Classifcation_Report.png?raw=true)

If this analysis were to continue, the datasets should be re-analyzed to make sure they are not set up in any sort of order that can skew the machine learning models. Attempting a cluster model like K Nearest Neighbors may show more accurate results on both datasets. Changing the features or introducing new data to the datasets to use as new features could also change the outcome of the Machine Learning performed during this project.
