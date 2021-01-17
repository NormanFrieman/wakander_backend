# Instructions for using Routes

Here the methods and body of requests will be discussed in more depth.

## Instructions for generic routes

As seen before, the generic routes are:

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

### 1) Create [POST]

The creation route is used by all entities, but the request body is different for each entity.

#### - Articles

The request body must have:
```
{
    "name": "<<ARTICLE NAME>>",
	"imageUrl": "<<URL IMAGE>>",
	"author": "<<AUTHOR NAME>>",
	"year": "<<YEAR>>",
	"knowledge": <<KNOWLEDGE AREA NAMES ARRAY>>
}
```

#### - Companies

The request body must have:
```
{
    "name": "<<COMPANY NAME>>",
	"password": "<<PASSWORD>>",
	"cnpj": "<<COMPANY CNPJ>>",
	"plan": "<<CHOOSED PLAN>>"
}
```

#### - Courses
The request body must have:
```
{
    "name": "<<COURSE NAME>>",
	"knowledge": <<KNOWLEDGE AREA NAMES ARRAY>>,
	"duration": "<<COURSE DURATION>>",
	"points": <<POINTS EARNED BY COMPLETING THE COURSE>>
}
```

#### - Trails
The request body must have:
```
{
    "name": "<<TRAIL NAME>>",
    "knowledge": <<KNOWLEDGE AREA NAMES ARRAY>>,
	"courseOrArticles": "<<ARRAY CONTAINING COURSE OR ARTICLE NAMES>>",
    "points": <<POINTS EARNED BY COMPLETING THE TRAIL>>
}
```

#### - Users

The request body must have:
```
{
    "name": "<<USER NAME>>",
	"password": "<<PASSWORD>>",
	"cpf": "<<USER CPF>>",
	"email": "<<USER E-MAIL>>",
	"cell": <<USER CELL PHONE>>
}
```

#### - Vacancies

The request body must have:
```
{
    "name": "<<VACANCY NAME>>",
	"company": "<<COMPANY NAME>>",
	"knowledge": <<KNOWLEDGE AREA NAMES ARRAY>>,
	"city": "<<VACANCY CITY>>",
	"state": "<<VACANCY STATE>>",
	"workload": "<<WORKLOAD>>"
}
```

### 2) LOGIN [PUT]

The login route is used by the "users" and "companies" entities, but the request body is different for each entity.

#### - Companies

The request body must have:
```
{
    "cnpj": "<<COMPANY CNPJ>>",
	"password": "<<PASSWORD>>"
}
```

#### - Users

The request body must have:
```
{
	"email": "<<USER E-MAIL>>",
	"password": "<<PASSWORD>>"
}
```

### 3) Delete [PUT]

The delete route is used by all entities, but the request body is different for each entity.

#### - Articles

The request body must have:
```
{
    "name": "<<ARTICLE NAME>>"
}
```

#### - Companies

The request body must have:
```
{
    "cnpj": "<<COMPANY CNPJ>>",
	"password": "<<PASSWORD>>"
}
```

#### - Courses
The request body must have:
```
{
    "name": "<<COURSE NAME>>"
}
```

#### - Trails
The request body must have:
```
{
    "name": "<<TRAIL NAME>>"
}
```

#### - Users

The request body must have:
```
{
	"email": "<<USER E-MAIL>>",
	"cpf": "<<USER CPF>>",
	"password": "<<PASSWORD>>"
}
```

#### - Vacancies

The request body must have:
```
{
    "name": "<<VACANCY NAME>>",
	"company": "<<COMPANY NAME>>"
}
```

### 4) List [GET]

The list route is used by all entities.

#### - Articles

The URL must have:
- [https://wakanderbackend.herokuapp.com/list/articles]

#### - Companies

The URL must have:
- [https://wakanderbackend.herokuapp.com/list/companies]

#### - Courses
The URL must have:
- [https://wakanderbackend.herokuapp.com/list/courses]

#### - Trails
The URL must have:
- [https://wakanderbackend.herokuapp.com/list/trails]

#### - Users

The URL must have:
- [https://wakanderbackend.herokuapp.com/list/users]

#### - Vacancies

The URL must have:
- [https://wakanderbackend.herokuapp.com/list/vacancies]

### 5) ListBy [GET]

The documentation regarding the ListBy route is in the README present in the `Database / Commands / Entities` folder

* If it is running on your local machine, replace the URL `https://wakanderbackend.herokuapp.com/` with `http://localhost:PORT_USED/`

## Instructions for User Setup routes

Configuring the lists of Articles, Courses, Vacancies and Trails present in the table "Users".
The first parameters must be the user's email and password, respectively.

### Articles

To add a new article to the user's list, send a JSON as follows:
```
{
    "name": "<<ARTICLE NAME>>,
    "status": "<<incomplete or complete>>"
}
```

### Courses

To add a new course to the user's list, send a JSON as follows:
```
{
    "name": "<<COURSE NAME>>,
    "status": "<<incomplete or complete>>"
}
```

### Vacancies

To add a new vacancy to the user's list, send a JSON as follows:
```
{
    "name": "<<VACANCY NAME>>,
    "status": "<<submitted or accepted>>"
}
```

### Trails

To add a new trail to the user's list, send a JSON as follows:
```
{
    "name": "<<TRAIL NAME>>,
    "status": "<<incomplete or complete>>"
}
```