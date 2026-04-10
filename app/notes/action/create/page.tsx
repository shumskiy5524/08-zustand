import { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata: Metadata = {
  title: "Create New Note | NoteHub",
  description: "Page to create a new note in the Notes app",
  openGraph: {
    title: "Create New Note | NoteHub",
    description:
      "Create a new note and keep your thoughts organized in your Notes app",
    url: "https://notehub.app/notes/action/create",
    type: "website",

  
    images: [
      {
        url: "https://notehub.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Create Note Page",
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Create New Note</h1>
      <NoteForm />
    </div>
  );
}