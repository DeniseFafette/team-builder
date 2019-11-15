import React from 'react';

const Notes = props => {
    return (
        <div className="team-list">
            {props.notes.map(note => (
                <div className="note" key={note.id}>
                    <h4>{note.name}</h4>
                    <p>{note.email}</p>
                    <p>{note.role}</p>
                    </div>
            ))}
        </div>
    );
};

export default Notes;

// let data = [
//     {
//         id: 1,
//         name: 'Denise Fafette',
//         email: 'denisefafette@gmail.com',
//         role: 'UX Engineer'
//     },
//     {
//         id: 2,
//         name: 'Melina Gregorian',
//         email: '',
//         role: 'Python Developer'
//     },
//     {
//         id: 3,
//         name: 'Jessie Vasquez',
//         email: '',
//         role: 'UX Reseacher'
//     }
// ]

//export default data;