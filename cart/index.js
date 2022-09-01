const  express = require('express')
const app = express()
const port = 3002

app.get('/cartlist', (req, res) => {
    const data = [{
        "id": 1,
        "product_id": {
          "$oid": "630ef9bcfc13ae7e9c000014"
        },
        "userid": {
          "$oid": "630ef9bcfc13ae7e9c000015"
        },
        "product_name": "Soup - Campbells Beef Stew",
        "price": "$6.45",
        "qty": 9
      }, {
        "id": 2,
        "product_id": {
          "$oid": "630ef9bcfc13ae7e9c000016"
        },
        "userid": {
          "$oid": "630ef9bcfc13ae7e9c000017"
        },
        "product_name": "Port - 74 Brights",
        "price": "$6.07",
        "qty": 6
      }];

      res.json({
        status:200,
        data
     });
})

app.listen(port, () => console.log(`Cart module listening on port ${port}!`))