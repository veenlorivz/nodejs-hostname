const os = require('os')
const express = require('express')

const app = express()
const PORT = 5000

app.get('/', (req,res) => {	
	res.json(`Hello from ${os.hostname()}`)
})

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))
