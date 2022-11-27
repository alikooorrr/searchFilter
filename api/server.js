const express = require('express')
const cors = require('cors')
const Users = require('./users')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    let { q } = req.query
    const keys = ['first_name','last_name','email']
    let searchFunc = (data) => {
      return data.filter(item => 
          keys.some(key => item[key].toLowerCase().includes(q)))
    }
    return res.json(searchFunc(Users))
})

app.listen(5000, () => {
    console.log('Server is starting...')
})