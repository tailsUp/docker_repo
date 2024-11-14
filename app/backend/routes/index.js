const express = require('express');
const router = express.Router();
const configs = require('../util/config')
const { getAsync } = require('../redis/index');

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {

  visits++
  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const count = await getAsync("added_todos")
  if(count === null) 
  {
    console.log('NULL')
    res.send({
      'added_todos': JSON.parse(0)
    })  
  } else {
    console.log('count', count)
    res.send({
      'added_todos': JSON.parse(count)
    })
  }
})

module.exports = router;
