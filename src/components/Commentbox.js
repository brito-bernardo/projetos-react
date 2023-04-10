import React, { useState } from "react";
import '../styles/Commentbox.css'

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { title, comment };
    setComments([...comments, newComment]);
    setTitle("");
    setComment("");
  };

  return (
    <div className="comment-box">
      <h2 className="comment-title">Habilidade extra:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <h3>{comment.title}</h3>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Descrição:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button type="submit" className="comment-button">Adicionar habilidade</button>
      </form>
    </div>
  );
};

export default CommentBox;
