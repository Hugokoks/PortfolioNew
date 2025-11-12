export interface MessagePayload {
  name: string;
  email: string;
  message: string;
}

export interface PostResponse {
  message: string;
  valid: boolean;
}
