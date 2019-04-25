const router = require('express').Router();
const addPageLayout = require('../views/addPage')

router.get('/', (req, res, next) => {
   res.redirect('/wiki')
});

//ON HTML FORMS, changed the form, title and name attributes inside the HTML in the
//addPage.js file
router.post('/', (req, res, next) => {
  res.json(req.body)
  // console.log(req.body)
})

router.get('/wiki/add', (req, res, next) => {
  res.send(addPageLayout(''))
})

module.exports = router;
