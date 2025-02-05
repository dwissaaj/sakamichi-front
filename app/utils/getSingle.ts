import axios from "axios";
import { notFound } from "next/navigation";

export default async function getSingle() {
  const response = await axios.get("https://sakamichi.cloud/api/single/all");
  if (!response) return notFound();
  return response.data;
}
