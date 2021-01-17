# Instructions for User Setup routes

Configuring the lists of Articles, Courses, Vacancies and Trails present in the table "Users".
The first parameters must be the user's email and password, respectively.

## Articles

To add a new article to the user's list, send a JSON as follows:
```
{
    "name": "<<ARTICLE NAME>>,
    "status": "<<incomplete or complete>>"
}
```

## Courses

To add a new course to the user's list, send a JSON as follows:
```
{
    "name": "<<COURSE NAME>>,
    "status": "<<incomplete or complete>>"
}
```

## Vacancies

To add a new vacancy to the user's list, send a JSON as follows:
```
{
    "name": "<<VACANCY NAME>>,
    "status": "<<submitted or accepted>>"
}
```

## Trails

To add a new trail to the user's list, send a JSON as follows:
```
{
    "name": "<<TRAIL NAME>>,
    "status": "<<incomplete or complete>>"
}
```