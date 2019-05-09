//exports.getPosts = (req,res) => res.send("Hi from routes folder.");
const express = require('express');
const postController = require('../controllers/post')
const router = express.Router();
router.get('/',postController.getPosts);
router.get('/api/users',postController.getUsers);

module.exports = router;