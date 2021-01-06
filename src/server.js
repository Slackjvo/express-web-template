const express = require('express')
const helmet = require('helmet')
const port = process.env.PORT

// express app
const app = express()
// listen for requests
app.listen(port, () => {
	console.log(`Server listening for port ${port}`)
})

// register view engine
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))

// helmet
app.use(helmet())

app.use((req, res, next) => {
	console.log('new request made:')
	console.log('host: ', req.hostname)
	console.log('path: ', req.path)
	console.log('method: ', req.method)
	next()
})

app.get('/', (req,res) => {
	const file = 'index'
	res.render(file, {title: '', css:file, fileJS:file})
})

app.use(express.json())

// 404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404' })
})