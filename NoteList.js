import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList