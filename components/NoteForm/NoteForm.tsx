'use client';

import { useNoteStore } from "@/lib/store/noteStore";
import { createNote } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import css from "./NoteForm.module.css";
import type { NoteTag, NewNote } from "@/types/note";

export default function NoteForm() {
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useNoteStore();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setDraft({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    const newNote: NewNote = {
  title: formData.get("title") as string,
  content: formData.get("content") as string,
  tag: formData.get("tag") as NoteTag, 
};

    await createNote(newNote);

    clearDraft();
    router.back();
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label>Title</label>
        <input
          name="title"
          value={draft.title}
          onChange={handleChange}
          className={css.input}
        />
      </div>

      <div className={css.formGroup}>
        <label>Content</label>
        <textarea
          name="content"
          value={draft.content}
          onChange={handleChange}
          className={css.textarea}
        />
      </div>

      <div className={css.formGroup}>
        <label>Tag</label>
        <select
          name="tag"
          value={draft.tag}
          onChange={handleChange}
          className={css.select}
        >
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className={css.actions}>
        <button type="button" onClick={() => router.back()}>
          Cancel
        </button>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create note"}
        </button>
      </div>
    </form>
  );
}