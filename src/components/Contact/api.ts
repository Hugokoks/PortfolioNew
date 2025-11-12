import { api } from "../../config";
import type { MessagePayload, PostResponse } from "./types";

export default async function postMessage(payload: MessagePayload) {
  try {
    const response = await api.post<PostResponse>("api/message", payload);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Server responded with error:", error.response.data);
    throw error;
  }
}
