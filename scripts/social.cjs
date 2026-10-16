/* Generate real HTML URLs: social crawlers do not execute the hash router. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Routes = require('../site/routes.js');
const ORIGIN = 'https://ing08.github.io/developing/';
const FALLBACK = 'cat-cafe-generated.webp';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function load(site) {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(site, 'data.js'), 'utf8') + '\n' +
    fs.readFileSync(path.join(site, 'catalog.js'), 'utf8') +
    '\n;globalThis.catalog = {articles, apps, categories};', context, {timeout: 1000});
  return context.catalog;
}

function pages({articles, apps, categories}) {
  const result = [
    {route:'home', title:'developING — アプリと読みもの', description:'つくったアプリと、日々の読みもの。猫のいるカフェでひと息つくように、気になるアプリや記事をどうぞ。'},
    {route:'apps', title:'アプリ | developING', description:'日々の「こんなのあったら」をかたちに。developINGでつくったアプリを紹介します。'},
    {route:'journal', title:'読みもの | developING', description:'暮らしのこと、つくったもののこと。ふたりの家事や道具選びなど、日々のヒントを紹介します。'},
    ...categories.map(c => ({route:`category/${c.id}`, title:`${c.name}の読みもの | developING`, description:c.description,
      image:c.ogImage || articles.find(a => a.category === c.id && a.img)?.img || apps.find(a => a.category === c.id && a.img)?.img})),
    ...apps.map(a => ({route:`app/${a.id}`, title:`${a.name} | developING`, description:a.description, image:a.ogImage || a.img || a.icon})),
    ...articles.map(a => ({route:`article/${a.slug}`, title:`${a.title} | developING`, description:a.desc, image:a.ogImage || a.img, type:'article'}))
  ];
  const seen = new Set();
  for (const page of result) {
    if (!/^(home|apps|journal|(?:app|article|category)\/[a-z0-9-]+)$/.test(page.route) || seen.has(page.route)) throw new Error(`Invalid or duplicate route: ${page.route}`);
    if (!page.description?.trim()) throw new Error(`Missing description: ${page.route}`);
    seen.add(page.route);
    page.image ||= FALLBACK;
  }
  return result;
}

function generate(site) {
  const catalog = load(site);
  const entries = pages(catalog);
  const template = fs.readFileSync(path.join(site, 'index.html'), 'utf8');
  for (const page of entries) {
    const imagePath = path.resolve(site, 'assets', page.image);
    if (!imagePath.startsWith(path.resolve(site, 'assets') + path.sep) || !fs.existsSync(imagePath) || !/\.(png|jpe?g|webp)$/i.test(page.image)) throw new Error(`Missing or unsupported social image: ${page.image}`);
    const url = new URL(Routes.path(page.route), ORIGIN).href;
    const image = new URL(`assets/${page.image}`, ORIGIN).href;
    const meta = [
      ['name','description',page.description], ['property','og:title',page.title],
      ['property','og:description',page.description], ['property','og:type',page.type || 'website'],
      ['property','og:url',url], ['property','og:site_name','developING'], ['property','og:locale','ja_JP'],
      ['property','og:image',image], ['property','og:image:alt',`${page.title}の紹介画像`],
      ['name','twitter:card','summary_large_image'], ['name','twitter:title',page.title],
      ['name','twitter:description',page.description], ['name','twitter:image',image],
      ['name','twitter:image:alt',`${page.title}の紹介画像`]
    ].map(([attribute,key,value]) => `<meta ${attribute}="${key}" content="${escape(value)}">`).join('\n');
    const base = page.route === 'home' ? './' : '../'.repeat(page.route.split('/').length);
    let html = template.replace('<html lang="ja">', `<html lang="ja" data-route="${page.route}">`)
      .replace('<head>', `<head><base href="${base}">`)
      .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>\n${meta}\n<link rel="canonical" href="${url}">`)
      .replace('<main id="main" tabindex="-1"></main>', `<main id="main" tabindex="-1"><h1>${escape(page.title)}</h1><p>${escape(page.description)}</p></main>`)
      .replace(/href="#(home|apps|journal)"/g, (_, route) => `href="${Routes.path(route)}"`);
    const destination = page.route === 'home' ? site : path.join(site, page.route);
    fs.mkdirSync(destination, {recursive:true});
    fs.writeFileSync(path.join(destination, 'index.html'), html);
  }
  return entries;
}
if (require.main === module) console.log(`Generated ${generate(process.argv[2]).length} social pages`);
module.exports = {generate, pages, load};
