import axios from "axios";
import { notFound } from "next/navigation";
import { ProfileType } from "./profile.dto";

export default async function GetProfile(id: string): Promise<ProfileType> {
  try {
    const response = await axios.get(
      `https://sakamichi.cloud/api/member/get/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
