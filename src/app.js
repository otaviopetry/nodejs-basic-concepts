const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

// CREATE
app.post("/repositories", (request, response) => {
  
  // get info from request body
  const { title, url, techs } = request.body;

  // create the project
  const project = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  }
  
  // insert into container array
  repositories.push(project);

  // return the created project 
  response.json(project);

});

// READ
app.get("/repositories", (request, response) => {
  
  // simply list all projects
  response.json(repositories);

});

// UPDATE
app.put("/repositories/:id", (request, response) => {
  
  // store the id
  const { id } = request.params;

  // destructure the request body
  const { title, url, techs } = request.body;

  // check if id exists in projects array
  const projectIndex = repositories.findIndex( project => project.id === id );

  // if doesnt exist, return error
  if ( projectIndex < 0 ) {
    return(response.status(400).json({
      error: "No project with this id."
    }))
  }

  // if it does create the updated project object, but store the project likes first
  const likes = repositories[projectIndex].likes;
  const project = {
    id,
    title,
    url,
    techs,
    likes
  };

  // update it in the projects container
  repositories[projectIndex] = project;

  // return the updated project
  return response.json(repositories[projectIndex]); 

});

// DELETE
app.delete("/repositories/:id", (request, response) => {
  
  // store the id
  const { id } = request.params;

  // check if it does exist
  const projectIndex = repositories.findIndex( project => project.id === id );

  // if it does not, return error
  if ( projectIndex < 0 ) {
    return(response.status(400).json({
      error: "No project with this id."
    }))
  }

  // if it does, delete it from container
  repositories.splice(projectIndex, 1);

  // return success message with 'no content' status code
  return response.status(204).json({
    message: 'The project has been deleted.'
  })

});

app.post("/repositories/:id/like", (request, response) => {
  
  // store the id
  const { id } = request.params;

  // check if it does exist
  const projectIndex = repositories.findIndex( project => project.id === id );

  // if doesnt, return error
  if ( projectIndex < 0 ) {
    return(response.status(400).json({
      error: "No project with this id."
    }))
  }

  // if it does, add 1 like
  repositories[projectIndex].likes += 1;

  // return whole project
  return response.json(repositories[projectIndex]);
  
});

module.exports = app;
