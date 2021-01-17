<h1>Wakander Project - Backend</h1>

This is the code referring to the backend of the <bold>Wakander</bold> project.

# Components

This project consists of a component, the back-end. The backend was developed using: express.js to establish the routes, [knex](http://knexjs.org/) as a query builer and [postgres](https://www.postgresql.org/) as a database.

## Developing Backend

To get started with developing on backend, install all Node-related dependencies with a simple `npm install`. After that, copy over `config-template.json` to `config.json` and adjust all required values (surrounded by `<<>>`).

For developing, use `npm test` to start.

## Routes

The routes were separated into: generic and exclusive. Generics, as the name suggests, can be used by all entities. Exclusives are unique routes to serve a specific purpose of an entity.

### 1) Generic routes

Generic routes are:

* Create new data to be saved in the database
    - [https://wakanderbackend.herokuapp.com/create/:def]

* Log in
    - [https://wakanderbackend.herokuapp.com/login/:def]

* Delete data from the database
    - [https://wakanderbackend.herokuapp.com/delete/:def]

* List all data in a table
    - [https://wakanderbackend.herokuapp.com/list/:def]

* List data specific to a table
    - [https://wakanderbackend.herokuapp.com/bylist/:def/:id/:search]

> To find out what needs to be sent in the body of the requests listed above, see the README in the Controllers folder.

The meaning of the variables passed by the params can be seen below.

Variable  | Meaning
--------- | ------
def       | Can be "users", "companies", "courses", "articles", "vacancies" and "trails"
id        | Used to define the type of function to be used to return a specific list of items
search    | Term to be searched for in the database

### 2) Exclusive routes

Exclusive routes are:

* Add user rating points
    - [https://wakanderbackend.herokuapp.com/addRating]

* Add / configure a course in the user's course list
    - [https://wakanderbackend.herokuapp.com/setupCourse]

* Add / configure an article in the user's course list
    - [https://wakanderbackend.herokuapp.com/setupArticle]

> To find out what needs to be sent in the body of the requests listed above, see the README in the Controllers folder.

* Match between user / vacancy
    - [https://wakanderbackend.herokuapp.com/match/:email/:vancacy]

> To request the match between user and vacancy, in place of ":email" put the user's email and in place of ":vancacy" put the name of the vacancy


# License

[MIT](http://opensource.org/licenses/MIT)