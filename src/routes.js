const express = require("express");
const routes = express.Router();




/**
 * GENERIC CONTROLLERS
 */
const Create = require("./Controllers/Create");
const Login = require("./Controllers/Login");
const Delete = require("./Controllers/Delete");
const List = require("./Controllers/List");
const ListBy = require("./Controllers/ListBy");




/**
 * EXCLUSIVE USER CONTROLLERS
 */
const AddRating = require("./Controllers/AddRating");
const SetupCourse = require("./Controllers/SetupCourse");
const SetupArticle = require("./Controllers/SetupArticle");
const SetupVacancy = require("./Controllers/SetupVacancy");
const SetupTrail = require("./Controllers/SetupTrail");
const Match = require("./Controllers/Match");




/**
 * GENERIC ROUTES
 */
routes.post("/create/:def", Create);
routes.put("/login/:def", Login);
routes.put("/delete/:def", Delete);
routes.get("/list/:def", List);
routes.get("/bylist/:def/:id/:search", ListBy);




/**
 * EXCLUSIVE USER ROUTES
 */
routes.put("/addRating", AddRating);
routes.put("/setupCourse", SetupCourse);
routes.put("/setupArticle", SetupArticle);
routes.put("/setupVacancy", SetupVacancy);
routes.put("/setupTrail", SetupTrail);
routes.get("/match/:email/:vacancy", Match);




module.exports = routes;