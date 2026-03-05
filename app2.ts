//create a function that takes a paramter a if it's true
import isEmail from "validator/lib/isEmail";

export function isValidEmail(a: string) {
  if (isEmail(a)) {
    return true;
  } else {
    return false;
  }
}


