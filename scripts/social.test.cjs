const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {generate, pages, load} = require('./social.cjs');
const Routes = require('../site/routes.js');
const source = path.resolve(__dirname, '../site');
const catalog = load(source);

test('all registered pages get static OGP, canonical URLs and valid local assets', () => {
  const parent = path.resolve(__dirname, '../build');
  fs.mkdirSync(parent, {recursive:true});
  const temp = fs.mkdtempSync(path.join(parent, 'social-test-'));
  try {
    fs.cpSync(source,temp,{recursive:true});
    const result = generate(temp);
    assert.equal(result.length, 3 + catalog.apps.length + catalog.articles.length + catalog.categories.length);
    for (const page of result) {
      const file = path.join(temp,page.route === 'home' ? '' : page.route,'index.html');
      const html = fs.readFileSync(file,'utf8');
      for (const key of ['og:title','og:description','og:image','og:url','twitter:card','twitter:image']) {
        assert.equal(html.split(`="${key}"`).length - 1,1,`${page.route}: ${key}`);
      }
      assert.match(html, /content="summary_large_image"/);
      assert.match(html, /name="robots" content="noindex,nofollow"/);
      const base = html.match(/<base href="([^"]+)"/)[1];
      assert.equal(path.resolve(path.dirname(file),base),temp);
      assert.ok(fs.existsSync(path.join(temp,'assets',page.image)));
      const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
      assert.equal(canonical, new URL(Routes.path(page.route),'https://ing08.github.io/developing/').href);
      assert.match(html, new RegExp(`data-route="${page.route}"`));
    }
    // Exercise the actual HTML output, not only the metadata object.
    fs.copyFileSync(path.join(source,'index.html'),path.join(temp,'index.html'));
    fs.writeFileSync(path.join(temp,'data.js'),'const articles = [{slug:"quote",title:"A \\"quote\\" & title",desc:"A <description>"}];');
    generate(temp);
    const escaped = fs.readFileSync(path.join(temp,'article/quote/index.html'),'utf8');
    assert.ok(escaped.includes('content="A &quot;quote&quot; &amp; title | developING"'));
    assert.ok(escaped.includes('content="A &lt;description&gt;"'));
    fs.copyFileSync(path.join(source,'index.html'),path.join(temp,'index.html'));
    fs.writeFileSync(path.join(temp,'data.js'),'const articles = [{slug:"missing",title:"Missing",desc:"Test",ogImage:"missing.jpg"}];');
    assert.throws(()=>generate(temp),/Missing or unsupported social image/);
  } finally {
    if (!path.resolve(temp).startsWith(parent + path.sep)) throw new Error('Unsafe test cleanup');
    fs.rmSync(temp,{recursive:true,force:true});
  }
});

test('new content automatically gets a route and fallback image; invalid content fails', () => {
  const data = {articles:[{slug:'new-story',title:'A "quote" & title',desc:'A <description>'}],apps:[],categories:[]};
  assert.equal(pages(data).at(-1).image,'cat-cafe-generated.webp');
  data.articles.push({...data.articles[0]});
  assert.throws(()=>pages(data),/duplicate route/);
  data.articles=[{slug:'../escape',title:'test',desc:'test'}];
  assert.throws(()=>pages(data),/Invalid/);
  data.articles=[{slug:'empty',title:'test',desc:''}];
  assert.throws(()=>pages(data),/Missing description/);
});

test('legacy routes, related reading and section anchors work in both Pages environments', () => {
  for(const project of ['developing','developing-stg']) {
    const root=`https://ing08.github.io/${project}/`;
    const current=`${root}article/rebalancing-housework/`;
    assert.equal(Routes.legacy('#article/weekend-kaji-introduction',catalog.apps),'app/kaji');
    assert.equal(Routes.legacy('#article/media-shuffle-introduction',catalog.apps),'app/media-shuffle');
    assert.equal(Routes.legacy('#faq',catalog.apps),null);
    assert.equal(Routes.legacy('#%ZZ',catalog.apps),null);
    assert.equal(Routes.link('#app/kaji',root,current,catalog.articles,catalog.apps),root+'app/kaji/');
    assert.equal(Routes.link('#faq',root,current,catalog.articles,catalog.apps),current+'#faq');
    assert.equal(Routes.link('../../',root,current,catalog.articles,catalog.apps),root);
    assert.equal(Routes.link('../choosing-chore-apps/',root,current,catalog.articles,catalog.apps),root+'article/choosing-chore-apps/');
    assert.equal(Routes.link('https://example.com/',root,current,catalog.articles,catalog.apps),'https://example.com/');
  }
});
