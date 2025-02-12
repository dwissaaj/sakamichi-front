import axios from "axios";
import { notFound } from "next/navigation";
import { SocialResponse } from "./social.dto";

export default async function GetSocial(id: string): Promise<SocialResponse> {
  try {
    const response = await axios.get(
      `https://sakamichi.cloud/api/member/social/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
