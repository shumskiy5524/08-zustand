'use client';

import { useNoteStore } from "@/lib/store/noteStore";
import { createNote } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { NewNote } from "@/types/note"; 
import css from "./NoteForm.module.css";

export default function NoteForm() {
  const router = useRouter();
  
  
  const { draft, setDraft, clearDraft } = useNoteStore();
  const [loading, setLoading] = useState(false);

 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
   
    setDraft({ [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
     
      await createNote(draft as NewNote);
      
    
      clearDraft();
      
      
      router.back();
    } catch (error) {
      console.error("Помилка при створенні:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleCancel = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label>Title</label>
        <input
          name="title"
          value={draft.title} 
          onChange={handleChange}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label>Content</label>
        <textarea
          name="content"
          value={draft.content} 
          onChange={handleChange}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label>Tag</label>
        <select name="tag" value={draft.tag} onChange={handleChange}>
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className={css.actions}>
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Create Note"}
        </button>
      </div>
    </form>
  );
}