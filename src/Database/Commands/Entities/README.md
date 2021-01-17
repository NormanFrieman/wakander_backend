# Setting ID

Defining the id that should be sent on the route to list specific data.

## Users

* 0: Returns users with the same name as the one passed in the search parameter.
    * The "search" parameter must have only one string equivalent to the name to be searched in the database.
* 1: Returns a list of users with a rating equal to or higher than the past.
    * The "search" parameter must be a number equivalent to the rating to be taken into account.

## Articles

* 0: Returns articles with the same name as the one passed in the search parameter.
    * The "search" parameter must have only one string equivalent to the name to be searched in the database.
* 1: Returns a list of articles that have the area of ​​knowledge passed in the search.
    * The "search" must be a string containing the name of the knowledge area to be used as a filter.

## Companies

* 0: Returns companies with the same name as the one passed in the search parameter.
    * The "search" parameter must have only one string equivalent to the name to be searched in the database.

## Courses

* 0: Returns courses with the same name as the one passed in the search parameter.
    * The "search" parameter must have only one string equivalent to the name to be searched in the database.
* 1: Returns a list of courses that have the area of ​​knowledge passed in the search.
    * The "search" parameter must be a string containing the name of the knowledge area to be used as a filter.

## Vacancies

* 0: Returns the vacancies of the respective company passed as a parameter.
    * The "search" parameter must be a string containing the name of the company to be used as a filter.
* 1: Returns a list of vacancies in the knowledge area passed as a parameter.
    * The "search" parameter must be a string containing the name of the knowledge area used as a filter.
* 2: Returns a list of vacancies for the city and state passed as a filter.
    * The "search" parameter must contain two strings, the first containing the name of the city, the second containing the name of the state.
* 3: Returns a list of vacancies with the specified workload.
    * The "search" parameter must be a string containing the workload to be used as a filter.