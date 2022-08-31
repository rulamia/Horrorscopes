SELECT * from kc_crime

SELECT full_moons_2009."Sign",
	kc_crime."Crime_Type",
	TO_DATE ("Moon_Date", 'MM/DD/YYYY') as "Crime_Moon_Date"
INTO full_moon_vs_Crime_Date
FROM full_moons_2009
INNER JOIN kc_crime
ON (TO_DATE ("Moon_Date", 'MM/DD/YYYY') = TO_DATE ("Crime_Date", 'MM-DD-YYYY'));


SELECT "Moon_Date" from full_moons_2009

SELECT TO_DATE ("Moon_Date", 'MM/DD/YYYY') from full_moons_2009;

SELECT * from full_moon_vs_Crime_Date