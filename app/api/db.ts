import { Api } from "nocodb-sdk";
import { currentUser } from "@clerk/nextjs";

const api = new Api({
  baseURL: "https://nocodb.tavonni.com",
  headers: {
    "xc-token": process.env.NOCODB_TOKEN,
  },
});

export async function fetchData<T>(endpoint: string): Promise<T> {
  const baseUrl = "https://api.yourdomain.com";
  const url = `${baseUrl}/${endpoint}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API call failed with status: ${response.status}`);
  }
  return response.json() as Promise<T>;
}
