import axios from "axios";
import { notFound } from "next/navigation";
import { FunfactResponse } from "./funfact.dto";

export default async function GetFunfact(id: string): Promise<FunfactResponse> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/member/funfact/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
