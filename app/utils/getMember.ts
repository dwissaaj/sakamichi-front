import axios from "axios";
import { notFound } from "next/navigation";
import { CoverResponse } from "../(member)/member/member.dto";

export default async function getMember(): Promise<CoverResponse> {
  try {
    const response = await axios.get<CoverResponse>(
      "https://sakamichi.cloud/api/member/gallery/partial",
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
