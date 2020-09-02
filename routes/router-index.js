const express = require('express')

// const auth = require('./auth/router-auth')

const router = express.Router()

// router.use('/auth', auth)

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: 200,
    message: 'hello from the index page'
  })
}

)

// 404 response
router.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'The page you are trying to visit does not exist'
  })
})

module.exports = router