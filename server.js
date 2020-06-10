// creates server //
var express = require("express"); 
var path = require("path");
var fs = require("fs");
var PORT = 3001;

// need to set up fs module
// Sets up the Express App

var app = express();


// Sets up the Express app to handle data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
// notes (DATA)


// Here we use the fs package to read our index.html file
fs.readFile(__dirname + "/index.html", function(err, data) {
  if (err) throw err;
  // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
  // an html file.
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(data);
});


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page 1
app.get("/notes", function(req, res) {
  
  res.sendFile(path.join(__dirname + "/public", "notes.html"));
});



// Displays all notes
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

app.delete("/api/notes", function(req, res){} )
  


// Displays a single note, or returns false
app.get("/api/notes/:note", function(req, res) {
  var chosen = req.params.notes;

  console.log(chosen);

  for (var i = 0; i < notes.length; i++) {
    if (chosen === notes[i].routeName) {
      return res.json(notes[i]);
    }
  }

  return res.json(false);
});

// Create New notes - takes in JSON input
app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNotes = req.body;

  console.log(newNotes);

  // We then add the json the user sent to the character array
  notes.push(newNotes);

  // We then display the JSON to the users
  res.json(newNotes);
});
app.get("*", function(req, res) {
  
  res.sendFile(path.join(__dirname + "/public", "index.html"));
});

app.get("/api/notes/id:", function(req, res) {
  
  res.sendFile(path.join(__dirname + "/db", "db.json"));
});

app.delete("/api/notes/id:", function(req, res){} )




// starts server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

