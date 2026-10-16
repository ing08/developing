const main = document.querySelector('main');
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const art = app => `<div class="media ${escapeHTML(app.artClass || '')}"><div class="app-art-inner"><div class="app-symbol" aria-hidden="true">${escapeHTML(app.symbol || app.name.slice(0,1))}</div><div class="app-title">${escapeHTML(app.name)}</div></div></div>`;
const appCard = app => `<a class="card" href="#app/${encodeURIComponent(app.id)}">${art(app)}<div class="card-content"><div class="meta"><span class="badge">アプリ</span></div><h3>${escapeHTML(app.name)}</h3><p>${escapeHTML(app.description)}</p><div class="card-end">紹介を読む<span class="arrow" aria-hidden="true">→</span></div></div></a>`;
const card = article => {
  const category = Library.categoryFor(article, categories);
  return `<a class="card" href="#article/${encodeURIComponent(article.slug)}"><div class="media"><img src="assets/${escapeHTML(article.img)}" alt="" width="1536" height="1024"></div><div class="card-content"><div class="meta"><span class="badge">${escapeHTML(category?.name || '読みもの')}</span><time>${escapeHTML(article.date)}</time></div><h3>${escapeHTML(article.title)}</h3><p>${escapeHTML(article.desc)}</p><div class="card-end">読んでみる<span class="arrow" aria-hidden="true">→</span></div></div></a>`;
};
const head = (title, sub, eyebrow='LIBRARY') => `<div class="page-head"><div class="crumb"><a href="#home">ホーム</a> / ${escapeHTML(title)}</div><span class="eyebrow">${escapeHTML(eyebrow)}</span><h1>${escapeHTML(title)}</h1><p>${escapeHTML(sub)}</p></div>`;
function renderListing(categoryId = '') {
  const category = categories.find(c => c.id === categoryId);
  if (categoryId && !category) { main.innerHTML=head('カテゴリが見つかりません','メニューから読みものを選んでください。'); return; }
  const scoped = Library.filter(articles, categoryId);
  main.innerHTML = head(category ? `${category.name}の読みもの` : '読みもの', category?.description || '暮らしのこと、つくったもののこと。気になる話をどうぞ。', category?.eyebrow || 'JOURNAL') + `
    <div class="filters">
      <div class="filter-field"><label for="category">カテゴリ</label><select id="category"><option value="">すべて</option>${categories.map(c => `<option value="${escapeHTML(c.id)}" ${c.id===categoryId?'selected':''}>${escapeHTML(c.name)}</option>`).join('')}</select></div>
      <div class="filter-field"><label for="tag">タグ</label><select id="tag"><option value="">すべて</option>${Library.tags(scoped).map(t => `<option>${escapeHTML(t)}</option>`).join('')}</select></div>
      <span id="count" class="muted" role="status">${scoped.length}件</span>
    </div><div class="grid" id="results">${scoped.length ? scoped.map(card).join('') : '<p>このカテゴリの記事はまだありません。</p>'}</div>`;
  document.querySelector('#category').addEventListener('change', e => { location.hash=e.target.value ? `category/${encodeURIComponent(e.target.value)}` : 'journal'; });
  document.querySelector('#tag').addEventListener('change', e => {
    const result=Library.filter(articles,categoryId,e.target.value);
    document.querySelector('#results').innerHTML=result.length?result.map(card).join(''):'<p>条件に合う記事はありません。</p>';
    document.querySelector('#count').textContent=result.length+'件';
  });
}
function render() {
  const route=location.hash.slice(1)||'home';
  const [kind,id]=route.split('/');
  document.body.dataset.theme=Library.themeFor(route,articles,categories);
  document.querySelectorAll('nav a').forEach(a=>{
    const active=a.hash==='#'+(route==='home'?'home':kind==='app'||route==='apps'?'apps':'journal');
    if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
  if(route==='home') {
    main.innerHTML=`<section class="hero"><div><span class="eyebrow">APPS & STORIES BY ING</span><h1>つくったアプリと、<br>日々の読みもの。</h1><p>猫のいるカフェで、ひと息つくように。<br>気になるアプリや記事を、ゆっくりどうぞ。</p><div class="hero-links"><a href="#apps">アプリを見にいく <span aria-hidden="true">→</span></a><a href="#journal">読みものを選ぶ <span aria-hidden="true">→</span></a></div></div><figure class="cafe-scene"><img src="assets/cat-cafe-generated.webp" width="1200" height="800" alt="陽の差す猫カフェで、ソファに眠る茶トラ猫。本とお茶を置いた木のテーブル"></figure></section><section class="section"><div class="section-head"><h2>アプリ<small>APPS</small></h2><a href="#apps">すべて見る →</a></div><div class="grid">${apps.map(appCard).join('')}${apps.length===1?'<div class="shelf-note"><span class="eyebrow">FROM MY LITTLE WORKSHOP</span><h2>小さくつくって、楽しむ。</h2><p>日々の「こんなのあったら」を、少しずつかたちに。自分でつくったアプリをここに並べています。</p></div>':''}</div></section><section class="section"><div class="section-head"><h2>読みもの<small>JOURNAL</small></h2><a href="#journal">すべて見る →</a></div><div class="grid">${articles.map(card).join('')}</div></section>`;
  } else if(route==='apps') {
    main.innerHTML=head('アプリ','こんなの、つくりました。','APPS')+`<div class="grid">${apps.map(appCard).join('')}</div>`;
  } else if(kind==='app') {
    const app=apps.find(a=>a.id===id);
    if(!app)main.innerHTML=head('アプリが見つかりません','メニューからアプリを選んでください。');
    else {
      const category=categories.find(c=>c.id===app.category);
      const hasReading=category && Library.filter(articles,category.id).length>0;
      main.innerHTML=head(app.name,app.description,'APPS')+`<div class="app-introduction"><div>${art(app)}</div><section><h2>${escapeHTML(app.heading || app.name)}</h2><p>${escapeHTML(app.body)}</p></section></div>${hasReading?`<aside class="app-reference" aria-label="参考の読みもの"><h2>参考の読みもの</h2><p>このテーマについて、もう少し読んでみたい方へ。</p><a href="#category/${encodeURIComponent(category.id)}">${escapeHTML(category.name)}の読みものを見る <span aria-hidden="true">→</span></a></aside>`:''}`;
    }
  } else if(route==='journal'||kind==='category') renderListing(kind==='category'?id:'');
  else if(kind==='article') {
    const article=articles.find(a=>a.slug===id);
    if(!article)main.innerHTML=head('記事が見つかりません','メニューから読みものを選んでください。');
    else {
      const category=Library.categoryFor(article,categories);
      main.innerHTML=`<div class="page-head article-heading"><div class="crumb"><a href="#journal">読みもの</a>${category?` / <a href="#category/${encodeURIComponent(category.id)}">${escapeHTML(category.name)}</a>`:''}</div><span class="eyebrow">${escapeHTML(category?.eyebrow||'JOURNAL')}</span><h1>${escapeHTML(article.title)}</h1><p>${escapeHTML(article.desc)}</p><div class="tags">${(article.tags||[]).map(t=>`<span>#${escapeHTML(t)}</span>`).join('')}</div><time class="muted">${escapeHTML(article.date)}</time></div><article class="reader">${article.body}<a class="back-link" href="#journal">← 読みもの一覧へ</a></article>`;
    }
  } else main.innerHTML=head('ページが見つかりません','メニューから行き先を選んでください。');
  document.title=(main.querySelector('h1')?.textContent||'ホーム')+' | developING';
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',()=>{render();main.focus({preventScroll:true});});
render();
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
