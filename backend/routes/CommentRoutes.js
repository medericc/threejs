const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// Ajouter un commentaire
router.post('/', async (req, res) => {
  const { user, text } = req.body;
  try {
    const newComment = await Comment.create({ user, text });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Récupérer tous les commentaires
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
