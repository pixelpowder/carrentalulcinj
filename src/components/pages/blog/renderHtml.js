// Render a translated paragraph that may contain bare-href anchor tags
// (`<a href="/blog/xyz">…</a>`). At render time we rewrite the bare hrefs
// to include the active locale prefix (so `/blog/x` becomes `/de/blog/x`
// when lang=de), then return a __dangerousHtml__ wrapper.
//
// This lets translation strings stay simple HTML without needing JSX/<Link>.
export function localizeHtml(html, lang) {
  if (!html) return '';
  if (!lang || lang === 'en') return html;
  return html.replace(/href="(\/[^"]+)"/g, (m, p) => {
    if (/^\/(de|fr|it|ru|me|cnr)\//.test(p)) return m; // already prefixed
    return `href="/${lang}${p}"`;
  });
}
