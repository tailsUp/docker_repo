const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET SINGLE. */
singleRouter.get('/', async (req, res) => {
  console.log('Get todo with ID');
  const todo = await Todo.findById(req.todo.id)
  res.send(todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  console.log('Update todo with ID')
  try {
    Todo.replaceOne({ _id: req.todo.id }, 
      { text: req.body.text, done: req.body.done }) 
       .then(result => { 
          console.log(result)
          res.send(204) //Resource updated succesfully
      })
  } catch(error) {
    res.send(400)
  }

  //res.sendStatus(405); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;