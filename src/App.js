import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import Form from './components/Form';
import { notStrictEqual } from 'assert';

function App(props) {
    const [form, setForm] = useState(
        {
            name:"",
            email:"",
            role:"",
        }
    )

    const addNewNote = note => {
      const newNote = {
        id: Date.now(),
        name: note.name,
        email: note.email,
        role: note.role
      };
      setForm([...form, newNote]);
    };

  return (
    <div className="App">
    <Form addnewNote={addNewNote} />
    <TeamList notes={notes} />
    </div>
  );
}

export default App;

