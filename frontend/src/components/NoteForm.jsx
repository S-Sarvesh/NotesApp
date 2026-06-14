import { useState } from "react";

export default function NoteForm({ initialNote, onSave, onCancel }) {
  const [title, setTitle] = useState(initialNote?.title || "");
  const [content, setContent] = useState(initialNote?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <div className="form-actions">
        <button type="submit">{initialNote ? "Update" : "Add"} Note</button>
        {initialNote && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}