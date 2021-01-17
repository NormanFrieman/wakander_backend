# Instructions for using Routes

Here the methods and body of requests will be discussed in more depth.

## Instructions for generic routes

As seen before, the generic routes are:

* Create new data to be saved in the database
* Log in
* Delete data from the database
* List all data in a table
* List data specific to a table

### 1) Create [POST]

- [POST][https://wakanderbackend.herokuapp.com/create/:def]
- The creation route is used by all entities, but the request body is different for each entity.

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
	"coursesOrArticles": "<<ARRAY CONTAINING COURSE OR ARTICLE NAMES>>",
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

- [PUT][https://wakanderbackend.herokuapp.com/login/:def]
- The login route is used by the "users" and "companies" entities, but the request body is different for each entity.

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

- [PUT][https://wakanderbackend.herokuapp.com/delete/:def]
- The delete route is used by all entities, but the request body is different for each entity.

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

- [GET][https://wakanderbackend.herokuapp.com/list/:def]
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

- [GET][https://wakanderbackend.herokuapp.com/bylist/:def/:id/:search]
- The documentation regarding the ListBy route is in the README present in the `Database / Commands / Entities` folder.

* If it is running on your local machine, replace the URL `https://wakanderbackend.herokuapp.com/` with `http://localhost:PORT_USED/`

## Instructions for User Setup routes

Configuring the lists of Articles, Courses, Vacancies and Trails present in the table "Users".
The first parameters must be the user's email and password, respectively.

### Match
- [GET][https://wakanderbackend.herokuapp.com/match/:email/:vancacy]
- To check the match between a user and a vacancy:
```
https://wakanderbackend.herokuapp.com/match/<<USER E-MAIL>>/<<VACANCY NAME>>
```

### Add rating points
- [PUT][https://wakanderbackend.herokuapp.com/addRating]
- To add points to the user account, send a JSON as follows:
```
{
    "email": "<<USER E-MAIL>>,
    "password": "<<PASSWORD>>",
    "addRating": <<QUANTITY OF POINTS TO BE ADDED>>
}
```

### Articles

- [PUT][https://wakanderbackend.herokuapp.com/setupArticle]
- To add a new article to the user's list, send a JSON as follows:
```
{
    "email": "<<USER E-MAIL>>,
    "password": "<<PASSWORD>>",
    "article": {
        "name": "<<ARTICLE NAME>>,
        "status": "<<incomplete or complete>>"
    }
}
```

### Courses

- [PUT][https://wakanderbackend.herokuapp.com/setupCourse]
- To add a new course to the user's list, send a JSON as follows:
```
{
    "email": "<<USER E-MAIL>>,
    "password": "<<PASSWORD>>",
    "course": {
        "name": "<<COURSE NAME>>,
        "status": "<<incomplete or complete>>"
    }
}
```

### Vacancies

- [PUT][https://wakanderbackend.herokuapp.com/setupVacancy]
- To add a new vacancy to the user's list, send a JSON as follows:
```
{
    "email": "<<USER E-MAIL>>,
    "password": "<<PASSWORD>>",
    "vacancy": {
        "name": "<<VACANCY NAME>>,
        "status": "<<submitted or accepted>>"
    }
}
```

### Trails

- [PUT][https://wakanderbackend.herokuapp.com/setupTrail]
- To add a new trail to the user's list, send a JSON as follows:
```
{
    "email": "<<USER E-MAIL>>,
    "password": "<<PASSWORD>>",
    "trail": {
        "name": "<<TRAIL NAME>>,
        "status": "<<incomplete or complete>>"
    }
}
```