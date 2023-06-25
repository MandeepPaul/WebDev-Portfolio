const express = require('express');
const router = express.Router();
const fs = require("fs");

// Import the Users model if needed
const Users = require('../models/userInfo');

module.exports = function(app) {
  // Define routes
  router.get("/", function(req, res){
      res.render("about");
  });
  
  router.get("/skills", function(req, res){
      res.render("skills");
  });
  
  router.get("/projects", function(req, res){
      res.render("projects");
  });
  
  router.get("/education", async function(req, res){
    try {
      const data = await fs.promises.readFile("routes/courses.json");
      const courseInfo = JSON.parse(data);
      //console.log(courseInfo);
      res.render("education", courseInfo);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
  
  router.get("/contact", function(req, res){
      res.render("contact");
  });
  
  router.post("/submit", function(req, res) {
      if (!req.body.uname || !req.body.uemail || !req.body.umessage) {
          // Making sure that required fields are not empty!
          res.render('contact', { message: 'Required fields cannot be empty!' });
      } else {
          const user = new Users(req.body);
          // console.log(user.uname);
          // console.log(user.uemail);
          // console.log(user.umessage);
          user.save()
              .then(() => {
                  res.render('contact', { message: 'Thanks for contacting! Will get in touch soon.' });
              })
              .catch(err => {
                  res.status(400).json({ error: err });
              });
      }
  });
  
  return router;
};
