//create a function that takes a paramter a if it's true
import isEmail from "validator/lib/isEmail";

function isValidEmail(a: string) {
  if (isEmail(a)) {
    console.log(a, "is a valid email");
  } else {
    console.log(a, "is not a valid email");
  }
}

isValidEmail("Hello@gmail.com");

isValidEmail("5555");
