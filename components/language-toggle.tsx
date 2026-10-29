import Link from "next/link";
import { Locale, locales, localePath } from "@/data/i18n";
import { ui } from "@/data/ui";

export function LanguageToggle({ current }: { current: Locale }) {
  return (
    <nav aria-label="Language" className="flex justify-end gap-3 text-xs tracking-wider">
      {locales.map((locale, i) => (
        <span key={locale} className="flex gap-3">
          {i > 0 && <span className="text-zinc-300">|</span>}
          {locale === current ? (
            <span className="text-zinc-900 font-semibold" aria-current="page">
              {ui[locale].languageName}
            </span>
          ) : (
            <Link
              href={localePath(locale)}
              hrefLang={ui[locale].htmlLang}
              className="text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              {ui[locale].languageName}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
