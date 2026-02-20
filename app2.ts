//create a function that takes a paramter a if it's true
import isEmail from "validator/lib/isEmail";

export function isValidEmail(a: string) {
  if (isEmail(a)) {
    console.log(a);
    return true;
  } else {
    return false;
  }
}

isValidEmail("Hello@gmail.com");

isValidEmail("5555");
