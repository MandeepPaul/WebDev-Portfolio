const express = require('express');
const router = express.Router();

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
  
  router.get("/education", function(req, res){
      res.render("education");
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
