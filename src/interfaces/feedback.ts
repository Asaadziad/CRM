import { toast } from "react-toastify";

export function sendSuccessMsg(message: string) {
  return toast.success(message);
}

export function sendErrorMsg(message: string) {
  return toast.error(message);
}
