import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/createnote";
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes(prevnote => {
      return [...prevnote, newnote];
    });
  }

  function deleteNote(id) {
    setNotes(prevnote => {
      return prevnote.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
