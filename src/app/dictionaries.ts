import 'server-only';

// Define a type for the supported locales
export type Locale = 'en' | 'fa';

// Define the type for the dictionaries object
const dictionaries: Record<Locale, () => Promise<any>> = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    fa: () => import('./dictionaries/fa.json').then((module) => module.default),
};

// Update the getDictionary function to use the Locale type
export const getDictionary = async (locale: Locale): Promise<any> => {
    const dictionaryLoader = dictionaries[locale];

    if (!dictionaryLoader) {
        throw new Error(`Locale "${locale}" is not supported.`);
    }

    return dictionaryLoader();
};