const Library = {
  categoryFor(article, categories) { return categories.find(c => c.id === article?.category); },
  themeFor(route, articles, categories) {
    const [kind, id] = route.split('/');
    const category = kind === 'article' ? this.categoryFor(articles.find(a => a.slug === id), categories)
      : kind === 'category' ? categories.find(c => c.id === id) : null;
    return category?.theme || 'default';
  },
  filter(articles, category = '', tag = '') {
    return articles.filter(a => (!category || a.category === category) && (!tag || (a.tags || []).includes(tag)));
  },
  tags(articles) { return [...new Set(articles.flatMap(a => a.tags || []))]; }
};
if (typeof module !== 'undefined') module.exports = Library;
