const  express = require('express')
const app = express()
const port = 3000

app.get('/sellerlist', (req, res) => {
    const data = [{
        "id": 1,
        "first_name": "Caroline",
        "last_name": "Haresnaip",
        "email": "charesnaip0@gravatar.com",
        "role": "seller"
      }, {
        "id": 2,
        "first_name": "Rolando",
        "last_name": "Maulin",
        "email": "rmaulin1@cdc.gov",
        "role": "seller"
      }, {
        "id": 3,
        "first_name": "Babs",
        "last_name": "Huffadine",
        "email": "bhuffadine2@ow.ly",
        "role": "seller"
      }];

     res.json({
        status:200,
        data
     });
})
app.listen(port, () => console.log(`Seller module listening on port ${port}!`))