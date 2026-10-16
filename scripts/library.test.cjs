const {test}=require('node:test');
const assert=require('node:assert/strict');
const Library=require('../site/library.js');
const categories=[{id:'kaji',theme:'kaji'},{id:'games',theme:'games'}];
const articles=[{slug:'chores',category:'kaji',tags:['daily']},{slug:'play',category:'games',tags:['fun']},{slug:'other',category:'games'}];
test('article theme follows its own category, including non-housework articles',()=>{
 assert.equal(Library.themeFor('article/play',articles,categories),'games');
 assert.equal(Library.themeFor('article/chores',articles,categories),'kaji');
 assert.equal(Library.themeFor('article/missing',articles,categories),'default');
 assert.equal(Library.themeFor('journal',articles,categories),'default');
});
test('category and optional tags are isolated without changing source data',()=>{
 assert.deepEqual(Library.filter(articles,'games').map(a=>a.slug),['play','other']);
 assert.deepEqual(Library.tags(Library.filter(articles,'games')),['fun']);
 assert.equal(Library.filter(articles,'games','daily').length,0);
 assert.equal(Library.filter(articles,'','daily').length,1);
 assert.equal(articles.length,3);
});
