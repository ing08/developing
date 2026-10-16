# STG確認から本番公開まで

## 環境

| 用途 | リポジトリ | 公開URL |
|---|---|---|
| 正本・本番 | ing08/developing | https://ing08.github.io/developing/ |
| 確認環境 | ing08/developing-stg | https://ing08.github.io/developing-stg/ |

両方public。無料のGitHub PagesとActionsを使用し、有料サービスやリポジトリ間共有秘密鍵を追加しない。
STGの開始は手動dispatch。開始後の検査・公開はActionsが自動実行する。pushだけではSTG・本番は更新されない。
STGは検索除外・解析なし。この初版では完全に同一のZIPを昇格させるため、本番候補も検索除外・解析なし。検索公開と計測導入は別変更で扱う。

## 1. 変更・検証

1. 正本でコード・記事を変更し、品質ループ・Pythonテスト・JS構文検査を実行。
2. 変更をコミット・pushし、Check workflow成功を確認。公開前提の変更のみ含める。
3. docs/staging.mdのQA対象とSTGのversion.jsonを照合する。確認中なら対象切替を合意する。

## 2. STGへ配備

```sh
gh workflow run stage.yml --repo ing08/developing-stg --ref main -f source_sha=<正本の完全な40桁SHA>
gh run list --repo ing08/developing-stg --workflow stage.yml
```

成功run ID、ソースSHA、candidate/manifest.jsonのZIP SHA256を記録。公開version.jsonが同じSHAであることを確認。
本人へ固定URL、対象SHA、run ID、変更点、確認操作を渡す。表示した版の確認には `/version.json` を使う。
エージェント検証と本人QAは別。本人QA後に見た目・動作・記事が変われば、新候補で再確認。

## 3. 本番を承認して公開

本人QA合格と対象付きの本番公開指示を受けてから実行する。ワークフロー入力のQA記録は承認の代替ではない。

```sh
gh workflow run release.yml --repo ing08/developing --ref main -f staging_run_id=<成功STG run ID> -f qa_note='<日時・対象SHA・本人QA結果・公開指示>'
```

prepareがSTG成功状態・workflow名・branchを検査してcandidateを取得し、ZIPと全ファイルのSHA256を検証する。
`production`環境で停止するので、本人がGitHub ActionsのReview deploymentsから承認する。エージェントはこのゲートを代行解除しない。
同じZIPの内容を再ビルドなしでPagesへ配備し、公開version.jsonを検証する。リリースノートとZIP/manifestをGitHub Releaseへ保存する。
GitHub Releaseのタグは配備workflowのコミットを指す。実際のサイトソースSHAはmanifestとRelease本文を正とする。

## 4. 公開後・復旧

- 本番URLのホーム、カテゴリ、記事、画像、タグ、スマホ表示を確認。source SHAがQA対象と同じか照合。
- docs/staging.mdを更新し、本番run・Release URL・検証結果を記録。初回公開は旧サイトからの移行を意味しない。
- 配備後のsmokeまたはRelease保存が失敗した場合、本番が既に更新されている可能性がある。公開SHAとrunを確認し、単純な「未公開」と判断しない。
- STG artifactは90日で期限切れ。期限切れの場合は同じソースSHAを再配備・再QA。失われた成果物を再ビルドして確認済み扱いしない。
- 過去に公開した版へ戻す場合はGitHub Release保存済みのZIPを用いる。本人の復旧指示を受け、同じproduction承認を通す。

```sh
gh workflow run release.yml --repo ing08/developing --ref main -f rollback_tag=deploy-<run>-<attempt> -f qa_note='<復旧の対象・理由・本人指示>'
```

staging_run_idとrollback_tagは排他。既存サイトfutari-kaji-notesへはこのworkflowから配備しない。

## 初期設定

Pagesは両repoともGitHub Actions source。本番のproduction環境にrequired reviewer ing08、管理者バイパス禁止、main branch限定を設定。
本人が実行したworkflowも本人が承認できるようprevent_self_review=false。自動エージェントによる承認禁止はAGENTS.mdにも記載する。
STGのgithub-pages環境はmain branch限定。GITHUB_TOKENは各repoのPages権限のみ。STGは公開正本をread-only checkoutする。
