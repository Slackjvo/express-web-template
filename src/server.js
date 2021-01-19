import express from 'express'
import helmet from 'helmet'
import session from 'cookie-session'
const port = process.env.PORT

// express server
const server = express()

const expiryDate = new Date( Date.now() + 60 * 60 * 1000) // 1 hour
server.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            domain: 'example.com',
            path: '/',
            expires: expiryDate
          }
  })
)

// listen for requests
server.listen(port, () => {
	console.log(`Server listening for port ${port}`)
})

// register view engine
server.set('view engine', 'ejs')

// middleware & static files
server.use(express.static('public'))

// helmet
server.use(helmet())

server.use((req, res, next) => {
	console.log('new request made:')
	console.log('host: ', req.hostname)
	console.log('path: ', req.path)
	console.log('method: ', req.method)
	next()
})

server.get('/', (req,res) => {
	const file = 'index'
	res.render(file, {title: '', css:file, fileJS:file})
})

server.use(express.json())

// 404 page
server.use((req, res) => {
	res.status(404).render('404', { title: '404' })
})