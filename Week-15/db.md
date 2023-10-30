## step 1 ##
Step 1: Create a New Database and Collections

Open your MongoDB shell.
Create a new database named "MovieDB":

## command ##
use MovieDB

## step 2 ##
Step 2: Design Schema and Insert Sample Data

Design the schema for each collection, including relationships between them.
Insert sample data into each collection.
Here's an example of what the schema design might look like, along with sample data:


## schema ##

"movies" Collection Schema:
{
  title: "Movie Title",
  releaseYear: 2022,
  genre: "Action",
  director: ObjectId("director_id"),
  actors: [ObjectId("actor1_id"), ObjectId("actor2_id")],
}

"directors" Collection Schema:
{
  name: "Director Name",
  nationality: "Nationality",
  moviesDirected: [ObjectId("movie1_id"), ObjectId("movie2_id")],
}

"actors" Collection Schema:
{
  name: "Actor Name",
  nationality: "Nationality",
  moviesActedIn: [ObjectId("movie1_id"), ObjectId("movie2_id")],
}

## step 3 ##
Step 3: Write MongoDB Queries

Implement appropriate relationships between collections using references.
Write MongoDB queries to perform the following tasks.

1 ---> Find all movies released in a specific year:
## command ##
db.movies.find({ releaseYear: 2022 })

2 ---> Find all movies in a specific genre:
## command ##
db.movies.find({ genre: "Action" })

3 ---> Find all movies directed by a specific director:
## command ##
db.movies.find({ director: ObjectId("director_id") })

4 ---> Find all movies that a specific actor acted in:
## command ##
db.movies.find({ actors: ObjectId("actor_id") })

5 ---> Find all directors from a specific nationality:
## command ##
db.directors.find({ nationality: "Nationality" })

6 ---> Find all actors from a specific nationality:
## command ##
db.actors.find({ nationality: "Nationality" })
