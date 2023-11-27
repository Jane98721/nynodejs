const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use (express.urlencoded ({
    extended: true}));

app.get("/form", function (req, res) 
{
    res.send (`
    <form action ="/addEntry" method="post">
    <label for ="name-input"> Namn:</label>
    <input type="text" id="name-input" name="name">
<br>
<br>

    <label for="tel-input"> Telefonnummer:</label>
    <input type="tel" id="tel-input" name="tel">
<br>
<br>

        <label for ="email-input"> Email:</label>
        <input type="email" id="email-input" name="email">
<br>
<br>

        <label for="comment-input"> Kommentar:</label>
        <input type="text" id="comment-input" name="comment">
<br>
<br>

        <button type="submit"
        id="addBtn">Lägg till</button>
</form>
`);
});

app.post ('/addEntry', (req, res)
{ 
    const { name, tel, email, comment } =
    req.body
    console.log (`Name: ${name},
    Tel: ${tel}, Email: ${email}, Comment: ${comment}`);
    res.send ('Entry added');
});

let httpServer = app.listen (port, function () {
    console.log (`webbserver körs på port ${port}`);
});