// lib and imports
const express = require("express");
const app = express();

const manager = require("./controllers/manager")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  // callback
  res.render('manager.ejs');
});



// All Day 
app.get('/monday',(req, res) => {
  res.render('monday.ejs');
});
app.get('/tuesday',(req, res) => {
  res.render('tuesday.ejs');
});
app.get('/wednesday',(req, res) => {
  res.render('wednesday.ejs');
});
app.get('/thursday',(req, res) => {
  res.render('thursday.ejs');
});
app.get('/friday',(req, res) => {
  res.render('friday.ejs');
});
app.get('/saturday',(req, res) => {
  res.render('saturday.ejs');
});
app.get('/sunday',(req, res) => {
  res.render('sunday.ejs');
});


app.get('/tasksOfTheDay',(req, res) => {
  res.render('today.ejs');
});


// Create here your api setup
app.post('/api/addtask', (req, res) => {
  manager.addingTask(req.body)
});
app.post('/api/loadtask', manager.displayingTask);

app.post('/api/deletetask', (req, res) => {
  manager.deletingTask(req.body)
});

app.post('/api/tasks/update', (req, res) => {
  console.log(req.body)
  manager.update(req.body)
})





app.listen(3000, () => console.log("Server Up and running"));
