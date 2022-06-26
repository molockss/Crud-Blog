// all routes directly related to articles, e.g "Read more", "Edit"

const express = require ('express')
const router = express.Router() // this is a function and gives us a route we can use to do get requests, similar to the app.gets
// we have to tell our app to use this route, so we have to export the module and use it in our other js files
// similar to how we we're doing things before we used express



router.get ('/', (req, res) => {
    res.send ('In articles')
})


module.exports = router