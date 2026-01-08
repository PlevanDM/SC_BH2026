import fs from "node:fs";
import path from "node:path";

function findTagRangeByIndex(html: string, tagName: string, startIndex: number) {
  const openTagStart = html.indexOf("<" + tagName, startIndex);
  if (openTagStart === -1) return null;

  const openTagEnd = html.indexOf(">", openTagStart);
  if (openTagEnd === -1) return null;

  const openTag = html.slice(openTagStart, openTagEnd + 1);
  if (openTag.endsWith("/>")) return { start: openTagStart, end: openTagEnd + 1 };

  let depth = 1;
  let i = openTagEnd + 1;

  const openNeedle = "<" + tagName;
  const closeNeedle = "</" + tagName;

  while (i < html.length) {
    const nextOpen = html.indexOf(openNeedle, i);
    const nextClose = html.indexOf(closeNeedle, i);

    if (nextClose === -1) return null;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      const nextOpenEnd = html.indexOf(">", nextOpen);
      if (nextOpenEnd === -1) return null;
      const nextOpenTag = html.slice(nextOpen, nextOpenEnd + 1);
      if (!nextOpenTag.endsWith("/>")) depth += 1;
      i = nextOpenEnd + 1;
      continue;
    }

    const nextCloseEnd = html.indexOf(">", nextClose);
    if (nextCloseEnd === -1) return null;
    depth -= 1;
    i = nextCloseEnd + 1;
    if (depth === 0) {
      return { start: openTagStart, end: i };
    }
  }

  return null;
}

function stripScripts(html: string) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

function rewriteInternalLinks(html: string) {
  const replacements: Array<[RegExp, string]> = [
    [/href="\/index\.html"/gi, 'href="/"'],
    [/href="index\.html"/gi, 'href="/"'],
    [/href="\/about\.html"/gi, 'href="/about"'],
    [/href="about\.html"/gi, 'href="/about"'],
    [/href="\/faq\.html"/gi, 'href="/faq"'],
    [/href="faq\.html"/gi, 'href="/faq"'],
    [/href="\/privacy\.html"/gi, 'href="/privacy"'],
    [/href="privacy\.html"/gi, 'href="/privacy"'],
    [/href="\/terms\.html"/gi, 'href="/terms"'],
    [/href="terms\.html"/gi, 'href="/terms"'],
    [/href="\/calculator\.html"/gi, 'href="/calculator"'],
    [/href="calculator\.html"/gi, 'href="/calculator"'],
  ];

  let out = html;
  for (const [re, to] of replacements) out = out.replace(re, to);
  return out;
}

function extractMainOrContainer(fullHtml: string) {
  const html = stripScripts(fullHtml);

  const mainStart = html.toLowerCase().indexOf("<main");
  if (mainStart !== -1) {
    const range = findTagRangeByIndex(html, "main", mainStart);
    if (range) return html.slice(range.start, range.end);
  }

  const containerNeedle = '<div class="container"';
  const containerStart = html.toLowerCase().indexOf(containerNeedle);
  if (containerStart !== -1) {
    const range = findTagRangeByIndex(html, "div", containerStart);
    if (range) return html.slice(range.start, range.end);
  }

  const bodyStart = html.toLowerCase().indexOf("<body");
  if (bodyStart !== -1) {
    const range = findTagRangeByIndex(html, "body", bodyStart);
    if (range) {
      const body = html.slice(range.start, range.end);
      const inner = body.replace(/^[\s\S]*?>/, "").replace(/<\/body>[\s\S]*$/i, "");
      return `<div>${inner}</div>`;
    }
  }

  return "<div></div>";
}

export function loadStaticHtml(slug: string) {
  const file = path.join(process.cwd(), "content", `${slug}.html`);
  const full = fs.readFileSync(file, "utf8");
  return rewriteInternalLinks(extractMainOrContainer(full));
}

