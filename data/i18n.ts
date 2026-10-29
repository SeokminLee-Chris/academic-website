export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";

/** A string that has a Korean and an English version. */
export type L = { ko: string; en: string };

/** A text field in a data file: either shared across languages, or localized. */
export type Text = string | L;

/** Maps a source data type (with `Text` fields) to its resolved form (plain strings). */
export type Localized<T> = T extends L
  ? string
  : T extends string
    ? string
    : T extends readonly (infer U)[]
      ? Localized<U>[]
      : T extends object
        ? { [K in keyof T]: Localized<T[K]> }
        : T;

function isL(value: unknown): value is L {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.keys(value).length === 2 &&
    typeof (value as L).ko === "string" &&
    typeof (value as L).en === "string"
  );
}

/** Recursively picks the `locale` version of every `L` value inside `value`. */
export function localize<T>(value: T, locale: Locale): Localized<T> {
  if (isL(value)) return value[locale] as Localized<T>;
  if (Array.isArray(value)) {
    return value.map((item) => localize(item, locale)) as Localized<T>;
  }
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, locale)]),
    ) as Localized<T>;
  }
  return value as Localized<T>;
}

/** Path prefix for a locale (the default locale lives at the site root). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}
