import { Validator as FormValidator} from "./validator";
// import { Validator } from "./validator";

class EmailValidator implements FormValidator {
    isValid(s: string): boolean {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };