# アプリ・カテゴリの追加

- `site/catalog.js` のcategoriesにid/name/theme/descriptionを追加。theme未指定は共通配色。独自色はthemes.cssに `body[data-theme="id"]` として追加する。
- 同ファイルのappsへ紹介してよい情報を追加。公開済みのアプリだけを掲載する。categoryは任意。
- `site/data.js` の記事へcategoryを指定。tagsは任意の配列。本文HTMLは管理者が確認した内容のみ。
- 一覧のカテゴリ選択、タグ、記事テーマ、パンくずはデータから導出する。特定カテゴリへの専用ボタンを共通画面に追加しない。
- 登録がないアプリやカテゴリの仮カードを本番データへ混ぜない。テスト用の非家事カテゴリはscripts/library.test.cjsだけに置く。
- categoryのidと記事のcategoryを一致させる。記事の画像はsite/assetsに保存。追加後はSTGでカテゴリ・タグ・記事往復を確認する。
