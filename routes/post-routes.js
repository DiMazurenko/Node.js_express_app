const express = require('express');

const {
  getPost,
  deletePost,
  getEditPost,
  editPost,
  getPosts,
  addPost,
  getAddPost,
} = require('../controllers/post-controller');

const router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.get('/add-post', getAddPost);
router.get('/edit/:id', getEditPost);

router.put('/edit/:id', editPost);

router.post('/add-post', addPost);

router.delete('/posts/:id', deletePost);

module.exports = router;
