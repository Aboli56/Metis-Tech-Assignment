# React Country List

This is a simple React project where you can demonstrate your React, Jest and Typescript skills.

### Instalation steps

Install dependencies:

```
npm install
```

Run local environment

```
npm start
```

Open http://localhost:8080 in your browser.

## Structure

In this project you will find two major Components **All Countries** and **Selected Countries** where you should extend missing functionality.

Also there are Country Lists in JSON format taken from http://github.com/samayo/country-json

## Tasks

Your tasks are:

1. In the **All Countries** View:

   a. Add missing data to the "Population" column. Required data can be found in the `country-json/src/country-by-population.json`

   b. Add missing data to the "Area" column (`country-json/src/country-by-surface-area.json`)

   c. Implement Sorting function. You can use default JS sort function or any other method of your choice.

2. In the **Selected Countries** View:

   a. Implement search functionality. The "Found Countries" should display country names filtered by the search term. The search term should be case insensitive.

   b. Allow user to add some items from the "Found Countries" to the "Selected Countries".

   c. Create 2 test scenarios with different search terms
