import axios from "axios";
import { notFound } from "next/navigation";
import { CoverProfileResponse } from "./gallery.dto";

export default async function GetCoverMembers(): Promise<CoverProfileResponse> {
  try {
    const response = await axios.get(
      "https://sakamichi.cloud/api/member/profile",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
