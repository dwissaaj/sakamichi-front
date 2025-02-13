import axios from "axios";
import { notFound } from "next/navigation";
import { SocialResponse } from "./social.dto";

export default async function GetSocial(id: string): Promise<SocialResponse> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/social/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
