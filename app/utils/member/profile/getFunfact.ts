import axios from "axios";
import { notFound } from "next/navigation";
import { FunfactResponse } from "./funfact.dto";

export default async function GetFunfact(id: string): Promise<FunfactResponse> {
  try {
    const response = await axios.get(
      `https://sakamichi.cloud/api/member/funfact/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    return notFound();
  }
}
