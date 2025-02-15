import axios from "axios";
import { notFound } from "next/navigation";
import { cache } from "react";

export const GetProfile = cache(async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/get/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error at get member profile:", error);
    return notFound();
  }
});
