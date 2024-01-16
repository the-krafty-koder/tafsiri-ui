import { languages } from "./common_languages";

/**
 * validateFlags -> Boolean
 *
 * Returns a truthy value if language is valid
 **/
const validateLanguage = (language: string) => {
    language = `${language.charAt(0).toUpperCase()}${language.slice(1)}`; // capitalize string

    if (!Object.keys(languages).includes(language)) {
        // checks if language is part of languages object
        throw new Error(`${language}: Language is currenty not supported`);
    }
    return true;
};

export { validateLanguage };
