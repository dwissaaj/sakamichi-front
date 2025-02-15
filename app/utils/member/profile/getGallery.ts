import axios from "axios";
import { notFound } from "next/navigation";
import { GalleryResponse } from "./gallery.dto";

export default async function GetGallery(id: string): Promise<GalleryResponse> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/gallery/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery page:", error);
    return notFound();
  }
}
