
const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function(app) {

//api routes
app.get(`/api/notes`, function(req,res){
  console.log(db)
  res.json(db)
});

app.post(`/api/notes`, function(req,res){
  db.push(req.body)   //pushes data to the db array
  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), function(err) {
    if (err) throw err
      res.json("ok")
  })
 })


app.delete(`/api/notes/:id`, function(req,res){ 
  console.log(req.params.id);
  db.splice(req.params.id, 1); //splice will remove the note with the matching id in db array;
  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), function(err) {
    if (err) throw err
      res.json("ok")
  })
  

 });

};
