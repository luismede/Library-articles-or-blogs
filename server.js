const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const app = express();

let initial_path = path.join(__dirname, "public");

app.use(express.static(initial_path));
app.use(fileUpload());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

// upload link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
    })
})


app.get("/:artigo", (req, res) => {
    res.sendFile(path.join(initial_path, "artigos.html"));
})

app.use((req, res) => {
    res.json("404");
})


app.listen("80", () => {
    console.log('listening......');
});
