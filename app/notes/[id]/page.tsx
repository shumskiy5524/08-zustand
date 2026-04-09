import type { Metadata } from "next";
import { fetchNoteById } from "@/lib/api";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return {
    title: note.title,
    description: note.content || "",
    openGraph: {
      title: note.title,
      description: note.content || "",
      url: `https://notehub.app/notes/${id}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        },
      ],
    },
  };
}