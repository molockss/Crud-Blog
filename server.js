const express = require ('express')
const res = require('express/lib/response')
const articleRouter = require ('./routes/articles') // ./ is a relative path, we go into our routes folder and grab articles, no need for js since we are in js already
const app = express()

app.set ('view engine', 'ejs' )  // view engine converts ejs code to html

app.use ('/articles', articleRouter)  // we want the articles to appear after the / then everything else


app.get ('/', (req,res)=> {
    res.render ('index') // we use render as its going to access the views folder
})

app.listen(5000)