/**
 * Builds the two-page portfolio PDFs (Korean and English) from the site's data files.
 *
 *   npx tsx portfolio/build.ts
 *
 * Output: portfolio/portfolio-ko.pdf, portfolio/portfolio-en.pdf
 * Intermediate HTML goes to portfolio/html/ (git-ignored). Requires Google Chrome.
 */
import { writeFileSync, mkdirSync, existsSync, copyFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { locales, type Locale } from "../data/i18n";
import { ui } from "../data/ui";
import { getAboutMe } from "../data/aboutme";
import { getPublicationData } from "../data/publication";
import { getExperienceData, type Experience } from "../data/experience";
import { getEducationData } from "../data/education";
import { getActivityData } from "../data/activity";
import { getAwardData } from "../data/award";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const publicDir = path.join(root, "public");
const htmlDir = path.join(here, "html");
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/** Escapes HTML and turns **bold** spans into <strong>. */
const rich = (s: string) =>
  esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
const imgDir = path.join(htmlDir, "img");
/** Returns a file:// URL to a downscaled copy of a public image (keeps the PDFs small). */
function img(p?: string): string {
  if (!p) return "";
  const src = path.join(publicDir, p);
  const dst = path.join(imgDir, path.basename(p));
  if (!existsSync(dst)) {
    mkdirSync(imgDir, { recursive: true });
    const info = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", src]).toString();
    const [w, h] = ["pixelWidth", "pixelHeight"].map((k) => Number(info.match(new RegExp(`${k}: (\\d+)`))?.[1] ?? 0));
    // Only downscale; small images (like the profile photo) are copied as-is.
    if (Math.max(w, h) > 700) execFileSync("sips", ["-Z", "700", src, "--out", dst], { stdio: "ignore" });
    else copyFileSync(src, dst);
  }
  return `file://${dst}`;
}

/** Portfolio-only detail (not shown on the website). */
const birthDate = { ko: "2002년 8월 2일", en: "Aug 2, 2002" } as const;

const labels = {
  ko: { birthDate: "생년월일", profile: "포트폴리오", contact: "연락처", paper: "논문", page: "프로젝트 페이지", code: "코드", gpa: "GPA", advisor: "지도교수" },
  en: { birthDate: "Date of birth", profile: "Portfolio", contact: "Contact", paper: "Paper", page: "Project page", code: "Code", gpa: "GPA", advisor: "Advisor" },
} satisfies Record<Locale, Record<string, string>>;

function entry(e: Experience, t: (typeof ui)[Locale], l: (typeof labels)[Locale]) {
  const org = e.companyUrl ? `<a href="${e.companyUrl}">${esc(e.company)}</a>` : esc(e.company);
  const advisor = e.advisor ? `<p class="org">${l.advisor}: ${esc(e.advisor)}</p>` : "";
  const points = e.points?.length
    ? `<ul>${e.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul>`
    : "";
  const link = e.projectUrl
    ? `<a class="link" href="${e.projectUrl}">${esc(e.projectLabel || t.viewProjects)}</a>`
    : "";
  return `
    <article class="entry">
      <div class="entry-head">
        <h3>${esc(e.title)} <span class="org-inline">· ${org}</span></h3>
        <span class="date">${esc(e.date)}</span>
      </div>
      ${advisor}${points}${link}
    </article>`;
}

function render(locale: Locale): string {
  const t = ui[locale];
  const l = labels[locale];
  const me = getAboutMe(locale);
  const pubs = getPublicationData(locale);
  const exp = getExperienceData(locale);
  const edu = getEducationData(locale);
  const acts = getActivityData(locale);
  const awards = getAwardData(locale);
  const paras = (ps?: string[]) => (ps ?? []).map((p) => `<p>${rich(p)}</p>`).join("");

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="utf-8">
<title>${esc(me.name)} – ${l.profile}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 12mm 13mm 12mm 13mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    margin: 0; color: #27272a; font-size: ${locale === "en" ? "8.5pt" : "9pt"}; line-height: ${locale === "en" ? "1.42" : "1.45"};
    font-family: Inter, "Noto Sans KR", "Apple SD Gothic Neo", -apple-system, sans-serif;
    word-break: keep-all; overflow-wrap: anywhere;
  }
  a { color: inherit; text-decoration: none; }
  strong { font-weight: 600; color: #18181b; }
  p { margin: 0 0 4pt; }

  /* header */
  .header { display: flex; gap: 7mm; align-items: flex-start; padding-bottom: 4mm; border-bottom: 1.5px solid #18181b; margin-bottom: 4mm; }
  .photo { width: 26mm; height: 33mm; object-fit: cover; border-radius: 3mm; flex-shrink: 0; }
  .who { flex: 1; }
  .name { font-size: 20pt; font-weight: 700; letter-spacing: .01em; margin: 0 0 1mm; color: #18181b; }
  .role { font-size: 10.5pt; color: #3f3f46; margin: 0 0 1mm; }
  .loc { color: #71717a; margin: 0 0 2.5mm; }
  .contacts { display: grid; grid-template-columns: auto auto auto; gap: .6mm 6mm; font-size: 8pt; color: #52525b; }
  .updated { color: #a1a1aa; font-size: 7.8pt; margin: 2mm 0 0; }
  .contacts span.k { color: #a1a1aa; margin-right: 1.5mm; }

  /* sections */
  h2 { font-size: 10.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: #18181b;
       border-bottom: 1px solid #e4e4e7; padding-bottom: .8mm; margin: 3.4mm 0 2.2mm; break-after: avoid; }
  h2:first-of-type { margin-top: 0; }
  .intro { font-size: 9.4pt; margin-bottom: 2.5mm; }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm; }
  .cols h2 { margin-top: 2mm; }
  .cols.tight { gap: 8mm; }
  .cols.tight .entry, .cols.tight .award { margin-bottom: 0; }

  /* entries */
  .entry { margin-bottom: 2.4mm; break-inside: avoid; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
  .entry h3 { font-size: 9.8pt; font-weight: 600; margin: 0; color: #18181b; }
  .org { margin: 0; color: #52525b; }
  .org-inline { font-weight: 400; color: #52525b; }
  .meta { font-weight: 400; color: #71717a; margin-left: 2mm; }
  .date { color: #71717a; font-size: 8.6pt; white-space: nowrap; }
  ul { margin: 1mm 0 0; padding-left: 4mm; }
  li { margin: 0 0 .3mm; }
  .link { display: inline-block; margin-top: .8mm; font-size: 8.4pt; color: #71717a; text-decoration: underline; text-underline-offset: 2px; }

  /* publication */
  .pub { display: flex; gap: 5mm; align-items: flex-start; }
  .pub img { width: 36mm; border-radius: 2mm; flex-shrink: 0; }
  .pub .venue { color: #71717a; font-size: 8.6pt; margin: 0 0 1mm; }
  .pub h3 { font-size: 10pt; margin: 0 0 1mm; }
  .pub .authors { margin: 0 0 1.5mm; color: #52525b; }
  .pub .links { font-size: 8.4pt; color: #71717a; }
  .pub .links a { text-decoration: underline; text-underline-offset: 2px; margin-right: 4mm; }

  /* award */
  .award { display: flex; gap: 4mm; align-items: flex-start; margin-bottom: 2mm; break-inside: avoid; }
  .award > div { flex: 1; }
  .award p { margin-bottom: 0; }
  .award img { width: 13mm; height: 13mm; object-fit: cover; border-radius: 2mm; flex-shrink: 0; }

  .page-break { break-before: page; }
</style>
</head>
<body>

<header class="header">
  ${me.imageUrl ? `<img class="photo" src="${img(me.imageUrl)}" alt="">` : ""}
  <div class="who">
    <h1 class="name">${esc(me.name)}</h1>
    <p class="role">${esc(me.title)} · ${esc(me.institution)}</p>
    <p class="loc">${esc(me.addressOffice ?? "")}</p>
    <div class="contacts">
      <div><span class="k">Email</span>${esc(me.email)}</div>
      ${me.githubUsername ? `<div><span class="k">GitHub</span>github.com/${esc(me.githubUsername)}</div>` : ""}
      ${me.linkedinUsername ? `<div><span class="k">LinkedIn</span>linkedin.com/in/${esc(me.linkedinUsername)}</div>` : ""}
      ${me.googleScholarUrl ? `<div><span class="k">Scholar</span><a href="${me.googleScholarUrl}">Google Scholar</a></div>` : ""}
      ${me.blogUrl ? `<div><span class="k">Blog</span>${esc(me.blogUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</div>` : ""}
      <div><span class="k">Web</span>seokminlee-chris.github.io/academic-website</div>
    </div>
    <p class="updated">${l.birthDate}: ${birthDate[locale]}</p>
  </div>
</header>

<p class="intro">${rich(me.description)}</p>

<h2>${esc(t.philosophy)}</h2>
${paras(me.philosophy)}

<div class="cols">
  <div><h2>${esc(t.researchInterests)}</h2>${paras(me.researchInterests)}</div>
  <div><h2>${esc(t.engineeringInterests)}</h2>${paras(me.engineeringInterests)}</div>
</div>

<h2>${esc(t.publications)}</h2>
${pubs.map((p) => `
  <div class="pub">
    ${p.imageUrl ? `<img src="${img(p.imageUrl)}" alt="">` : ""}
    <div>
      <p class="venue">${esc(p.conference)} ${esc(p.year)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="authors">${esc(p.authors).replace(/Seokmin Lee/, "<u>Seokmin Lee</u>")}</p>
      <p class="links">
        ${p.paperUrl ? `<a href="${p.paperUrl}">${l.paper}: ${esc(p.paperUrl.replace(/^https?:\/\//, ""))}</a>` : ""}
        ${p.pageUrl ? `<a href="${p.pageUrl}">${l.page}: ${esc(p.pageUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a>` : ""}
        ${p.codeUrl ? `<a href="${p.codeUrl}">${l.code}: ${esc(p.codeUrl.replace(/^https?:\/\//, ""))}</a>` : ""}
      </p>
    </div>
  </div>`).join("")}


<h2>${esc(t.education)}</h2>
${edu.map((e) => `
  <article class="entry">
    <div class="entry-head"><h3>${esc(e.institution)}</h3><span class="date">${esc(e.date)}</span></div>
    <p class="org">${[esc(e.degree), e.gpa ? `${l.gpa} ${esc(e.gpa)}` : "", e.note ? esc(e.note) : ""].filter(Boolean).join(" · ")}</p>
  </article>`).join("")}

<div class="page-break"></div>

<h2>${esc(t.experience)}</h2>
${exp.map((e) => entry(e, t, l)).join("")}


<h2>${esc(t.activities)}</h2>
${acts.map((e) => entry(e, t, l)).join("")}


<h2>${esc(t.awards)}</h2>
<div>
  ${awards.map((a) => `
    <div class="award">
      ${a.imageUrl ? `<img src="${img(a.imageUrl)}" alt="">` : ""}
      <div>
        <div class="entry-head"><h3>${esc(a.title)} <span class="org-inline">· ${esc(a.organization)}</span></h3><span class="date">${esc(a.year)}</span></div>
        <p>${esc(a.description)}</p>
      </div>
    </div>`).join("")}
</div>

</body>
</html>`;
}

mkdirSync(htmlDir, { recursive: true });
if (!existsSync(chrome)) throw new Error(`Google Chrome not found at ${chrome}`);
const profile = path.join(tmpdir(), "portfolio-chrome-profile");

for (const locale of locales) {
  const html = path.join(htmlDir, `portfolio-${locale}.html`);
  const pdf = path.join(here, `portfolio-${locale}.pdf`);
  writeFileSync(html, render(locale));
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--no-sandbox",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer", "--virtual-time-budget=10000",
    `--print-to-pdf=${pdf}`, `file://${html}`,
  ], { stdio: "ignore" });
  console.log("wrote", path.relative(root, pdf));
}
