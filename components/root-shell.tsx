import { fontClassName } from "@/app/fonts";
import { Locale } from "@/data/i18n";
import { ui } from "@/data/ui";
import { getAboutMe } from "@/data/aboutme";
import "@/app/globals.css";

export function RootShell({
  locale,
  children,
}: Readonly<{
  locale: Locale;
  children: React.ReactNode;
}>) {
  const aboutMe = getAboutMe(locale);

  return (
    <html lang={ui[locale].htmlLang}>
      <body className={fontClassName}>
        <main>{children}</main>

        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} {aboutMe.name}.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
