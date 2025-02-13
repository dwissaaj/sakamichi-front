import axios from "axios";
import { notFound } from "next/navigation";
import { CoverProfileResponse } from "./gallery.dto";

export default async function GetCoverMembers(): Promise<CoverProfileResponse> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/profile`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
