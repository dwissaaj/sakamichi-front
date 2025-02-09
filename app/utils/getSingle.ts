import axios from "axios";
import { notFound } from "next/navigation";

export default async function getSingle() {
  try {
    const response = await axios.get(
      "https://sakamichi.cloud/api/single/partial",
    );
    if (response.status !== 200) throw new Error("Failed to fetch");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return notFound();
  }
}
