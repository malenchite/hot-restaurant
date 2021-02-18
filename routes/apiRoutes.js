const express = require("express");
var tableData = require("../data/tableData");
var waitinglistData = require("../data/waitinglistData");

function apiRoutes(app) {

  app.get("/api/tables", (req, res) => {
    res.json(tableData);
  });

  app.get("/api/waitlist", (req, res) => {
    res.json(waitinglistData);
  });

  app.post("/api/tables", (req, res) => {
    const newCustomer = req.body;

    if (tableData.length < 5) {
      tableData.push(newCustomer);
      return res.json(true);
    } else {
      waitinglistData.push(newCustomer);
      return res.json(false);
    }
  });

  app.post("/api/clear", (req, res) => {
    tableData = [];
    waitinglistData = [];
    res.end();
  });
}

module.exports = apiRoutes;