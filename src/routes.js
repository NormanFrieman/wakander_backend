const express = require("express");
const routes = express.Router();




/**
 * GENERIC CONTROLLERS
 */
const Create = require("./Controllers/Create");
const Login = require("./Controllers/Login");
const Delete = require("./Controllers/Delete");
const List = require("./Controllers/List");




/**
 * GENERIC ROUTES
 */
routes.post("/create/:def", Create);
routes.put("/login/:def", Login);
routes.put("/delete/:def", Delete);
routes.get("/list/:def", List);




module.exports = routes;