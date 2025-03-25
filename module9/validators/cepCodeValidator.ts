import { Validator } from "./validator";

class CepCodeValidator implements Validator {
    isValid(s: string): boolean {
        const cepCodeRegex = /^\d{5}-?\d{3}$/;
        return cepCodeRegex.test(s);
    }
}

export { CepCodeValidator };