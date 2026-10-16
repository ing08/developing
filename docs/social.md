# SNS共有とOGP

`scripts/bundle.py build <SHA>` が `scripts/social.cjs` を呼び、ホーム・アプリ一覧・読みもの一覧・全カテゴリ・全アプリ・全記事の `index.html` を生成する。OGPは初期HTMLにあり、SNS側でJavaScriptを実行する必要はない。

- 共有URL例: `https://ing08.github.io/developing/app/kaji/`、`https://ing08.github.io/developing/article/choosing-chore-apps/`。
- タイトル・説明はcatalog.js/data.jsの既存データから取得。記事はtitle/desc、アプリはname/description、カテゴリはname/description。
- 画像は任意の `ogImage`、既存の `img`（アプリはさらにicon）、共通の `cat-cafe-generated.webp` の順。カテゴリの未指定画像は所属記事・アプリの画像を利用する。ogImageはsite/assets内のPNG/JPEG/WebPファイル名。
- ページ追加時の個別HTML編集は不要。不正・重複ルート、空の説明、指定画像の欠落はビルドを失敗させる。
- OGP、Xのsummary_large_image、canonical、通常のdescriptionを生成。ページ内のリンクも共有可能な実URLを使う。
- `#app/kaji` 等の旧リンクはブラウザで新URLへ移動する。旧記事紹介のハッシュも対応アプリへ移動。URLの `#` 以降はサーバーに送られないため、旧ハッシュURLのSNSカードはホーム共通になる。ページ別カードを出すには移動後のURLを共有する。
- 目次の `#faq` 等は同じ記事内の移動を維持。旧記事本文の `../記事slug/` は新記事URLへ解決する。

## 配備と確認

STGと本番へ同じZIPを配備するため、OGPの画像・canonical・og:urlは本番の絶対URLを固定で使う。画面内リンク・CSS・JS・画像の参照は相対基準なのでSTG内で遷移する。STGのSNSカードは本番と共有先情報が混ざり得るため、STGでは初期HTMLのメタ情報と画像ファイルを確認し、SNS上の最終表示は本番配備後に確認する。新しい画像を追加した場合、本番への昇格前はそのOGP画像URLが未配備になる点に注意。

検索公開は開始しない。全ページのnoindex,nofollowと一般クローラーのDisallowを維持し、SNSリンク展開用のクローラーだけrobots.txtで許可する。新しいSNSが独自クローラーを使う場合は、その公式仕様を確認して許可対象を追加する。

確認コマンド:

```sh
python -m unittest discover -s scripts -p 'test_*.py'
node --test scripts/*.test.cjs
python scripts/bundle.py build <40桁のソースSHA>
python -m http.server 8771 --directory build/site --bind 127.0.0.1
```

JavaScriptを実行せず取得したHTMLのOGP、画像のHTTP 200、階層ページの直接表示・再読み込み、旧リンク、記事内リンク、タグ絞り込みを確認する。SNSごとの表示形式・説明文の省略・キャッシュ更新にはサービス側の差があり、全サービスで同一の表示を保証するものではない。

仕様: [Open Graph protocol](https://ogp.me/)、[URI fragment（MDN）](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment)。

## 実装の確認記録（2026-10-16）

- 作業元: `dc67d935af9331f3e2ad92c4ad4c70dd8c2daac0`。から実装開始。QA配備時に最新STG `a9e15aba67ac2702a0e45b0fc506484da6c5dbac` へ統合し、家事紹介更新を保持。
- 対象・観点: 全10ページの初期HTML内OGP、ページと画像・説明の対応、追加時の自動生成、旧URL互換、記事内リンク、カテゴリ・タグ、配備ZIPへの収録。追加観点は検索除外とSNSクローラー許可の両立、それ以外の漏れ候補なし。
- 第1ラウンド: ハッシュ専用URL・OGP未設定を修正。リンク互換の確認で旧記事のホームリンク `../../` 1件がドメイン直下へ向く問題を修正し、回帰テストへ追加。
- 第2ラウンド: Python11件・Node5件、JS構文・差分検査・ビルド成功。内蔵ブラウザで全10ページの直接表示、画像欠落0件、旧アプリ紹介URL2件の移動、関連記事、家事分担タグ2件、写真カテゴリ0件を確認。390pxの両アプリと家事一覧にはみ出しなし。コンソールエラー0件、新規問題0件。
- QA依頼後の追加ループ: 最新STGの紹介更新を保持し、HTMLの引用符・特殊文字のエスケープと指定画像欠落時のビルド失敗も検証。Python11件・Node5件が成功。配備対象・結果はstaging.mdへ記録。公開後のSNS実サービスによる展開は未検証。
