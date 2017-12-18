const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()


    // server.get('/example', (req, res) => {
    //   app.render(req, res, '/example')
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('>Ready on http://locahlhost:3000')
    })

  })
  .catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
  })