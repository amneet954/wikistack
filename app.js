const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const layout = require('./views/layout')
const { db } = require('./models');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user')

app.use(express.static(__dirname + "/public"))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))
//app.use in line 15. If you put /wiki, this SHOULD tell the router to cut off
//'wiki' and just go to the site specified
app.use('/', wikiRouter);

app.get('/wiki', (req, res, next) => {
  res.send(layout(''))
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const intit = async () => {
  //  await models.User.sync()
  //  await models.Page.sync()
   await models.db.sync({force: true})

  app.listen(3000, () => {
  console.log('Listening on Port 1337')
  })
}

intit();
