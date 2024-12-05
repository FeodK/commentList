import React from "react";
import { useState } from "react";

export default function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <button onClick={() => handleDelete(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
