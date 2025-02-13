import axios from "axios";
import { notFound } from "next/navigation";
import { GalleryResponse } from "./gallery.dto";

export default async function GetGallery(id: string): Promise<GalleryResponse> {
  try {
    const response = await axios.get(
      `https://sakamichi.cloud/api/member/gallery/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
