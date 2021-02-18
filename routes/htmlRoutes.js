const express = require("express");
const path = require("path");

function htmlRoutes(app) {

  app.get("/", (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')));
  app.get("/reserve", (req, res) => res.sendFile(path.join(__dirname, '../public/reserve.html')));
  app.get("/tables", (req, res) => res.sendFile(path.join(__dirname, '../public/tables.html')));

}

module.exports = htmlRoutes;