const express = require('express')
const app = express()
const port = 3000

app.get('/:id/l', (req, res) => {
    console.log(req.params);
  res.send('qq')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})