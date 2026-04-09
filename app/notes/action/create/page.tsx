import NoteForm from "@/components/NoteForm/NoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create note",
  description: "Page for creating a new note",
  openGraph: {
    title: "Create note",
    description: "Page for creating a new note",
    url: "https://notehub.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main>
      <div>
        <h1>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}