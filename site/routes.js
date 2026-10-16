/* Shared by the browser and the static page builder. */
const Routes = {
  path(route) { return route === 'home' ? './' : `${route}/`; },
  legacy(hash, apps) {
    let route;
    try { route = decodeURIComponent(hash.replace(/^#/, '')); } catch { return null; }
    if (!/^(home|apps|journal|(?:app|article|category)\/[a-z0-9-]+)$/.test(route)) return null;
    const app = apps.find(a => a.legacyArticleSlug && route === `article/${a.legacyArticleSlug}`);
    return app ? `app/${app.id}` : route;
  },
  link(href, root, current, articles, apps) {
    if (href === '../../' || href === '../..') return new URL('./', root).href;
    if (href.startsWith('#')) {
      const route = this.legacy(href, apps);
      return route ? new URL(this.path(route), root).href : new URL(href, current).href;
    }
    // Articles imported from the old site use ../<slug>/ for related reading.
    const related = href.match(/^\.\.\/([a-z0-9-]+)\/(#.*)?$/);
    if (related && articles.some(a => a.slug === related[1])) {
      return new URL(`article/${related[1]}/${related[2] || ''}`, root).href;
    }
    return href;
  }
};
if (typeof module !== 'undefined') module.exports = Routes;
