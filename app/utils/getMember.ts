import axios from "axios";
import { notFound } from "next/navigation";

export default async function getMember() {
  const response = await axios.get("https://sakamichi.cloud/api/member/all");
  if (!response) return notFound();
  return response.data;
}
