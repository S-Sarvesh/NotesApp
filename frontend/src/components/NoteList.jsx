import NoteCard from "./NoteCard";

export default function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) return <p>No notes yet.</p>;

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note._id)}
        />
      ))}
    </div>
  );
}