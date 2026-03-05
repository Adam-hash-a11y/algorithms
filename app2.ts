import isEmail from "validator/lib/isEmail";

export function isValidEmail(a: string) {
  if (isEmail(a)) {
    return true;
  } else {
    return false;
  }
}
