const  express = require('express')
const app = express()
const port = 3001

app.get('/user-list', (req, res) => {
    const data = [{
        "id": 1,
        "first_name": "Fayth",
        "last_name": "Bedson",
        "email": "fbedson0@japanpost.jp"
      }, {
        "id": 2,
        "first_name": "Mick",
        "last_name": "Bench",
        "email": "mbench1@t-online.de"
      }, {
        "id": 3,
        "first_name": "Sharlene",
        "last_name": "Jellett",
        "email": "sjellett2@last.fm"
      }];

      res.json({
        status:200,
        data
     });
})
app.listen(port, () => console.log(`User module listening on port ${port}!`))