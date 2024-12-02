import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState('');
  const [text, setText] = useState('');

  // Charger les commentaires au chargement
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/comments', { user, text });
      setComments([response.data, ...comments]); // Ajouter le nouveau commentaire
      setUser('');
      setText('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    }
  };

  return (
    <div>
      <h2>Commentaires</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre pseudo"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          placeholder="Votre commentaire"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      <div>
        {comments.map((comment) => (
          <div key={comment._id} style={{ margin: '10px 0' }}>
            <strong>{comment.user}</strong>
            <p>{comment.text}</p>
            <small>{new Date(comment.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
