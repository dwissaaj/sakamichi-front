import axios from "axios";
import { notFound } from "next/navigation";
import { CoverResponse } from "./gallery.dto";

export default async function getGalleryPartial(): Promise<CoverResponse> {
  try {
    const response = await axios.get(
      "https://sakamichi.cloud/api/member/gallery/partial",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
