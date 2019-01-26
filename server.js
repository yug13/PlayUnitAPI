const express = require('express');
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from PlayUnitAPI!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!"', err)
}

  console.log(`server is listening on $(port)`)
})
