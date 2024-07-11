import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error(error));
  }, []);

  const addNote = (note) => {
    axios.post('/api/notes', note)
      .then(response => setNotes([...notes, response.data]))
      .catch(error => console.error(error));
  };

  const deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
      .then(() => setNotes(notes.filter(note => note._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1>Note Taking App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;