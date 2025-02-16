import axios from "axios";
import { notFound } from "next/navigation";
import { GetSingleResponse } from "./single.dto";

export default async function GetSingle(): Promise<GetSingleResponse> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/single/partial`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching single", error);
    return notFound();
  }
}
