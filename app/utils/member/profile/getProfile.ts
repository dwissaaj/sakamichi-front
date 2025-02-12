import axios from "axios";
import { notFound } from "next/navigation";
import { cache } from "react";

export const GetProfile = cache(async (id: string) => {
  try {
    const response = await axios.get(
      `https://sakamichi.cloud/api/member/get/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
});
