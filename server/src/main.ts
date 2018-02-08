import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'html')
app.set('views', __dirname + '/../views')

app.engine('html', require('ejs').renderFile)
app.use(express.static(__dirname + '/../views'))

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../views' })
})

const port = process.env.PORT || 3000

app.listen(port)
console.log('App has started')
console.log('App running on: ' + port)
