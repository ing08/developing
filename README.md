# developING

自作アプリと読みもの。明るいゲームメニュー風のホームとカテゴリ別テーマ。

- STG: https://ing08.github.io/developing-stg/
- 本番予定: https://ing08.github.io/developing/ （初回リリース未承認・未公開）
- 既存家事記事: https://ing08.github.io/futari-kaji-notes/ （継続運用）
- [公開手順](docs/release.md) / [STG引継ぎ](docs/staging.md)

## 構成

`site/` は配信内容、`scripts/` はZIP作成・検証、`.github/workflows/` はCIと承認付き本番公開。
STGリポジトリは配備用ワークフローだけを持ち、サイトを直接編集しない。

## ローカル確認

```sh
python -m http.server 8771 --directory site --bind 127.0.0.1
python -m unittest discover -s scripts -p 'test_*.py'
node --check site/app.js
node --check site/data.js
```

現在はデザイン確認用の初版。タグは仮分類、管理画面・自動記事作成・GA4は未導入。
検索公開の設計が未確定のため、この初版は本番候補にもnoindexとrobots除外を残す。
検索公開を始める変更は別候補としてSTGで確認する。検索除外はアクセス制限ではない。
