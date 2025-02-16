import axios from "axios";
import { notFound } from "next/navigation";

export const GetProfile = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/get/${id}`,
    );
    console.log("Profile get member");
    return response.data;
  } catch (error) {
    console.log("Error at get profile", error);
    console.error("Error at get member profile:", error);
    return notFound();
  }
};
