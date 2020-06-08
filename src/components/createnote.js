import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevnote => {
            return {
                ...prevnote,
                [name]: value
            };
        });
    }

    function submitnote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitnote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
