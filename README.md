# developING

自作アプリと読みもの。猫カフェ風のホームを試作中。カテゴリ別テーマと共通寸法を維持。

- STG: https://ing08.github.io/developing-stg/
- 本番: https://ing08.github.io/developing/ （2026-10-16 初回公開）
- 既存家事記事: https://ing08.github.io/futari-kaji-notes/ （継続運用）
- [公開手順](docs/release.md) / [STG引継ぎ](docs/staging.md)

## 構成

`site/` は配信内容、`scripts/` はZIP作成・検証、`.github/workflows/` はCIと承認付き本番公開。
STGリポジトリは配備用ワークフローだけを持ち、サイトを直接編集しない。

## ローカル確認

```sh
python scripts/bundle.py build <40桁のソースSHA>
python -m http.server 8771 --directory build/site --bind 127.0.0.1
python -m unittest discover -s scripts -p 'test_*.py'
node --test scripts/*.test.cjs
node --check site/app.js
node --check site/data.js
```

現在はデザイン確認用の初版。タグは仮分類、管理画面・自動記事作成・GA4は未導入。
検索公開の設計が未確定のため、この初版は本番候補にもnoindexとrobots除外を残す。
検索公開を始める変更は別候補としてSTGで確認する。検索除外はアクセス制限ではない。

SNS用の静的HTMLとOGPはビルド時に生成する。SNSクローラーのみrobots.txtで許可し、全ページのnoindexと一般クローラー除外は維持する。
OGPのURLは同一ZIPの本番昇格を維持するため本番URLを指す。旧ハッシュURLは閲覧時に新URLへ移動するが、SNSで個別カードを出すには移動後のURLを共有する。詳しくは [OGP運用](docs/social.md)。

アプリとカテゴリの追加方法は [docs/content.md](docs/content.md)、画像生成のプロンプトと保存先は [docs/image-assets.md](docs/image-assets.md) を参照。
