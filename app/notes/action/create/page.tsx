
import { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata: Metadata = {
  title: "Create New Note",
  description: "Page to create a new note in the Notes app",
  openGraph: {
    title: "Create New Note",
    description: "Create a new note in your Notes app",
    url: "https://yourdomain.com/notes/action/create",
    type: "website",
  },
};

export default function CreateNotePage() {
  return (
    <div className="container">
      <h1>Create New Note</h1>
      <NoteForm />
    </div>
  );
}