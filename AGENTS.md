# developING 作業ルール

- 最初に README.md、docs/release.md、docs/staging.md を読む。サイトコード・記事・リリース手順はこのリポジトリが正本。
- 実装依頼は品質ループとSTG配備まで。本番公開は対象付き本人QA合格・明示的公開指示の両方が必要。過去の承認を新変更に流用しない。
- STGは共有QA枠。docs/staging.mdと公開version.jsonを照合し、確認中の対象を無断で置き換えない。
- STGは完全なソースSHAを指定する。本番は成功したSTG runのZIPを再ビルドせず昇格。確認後に配信物を変更したら再QA。
- production環境のrequired reviewerはing08。エージェントは承認APIでゲートを解除しない。本人がGitHubで承認する。
- 既存 futari-kaji-notes の公開サイト・URLは別途移行承認まで変更しない。
- 個人情報、未公開アプリURL、公開予告、認証情報は公開物へ含めない。
- 本番公開前後にdocs/release.mdの手順を実行し、リリース履歴と引継ぎ状態を更新する。
