import { User } from "../../types";

// TODO: Actually validate data
export function validate(data: any): User {
  if (
    !data ||
    !data.username ||
    !data.eth_address ||
    !data.email ||
    typeof data.username !== "string" ||
    typeof data.eth_address !== "string" ||
    typeof data.email !== "string"
  ) {
    throw new Error("Invalid data");
  }
  return data as User;
}
