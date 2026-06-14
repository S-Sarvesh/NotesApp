import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { getAllNotes, createNote, updateNote, deleteNote } from "./api/notes";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [error, setError] = useState(null);

  const loadNotes = async () => {
    const data = await getAllNotes();
    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleSave = async (note) => {
    try {
      setError(null);
      if (editingNote) {
        await updateNote(editingNote._id, note);
      } else {
        await createNote(note);
      }
      setEditingNote(null);
      await loadNotes();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    await loadNotes();
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      {error && <p className="error">{error}</p>}
      <NoteForm
        key={editingNote?._id || "new"}
        initialNote={editingNote}
        onSave={handleSave}
        onCancel={() => setEditingNote(null)}
      />
      <NoteList
        notes={notes}
        onEdit={setEditingNote}
        onDelete={handleDelete}
      />
    </div>
  );
}