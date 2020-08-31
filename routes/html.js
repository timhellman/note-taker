const path = require("path");
module.exports = function(app) {



//ROUTES
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get(`/notes`,function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});



//catch all route for all other gets
app.get(`*`, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

}