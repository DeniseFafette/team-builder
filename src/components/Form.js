import React, { useState } from 'react';
import { notEqual } from 'assert';

const TeamForm = props => {
    const [note, setNote] = useState({ name: "", email: "", role: "" });

    const handleChanges = event => {
        setNote({ ...note, [event.target.name]: event.target.value });
        console.log(event.target.name);
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewNote(note);
        setNote({ name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <label for="name">Name</label>
            <input 
            id="name" 
            type="text" 
            name="name"
            onChange={handleChanges}
            value={note.name} />
            <label for="email">Email</label>
            <input 
            id="email" 
            type="text" 
            name="email"
            onChange={handleChanges}
            value={note.name} />
            <label for="role">Role</label>
            <input 
            id="role" 
            type="text" 
            name="role"
            onChange={handleChanges}
            value={note.name} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TeamForm;