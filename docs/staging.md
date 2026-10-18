## 本番公開完了（2026-10-18・家事2記事とサムネイル）

- 本人のproduction承認後、本番run39090953396が成功。prepare/deploy/Smoke test/Release保存成功。
- 公開一覧: https://ing08.github.io/developing/journal/
- Release: https://github.com/ing08/developing/releases/tag/deploy-39090953396-1
- 本番source SHA: 79792fd11cef2920a2551136e0e956138bb39f0d。STG run39090563806の同一ZIPを昇格。
- 公開確認: version.json一致。主要HTML・サムネイル・ハッシュ付き記事データ10ファイルが候補manifestと一致。ブラウザで一覧6記事、健康カテゴリなし、サムネイル6枚の正常読込を確認。
- 新規公開記事: sharing-housework-app / enjoying-housework。visualizing-houseworkのサムネイルも洗濯イラストに更新。
- PR #2はOPENのままでmain未統合。公開サイトの成功とソース統合は別状態。PRレビュー・統合が残る。
## 品質ループ完了・本番承認待ち（2026-10-18）

- 本人から「品質ループを実施してリリースして」と指示受領。対象は提示済み79792fd11cef2920a2551136e0e956138bb39f0d / STG run39090563806。
- 観点: 家事2本の内容と健康記事除外、サムネイル、FAQ・リンク・390px表示、キャッシュ更新、既存記事保持、候補ZIPと配信内容の一致。
- 最終ラウンド新規問題0件。Python11件・Node5件・構文確認成功。3記事のFAQ開閉、横はみ出しなし、console error0件。ZIP全ファイルとSTGの主要10ファイルのハッシュ一致。候補後の差分は運用記録のみ。
- main直接pushは自動承認レビューで拒否されたため未実施。レビュー用PR: https://github.com/ing08/developing/pull/2 （main未統合）。
- 本番run: https://github.com/ing08/developing/actions/runs/39090953396
- prepare成功、確認済みZIP取得・全ファイル検証済み。deployはproduction本人承認待ち。本番公開完了ではない。
- 本人はGitHubでPRレビュー・統合、および本番runのReview deploymentsからproduction承認を行う。エージェントは承認ゲートを代行解除しない。公開後にSHA・画面・画像・Releaseを検証する。
## 本人QA待ち・サムネイル最終修正版（2026-10-18）

- 見える化記事のサムネイルを洗濯かごとタオルのイラストへ変更。記事・カテゴリデータを内容ハッシュ付きファイル名で配信し、旧キャッシュ残留を解消。
- 確認URL: https://ing08.github.io/developing-stg/journal/?v=79792fd
- 対象SHA: 79792fd11cef2920a2551136e0e956138bb39f0d
- Check成功: 39090540629 / STG成功: 39090563806
- ZIP SHA256: 75e11cd50159e30f256bf2c14e3108251a4768b01fa0526f8f45ae10ae9c6d45
- Python11件・Node5件成功。データ更新時の参照ファイル変更を検証。STGブラウザで見える化記事がlaundry.jpgを参照し読込成功を確認。
- 本番未公開。本人QA対象はこの版。以下は旧候補の履歴。
## 本人QA待ち・見える化サムネイル修正（2026-10-18）

- 家事の見える化の一覧・OGP画像を洗濯かごとタオルの既存イラストへ変更。記事データのキャッシュ識別子をr3に更新。
- 対象SHA: 6f0a7095f5df1339520d2b2eb2b069744049c085
- STG: https://ing08.github.io/developing-stg/journal/?v=6f0a709
- Check成功: 39090302614 / STG成功: 39090330653
- ZIP SHA256: e62947225a7019d09d1b483a5653bb62f1dc8dbba67e7d9de95b6e8c4f86bd90
- 配備SHAと配信data.jsの画像指定一致。ブラウザ表示は配備直後のキャッシュ残留を確認中。本番未公開。
## 本人QA待ち・修正版（2026-10-18）

- ユーザー指摘により健康記事3本・健康カテゴリ・画像を除外。追加記事は家事2本のみ。nelumo原本は保持。
- 家事2本のサムネイルを定型タイトル画像から本文イラストへ変更。data/catalog読込バージョンを更新して旧キャッシュ残留も修正。
- 確認URL: https://ing08.github.io/developing-stg/journal/?v=04b0d5c
- 対象SHA: 04b0d5c9290358df79da29823b9e1b2fcc0c2cb2
- Check成功: 39090007615 / STG成功: 39090034974
- ZIP SHA256: cbb175257094a80a7cd294e0008a9df3f5c67884fe7291c26a7cace11bc8bf8c
- 公開version.json一致。ブラウザで一覧6件、健康カテゴリなし、新規2画像の読込成功を確認。Python11件・Node5件成功。
- 本番未公開。以下の5本版は失効した履歴。新しい本人QA対象は上記修正版。
## 本人QA待ち（2026-10-18・家事2本と健康3本）

- ユーザーの「stgで確認させてください」によりコミット・push・STG配備を実施。本番は未公開。
- 確認URL: https://ing08.github.io/developing-stg/journal/?v=90004b7
- 対象ソースSHA: 90004b70a18e832f10cf732eb6cf7698e8950723（content/articles-20261018）。main未統合。
- Check成功: https://github.com/ing08/developing/actions/runs/39089589386
- STG成功: https://github.com/ing08/developing-stg/actions/runs/39089614665
- ZIP SHA256: 1da718963e98e19a6bde3b1ceda8e876fdca1180ce9971fde2ef355704f7bb68
- 記事: sharing-housework-app / enjoying-housework / preventing-lifestyle-diseases / reading-health-check-results / daily-step-goals。健康カテゴリを追加。
- 検証: Python11件・Node5件、JS構文、ビルド成功。ローカル5記事の390px横はみ出しなし。画像内容を確認し、未対応通知機能を示唆する図を除外。健康記事に厚生労働省資料を追加。STG一覧9件と新規5記事の表示、公開version.jsonのSHA一致を確認。
- 本人確認: 記事本文・画像、健康カテゴリ、FAQとリンクを確認。本人QAと対象付き公開指示後、同じSTG ZIPをproduction承認経由で昇格する。
## 本番公開完了（2026-10-17・家事の見える化）

- 本人のGitHub承認後、本番run 38995233902が成功。以下の承認待ち記述は履歴。
- 公開記事: https://ing08.github.io/developing/article/visualizing-housework/
- Release: https://github.com/ing08/developing/releases/tag/deploy-38995233902-1
- 本番source SHA: 742b3ede457688019b795b0ad9413ce95de1faff。QA済みSTG run38994846852と同一ZIPを配備。
- 公開後確認: version.json一致。新記事HTML・data/catalog/app・画像4枚のHTTP取得とmanifestハッシュ一致。ブラウザで本文表示、390pxの横はみ出しなし、OGP画像とcanonicalが本番URLを指すことを確認。console error0件。品質ループ完了、新規問題0件。
- OGP画像も本番に配備済み。SNS実サービスのキャッシュ・カード展開は未検証。検索除外・解析なしは既存方針を維持。
## 公開前品質ループ・公開指示受領（2026-10-17）

- 確認URL提示後、本人から「品質ループを実施してから公開してください」と対象候補の公開指示を受領。
- 対象SHA: 742b3ede457688019b795b0ad9413ce95de1faff / STG run 38994846852。
- 再確認: 原稿一致と既存内容保持の検証結果、Python11件・Node5件成功を照合。確認後は記録のみの変更。STG成功・公開SHA一致・ZIPハッシュ一致を再確認。
- 公開STGの新記事HTML・data/catalog/app・画像4枚がmanifestと一致。390pxで本文画像3枚が元比率で読込、FAQ開閉、一覧4件への移動、OGP画像指定、横はみ出しなしを確認。新規問題0件。
- 本番run: https://github.com/ing08/developing/actions/runs/38995233902 。prepareで同一ZIPの取得・全ファイル検証に成功。productionの本人承認待ち（APIで確認）。公開完了ではない。
## 今日の記事追加（2026-10-17・本人QA待ち）

- 記事: 家事の見える化とは？ふたりの分担に活かす方法と注意点。本文3画像と一覧用サムネイルを追加。FAQを開閉式にし、末尾をサイト内アプリ紹介リンクへ変更。
- 最新mainとOGP対応を統合。既存3記事・アプリ紹介・CSS・アイコンは保持。
- QA対象: `742b3ede457688019b795b0ad9413ce95de1faff`（content/visualizing-housework）。main統合・本番配備は未実施。
- 確認URL: https://ing08.github.io/developing-stg/article/visualizing-housework/?v=742b3ed
- Check成功: https://github.com/ing08/developing/actions/runs/38994810421
- STG成功: https://github.com/ing08/developing-stg/actions/runs/38994846852
- ZIP SHA256: `8dd22ccc10282d6174f0ae9853b8a25de7549c841face88400dfe8d60682983a`
- 品質観点: 本文一致、既存内容保持、画像の比率と読込、FAQ・紹介リンク、スマホ表示、一覧、共有URLとOGP、配備SHAとZIP一致。追加観点は並行OGP対応と最新紹介の保持。それ以外の漏れ候補なし。
- 第1ラウンド: FAQ形式・画像ローカル参照・紹介リンクを整備。OGP統合時のindexと公開履歴の競合を解消。
- 第2ラウンド: Python11件・Node5件成功、JS構文・差分検査合格。本文3画像読込とFAQ開閉、紹介リンク、390px記事・一覧および1280px一覧の横はみ出しなし。統合後の記事表示・実URL・OGPを確認。新規問題0件。
- 公開STG: version.json、新記事HTML、画像4枚がHTTP取得成功・manifestハッシュ一致。候補ZIP全ファイルの検証成功。390px表示・サイト内紹介リンクを確認。
- 状態: 本人QA待ち。本番公開は本人QA後、productionのGitHub本人承認を通して同一ZIPを昇格する。後続記録コミットは配信物を変更しない。
- OGP画像の絶対URLは本番を指すため、新画像は本番昇格までSNS実サービスから取得できない。検索除外・解析なしを維持。
## OGPと共有URLの導入（2026-10-16）

- 利用者の「品質ループを実施してqaさせてください」を受け、OGP確認版へ切替。最新STG a9e15abaの家事紹介・買い物リスト更新とカード背景を保持する。
- 対象: 全10ページの初期HTMLにOGP/Xカードを生成し、共有URLを実体のあるパスへ移行。旧ハッシュURLは新URLへ移動。データ追加から自動生成、画像未指定は共通画像。
- 品質ループ: 旧記事のホーム相対リンクを修正後、Python11件・Node5件・JS構文・差分・ビルド検査成功。紹介本文はa9e15abaと同一。詳細は[OGP運用・検証](social.md)。
- 状態: STG配備・エージェント品質確認完了。本人QA待ち。本番未変更。
- 確認URL: https://ing08.github.io/developing-stg/?v=5dd87e0
- 家事: https://ing08.github.io/developing-stg/app/kaji/?v=5dd87e0
- 記事: https://ing08.github.io/developing-stg/article/choosing-chore-apps/?v=5dd87e0
- ソースSHA: `5dd87e09d732242e450a65e0cd129b5c5f1cfdf9`（branch: feat/social-ogp）。mainへの統合・本番公開は未実施。
- Check: https://github.com/ing08/developing/actions/runs/38865662466 （成功）
- STG run: https://github.com/ing08/developing-stg/actions/runs/38865715611 （成功）
- ZIP SHA256: `7d255b496306362ab64a4f7d5036b190298c6339f8754e2115abc593664ee646`
- 公開検証: version.jsonのSHA一致。取得した候補ZIP・全ファイルハッシュ検証成功。全10ページの生HTMLをTwitterbot UAで取得し、配備manifestと一致。全OGP画像もHTTP200・manifestハッシュ一致。390pxで全10ページにはみ出し・画像欠落なし、console error0件。新規問題0件。
- 本人QA: ページの表示・新URL・旧リンクからの移動・紹介内容を確認。OGPの画像と説明は初期HTMLで検証済み。STGのog:url/canonicalは同一ZIP昇格のため本番URLなので、SNS実サービスの最終表示は本番配備後の確認項目。
- 後続の記録コミットは配信内容を変更しない。

## 最新状態: 紹介文の復元・3サイトのアイコン反映完了（2026-10-16）
- 本人が最新紹介文を含む公開済み版への復元に「承認しました」と回答。自動承認レビュー通過後、GitHub productionも本人承認。
- 復元run: https://github.com/ing08/developing/actions/runs/38867786142 （成功）
- 本番source SHA: a9e15aba67ac2702a0e45b0fc506484da6c5dbac。STG run38864328167の同一ZIPを配備。
- 公開後: version.json一致。catalog/app/base/indexと両アイコン・両背景の8資産SHA256が候補manifestと一致。ブラウザで買い物・64スタンプ・週末/月末戦の最新紹介文、両カードの新アイコンと背景、画像512px読込・横はみ出しなしを確認。
- 前回誤って旧候補52e63c6を配備した影響は復元済み。以下の復元待ち記述は履歴。現在の未対応事項なし。
- Kaji本番dpl_A9Mo1MytfMQuVGg6JCtgDPa9idNk、Media Shuffle本番dpl_BNqi6PXLtc6yCmwgq2pJpBk44Ub5も新アイコン公開・検証済み。詳細は各repoのicon-update記録。
## 最新の引継ぎ: 紹介文の復元待ち（2026-10-16）
- アイコン本番公開run38866648026で52e63c6を指定したが、その前に別作業で紹介文更新a9e15abが公開されていた。今回の配備で紹介文を旧版へ戻してしまった。
- 正しい復元先はa9e15aba67ac2702a0e45b0fc506484da6c5dbac / STG run38864328167。新アイコン・カード背景も含む。公開履歴は下記に保持。
- 復元dispatchは自動承認レビューが今回の紹介文復元承認を確認できないとして拒否。未実行。利用者へ対象付き復元承認を確認中。GitHub本人承認ゲートは維持。
## 本番反映完了（2026-10-16・アプリアイコンとカード背景）
- 本人が3サイトの本番反映依頼へ「お願いします」と回答。GitHub production本人承認後、公開run成功。
- 公開run: https://github.com/ing08/developing/actions/runs/38866648026
- 本番: https://ing08.github.io/developing/?v=52e63c6#apps
- ソースSHA: 52e63c6ba058398725593c85ae2b58a98849b3f0。STG run38863075397の同一ZIPを昇格。
- 公開version.json一致。両アイコン512px読込、横はみ出しなしをブラウザで確認。
- 以下の「本人QA待ち」「本番未変更」は各作業時点の履歴。最新状態は本節。
## 家事アプリ紹介の最新化（2026-10-16・本番公開完了）

- 利用者の「アプリ紹介が陳腐化してないか確認して更新」、対象はGitHub Pagesと回答。
- 正本site/catalog.jsの家事紹介だけを変更。買い物リスト/手動更新/2人参加条件、現行主ナビ、64スタンプ、週末戦の開始操作と月末戦の開始条件を反映。固定の「約30秒」は削除。カレンダーの日付詳細を案内。画像・外部CTA・他アプリ・既存記事は保持。
- 第1ラウンド: 上記の不足とカレンダー説明の重複を修正。catalog.jsの参照版を更新。
- 第2ラウンド: 公開済みアプリcbfd69cの仕様・実装と照合。Python10件・Node2件・catalog構文・差分検査成功。Python初回はWindows sandboxのtemp cleanup権限で失敗し、通常権限で全件成功。他アプリとカテゴリのデータ同一を検査。ローカル390pxは横はみ出しなし、デスクトップの追記を目視、console error/warn0。新規問題0件。
- 2026-10-16 利用者が切替確認後に「品質ループを実施してqaさせてください」と指示。カード背景候補52e63c6を保持し、紹介文を重ねてstg確認へ進める。本番未変更、本人QA・本番指示は未受領。

- 確認URL: https://ing08.github.io/developing-stg/?v=a9e15ab#app/kaji
- ソースSHA: `a9e15aba67ac2702a0e45b0fc506484da6c5dbac`
- Check: https://github.com/ing08/developing/actions/runs/38864290462 （成功）
- STG: https://github.com/ing08/developing-stg/actions/runs/38864328167 （成功）
- ZIP SHA256: `d1e882478bde2f5f252425e3b7870efaff35381230d7e8519e63c067fb82b4d0`
- 公開STG確認: version.jsonのソースSHA一致。更新本文・外部CTAを確認。390pxで横はみ出しなし、買い物の共有条件・更新方法を目視確認。console error/warn 0件。表示幅の一時設定は解除済み。
- 本人QA: 買い物の説明、バトルのまとまりと開始条件、スマホでの読みやすさを確認する。本番未変更。後続の記録コミットは配信物を変更しない。
- 2026-10-16 本人が上記QA候補の案内に続けて「品質ループを実施してリリースしてください」と指示。
- リリース前品質ループ: QA後は記録文書のみ変更。STG成功・公開SHA一致・ZIPと全ファイルのハッシュ検証成功。既存の内容/リンク/390px表示・12テスト・CI検証結果と照合し、新規問題0件。
- 本番run: https://github.com/ing08/developing/actions/runs/38865187996 。QA済みSTG run 38864328167のZIPを指定して起動。production環境の本人承認後に配備される。

- 本人のGitHub承認と「しました」の連絡を受領。本番run 38865187996は成功。
- Release: https://github.com/ing08/developing/releases/tag/deploy-38865187996-1
- 本番: https://ing08.github.io/developing/#app/kaji
- 公開後確認: source SHAがQA対象a9e15abと一致。紹介本文・CTA・ホームの更新要約を確認。390pxで横はみ出しなし、本文を目視。console error/warn 0件。品質ループ完了、新規問題0件。

## カード背景の改善（2026-10-16）

- 本人の「記事サイトのカードの背景寂しいな」「続けてください」を受け、現在のアイコンQA候補を更新。本番は未変更。
- 確認URL: https://ing08.github.io/developing-stg/?v=52e63c6#apps
- ソースSHA: `52e63c6ba058398725593c85ae2b58a98849b3f0`
- Check: https://github.com/ing08/developing/actions/runs/38863022081 （成功）
- STG: https://github.com/ing08/developing-stg/actions/runs/38863075397 （成功）
- ZIP SHA256: `c6e0370369b2a1167b4d056ee41713bd77d6441bc654130c37422dfdbe51055c`
- 変更: Kajiは淡いライム色・泡と掃除道具、Media Shuffleは青みのグラデーション・写真フレーム。装飾SVGはCSS背景、採用アイコンの画素・本文・リンク先は維持。
- 品質観点: アイコンの視認性と欠け、アプリとの対応、320/390/1280pxの収まり、カードの操作性、本文・リンク維持、配信参照。漏れ候補なし。
- 第1ラウンド: 単色背景をアプリ別の装飾へ修正。装飾は読み上げ・クリック対象にしない。
- 第2ラウンド: Python10件・Node2件・JS構文・差分検査・CI成功。ローカル320/390/1280px横はみ出しなし、スマホ全体を目視、Enterで家事紹介へ遷移、ホームへの背景適用、コンソールエラー0件。公開STGの両アイコン512px読込・背景装飾を目視、version.json一致。新規問題0件。
- 状態: 本人QA待ち。本番公開指示は未受領。後続の記録コミットは配信物を変更しない。
> アイコン更新: 品質ループ・コミット・push・確認用配備完了。本番未変更、本人QA待ち。[対象SHA・確認URL・検証結果](icon-update-2026-10-16.md)。

# STG引継ぎ

## 現在の作業（紹介をアプリページへ移動・2026-10-16）

- 指示: アプリ紹介は記事ではなくアプリページに置く。
- 状態: 本人QA・公開指示・GitHub本人承認を受領し、本番公開完了（2026-10-16）。
- 家事: https://ing08.github.io/developing-stg/?v=6478f0d#app/kaji
- Media Shuffle: https://ing08.github.io/developing-stg/?v=6478f0d#app/media-shuffle
- ソースSHA: `6478f0db389ec0cf706e6a7c1dbde1096b39dd47`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38858623170 （成功）
- Check run: https://github.com/ing08/developing/actions/runs/38858553002 （成功）
- ZIP SHA256: `210aabf01d7f0ce635a480a75fa8aebc0df49569f28a181c3cefc322316068a9`
- 変更: 本文・画像・誘導カードの正本をcatalog.jsのapps.contentへ移動。読みものは従来3記事のみ。アプリ一覧に画像を使用。旧記事2URLは対応するappルートへ置換遷移。家事テーマをアプリ詳細にも適用。
- 第1ラウンド: 紹介の配置・ナビ・戻り先・テーマをアプリページ用に修正。本文と画像・誘導リンクは移動前と完全一致。
- 第2ラウンド: Python10件・Node2件・JS構文・CI成功。旧URL両方の遷移、アプリ一覧2件、読みもの3件、390pxの両アプリ横はみ出しなし、アプリナビ選択、コンソールエラー0を確認。既存3記事同一。新規問題0件。
- 本番run: https://github.com/ing08/developing/actions/runs/38859825064 （成功）
- Release: https://github.com/ing08/developing/releases/tag/deploy-38859825064-1
- 本番家事: https://ing08.github.io/developing/#app/kaji
- 本番Media Shuffle: https://ing08.github.io/developing/#app/media-shuffle
- 本人QA・公開指示: 「いい感じですね」「品質ループしてリリースして」。production承認後「承認しました」と連絡を受領。
- 公開後確認: version.jsonのSHAが上記候補と一致。両アプリ本文・CTAリンク、ホーム、390px両アプリの横はみ出しなし、旧家事記事URLのappルート移動、コンソールエラー0件。アプリ画像6枚の公開バイト列が候補manifestのSHA256と一致。
- 後続記録コミットは配信物を変更しない。
## 前回の作業（アプリ内素材を参考にした本文画像・2026-10-16）

- 指示: 記事本文にも画像を追加し、生成画像は各アプリ内のコンテンツを参考にする。
- 状態: STG配備・エージェント検証完了。本人QA待ち。本番未配備。
- 家事記事: https://ing08.github.io/developing-stg/?v=9eaa74b#article/weekend-kaji-introduction
- 写真記事: https://ing08.github.io/developing-stg/?v=9eaa74b#article/media-shuffle-introduction
- ソースSHA: `9eaa74bc1657de9e667f6315fec54aea45bf2701`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38857468648 （成功）
- Check run: https://github.com/ing08/developing/actions/runs/38857423378 （成功）
- ZIP SHA256: `9f240109c3eb5372a67c7b578c22812578355d454a46c46925acc2687b902de2`
- 変更: 家事はファイターの配色・形と公開うさぎスタンプ、Media Shuffleは公開デモdawn.jpgを参考に生成。冒頭・一覧・誘導カードを差し替え、各記事本文に2枚追加。参照元・プロンプト・保存先はimage-assets.md。
- 品質観点: アプリ素材との対応、本文との対応、図と実画面の区別、代替テキスト、個人情報、画像容量、スマホ表示、リンク維持。追加の未対応観点なし。
- 第1ラウンド: 従来の汎用生活風景2枚と本文画像不足を修正。記事冒頭で実画面とは異なる生成イラストと明記。家事画面全体の保存は自動承認レビューで拒否されたため、公開素材と観察した非個人的な特徴だけを使用。
- 第2ラウンド: Python10件・Node2件・JS構文・CI成功。既存3記事同一、画像参照の存在確認。公開STGで両記事の本文画像各2枚が1200pxで読み込み、390pxで横はみ出しなし・キャプション確認。新規問題0件。ローカルブラウザ接続が失敗したため、表示検証は公開STGで実施。
- 後続の記録コミットは配信物を変更しない。
## 前回の作業（記事画像・アプリ誘導カード・2026-10-16）

- 指示: 記事の画像不足を改善し、アプリへの誘導をカードで強調。今回の修正依頼に基づき共有STGを更新。
- 状態: STG配備・エージェント確認完了。本人QA待ち。本番未配備。
- 家事記事: https://ing08.github.io/developing-stg/?v=15fbd49#article/weekend-kaji-introduction
- 写真記事: https://ing08.github.io/developing-stg/?v=15fbd49#article/media-shuffle-introduction
- ソースSHA: `15fbd496d893053ad686964fdc555a580330fccf`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38855729648 （成功）
- Check run: https://github.com/ing08/developing/actions/runs/38855689619 （成功）
- ZIP SHA256: `ef95bbf382fdf968125d02fe00f6e790d83d54ba2b158a9b8aa880c3d54121ce`
- 変更: 各記事に生成イラスト・キャプション、一覧サムネイル、導入直後と記事末尾に画像付きアプリリンクカード。カード全体を1リンクとし、利用条件と48px以上のボタン表示を付与。画像は1200×800 WebP。生成元・プロンプトはimage-assets.mdに記録。
- 品質観点: 画像と本文の一致、リンク先・利用条件、PC/390pxでの表示・キーボードフォーカス、画像容量と代替テキスト、既存記事維持。追加の未対応観点なし。
- 第1ラウンド: Media Shuffle末尾の説明リンクのHTML不備1件を修正。
- 第2ラウンド: Python 10件・Node 2件、JS構文・CI成功。両記事390px横はみ出しなし、一覧5件の画像欠落なし、カード各2件、既存3記事同一。公開STGで画像ロード・カード表示・version.json一致、コンソールエラー0件。新規問題0件。
- 後続の記録コミットは配信物を変更しない。
## 前回の作業（アプリ紹介記事2本・2026-10-16）

- 指示: 既存記事を参考に、週末家事バトルとMedia Shuffleの紹介記事をURL付きで作成し、STGで本人確認する。
- 状態: STG配備・エージェント検証完了。本人QA待ち。本番未配備。
- 家事記事: https://ing08.github.io/developing-stg/?v=512e5e9#article/weekend-kaji-introduction
- 写真記事: https://ing08.github.io/developing-stg/?v=512e5e9#article/media-shuffle-introduction
- ソースSHA: `512e5e9372c9727210dd81db6fb3fd26dc955245`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38854926950 （成功）
- Check run: https://github.com/ing08/developing/actions/runs/38854895144 （成功）
- ZIP SHA256: `fcd2dc614857ca081c6768b3f830aada5f1287fa1599eb4bb052602ee89a4ef5`
- 変更: 記事2本、写真カテゴリとMedia Shuffleアプリを追加。各アプリ詳細から記事へ誘導。既存3記事のデータは維持。
- 第1ラウンド: 実アプリ画面と公開aboutの機能・利用条件・URLに照合。記事カードにアプリ表示を使い、写真カテゴリと記事への導線を整備。
- 第2ラウンド: Python 10件・Node 2件とJS構文・bundle検証が成功。ローカル390pxで両記事の表示と横はみ出しなし、一覧5件・写真カテゴリ1件、アプリ詳細リンクを確認。公開STGで両記事の本文とリンク、コンソールエラー0件、version.jsonのSHA一致を確認。新規問題0件。
- 確認操作: 上記2記事で文体・内容・スマホ表示を確認し、本文のアプリリンクを開く。
- 後続の記録コミットは配信物を変更しない。
## 前回の作業（タグのアコーディオン・2026-10-16）

- ユーザー指示により共有STGを切替。タグselectをdetails/summary内の折り返し配置へ変更。単一選択は維持、「すべて」で解除。閉じても選択中タグを表示。
- 状態: 2026-10-16 本人QA合格・公開指示・GitHub本人承認を受領。本番run成功、公開済み。
- 本番run: https://github.com/ing08/developing/actions/runs/38847675609
- 本番: https://ing08.github.io/developing/
- Release: https://github.com/ing08/developing/releases/tag/deploy-38847675609-1
- 公開後検証: version.jsonのソースSHAが承認済み候補と一致。ホーム表示、家事テーマ、タグ家事分担2件、記事遷移、一覧の画像欠落0件を確認。検索除外・解析なしは承認済み候補どおり。
- URL: https://ing08.github.io/developing-stg/?v=tags-20261016#journal
- ソースSHA: `83214dd24d4df6dd64a649f04217ac91afe7d269`
- ZIP SHA256: `a3f5dfe63badf664d6256b397797b988765b2388e58aae83217aa0ef25165755`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38847264448 （成功）
- 成果物検証run: https://github.com/ing08/developing/actions/runs/38847410084
- 第1ラウンド: 選択中タグの表示、ネイティブradio、44px以上の選択領域、長い文字列の折り返しを実装。
- 第2ラウンド: 自動テスト12件成功。公開STGで家事分担2件→閉じても維持→すべて3件、Enterによる開閉、360pxで3行折り返し・横はみ出しなし、カテゴリ解除時の共通テーマ復帰を確認。コンソールエラー0、新規問題0件。
- 後続の記録コミットは配信物を変更しない。

## 前回の作業（カテゴリ配色とアプリ紹介・2026-10-16）

- 指示: 家事選択時のCSS変化を明確にし、アプリ詳細を紹介中心にする。下部の参考リンクから絞り込み済み読みものへ誘導。今回の修正依頼に基づき共有STGを切替。
- 状態: STG配備・エージェント検証完了。本人QA待ち、本番未配備。
- URL: https://ing08.github.io/developing-stg/?v=theme-20261016#category/kaji
- アプリ紹介: https://ing08.github.io/developing-stg/?v=theme-20261016#app/kaji
- ソースSHA: `7b21190a25eb29855919702b791a1a0d24685df0`
- ZIP SHA256: `590a8285baee34dfaae7ae106fdd111468172b4b8e899c2c0b28c6bfccc0161b`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38846668472 （成功）
- 取得・検証run: https://github.com/ing08/developing/actions/runs/38846861975 （成功、本番配備なし）
- 調査: 切替自体は動作していたが、共通背景rgb(250,247,240)と家事rgb(245,243,236)の差だけでは識別しづらかった。既存家事CSSの#eef0dfと#e3ef98を見出し背景・下線・選択中ナビへ反映。
- 第1ラウンド: 見分けにくいテーマと、記事一覧が主体になったアプリ詳細の2点を修正。記事カードを撤去し、紹介の下部にカテゴリ由来の参考リンクを配置。
- 第2ラウンド: 自動テスト12件成功。公開STGでカテゴリ選択→解除、タグ2件、記事の家事テーマ継承、アプリ参考リンク→家事選択済み一覧を確認。新規問題0件。
- デスクトップのヘッダー101px・カード364pxは切替前後で同一。390pxのアプリ紹介と360pxの一覧・記事に横はみ出しなし。画像欠落・コンソールエラー0件。アプリ詳細のmain内記事カード0件。
- 記事本文・生成画像は変更なし。CSS/JS参照の版を更新。後続の記録コミットは配信物を変更しない。

## 前回の作業（生成画像・カテゴリ共通化・2026-10-16）

- ユーザー指示: SVGの手組みから画像生成した素材へ置換し、家事専用のボタンを共通画面から除去。共有STGのQA対象を切替える指示として受領。
- 状態: STG公開・エージェント検証完了、本人QA待ち。本番公開承認は未受領。
- URL: https://ing08.github.io/developing-stg/?v=library-20261016
- ソースSHA: `508e03d4f063b8fafe4d161050b686df56210726`
- ZIP SHA256: `c0de0a9a37332693082b992c48fadfa3398482a68ac97f263810be11d6b88ecf`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38845576121 （成功）
- 取得・検証run: https://github.com/ing08/developing/actions/runs/38845658274 （本番配備なし）
- 公開画面で生成画像とカテゴリ選択→タグ2件→全件へ戻る操作を確認。画像欠落・コンソールエラー0件。既存3記事はcategory追加以外のデータが同一。
- 画像と生成プロンプト: [image-assets.md](image-assets.md)。追加手順: [content.md](content.md)。
- 後続の引継ぎ記録コミットは配信物を変更しない。
- 変更: 生成した猫カフェWebP・猫ロゴPNG。カテゴリ選択と任意タグを共通化。テーマ・パンくず・カード表記は記事のカテゴリデータから決定。アプリもデータ登録で追加できる構成。
- 品質確認: 非家事カテゴリのテーマとタグ隔離のテスト2件、既存配備テスト10件成功。360/390/768/1280pxホーム横はみ出しなし、画像エラーなし。カテゴリ→タグ→記事→全記事一覧の往復を確認。
- 第1ラウンドでスマホのカテゴリ・タグラベルを入力ごとのまとまりへ修正し、プログラムによる本文フォーカスの不要な外枠を解消。第2ラウンドで新規問題0件。
- 未登録のアプリやカテゴリは捏造して公開しない。カテゴリ共通化のテスト用データは公開siteの外に置く。


## 前回の作業（SVG猫カフェ案・2026-10-16）

- ユーザー指示: ボタンのような非操作部品を整理、猫ロゴ、猫カフェ風ホームを試作。今回の指示に基づき共有STGのQA対象を切り替える。
- 状態: STG公開・エージェント検証完了、本人QA待ち。本番公開承認は未受領。
- URL: https://ing08.github.io/developing-stg/
- ソースSHA: `266f25080dcadb7a36c9441ddcb29545f694cd42`
- ZIP SHA256: `7a68e6124b1fa5bae39070493318b16376c0214e22a721b81b0fba14902deba6`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38844512548 （成功）
- 本番側の取得・検証run: https://github.com/ing08/developing/actions/runs/38844623369 （配備なしの検証）
- 第1ラウンド: 非操作タイル・ラベル囲みを解消し、実リンクとSVGイラストに整理。版付きCSS/JSで旧キャッシュとの混在も対処。
- 第2ラウンド: 10テスト・JS構文・SVG構文・文字色コントラスト検査成功。公開STGでもホーム、タグ2件、カテゴリテーマ、共通寸法とエラー0件を確認。新規問題0件。本人のデザイン判断は未受領。
- 後続の状態記録コミットは配信物を変更しない。
- 変更: 装飾タイル・チップ・ロゴ背景を削除し、実際のリンクを明示。オリジナルSVGの猫ロゴと窓辺イラスト、クリーム／木色の共通テーマ。家事テーマの基礎色、共通ヘッダー・カード寸法、記事本文は継承。
- 検証: 360/390/600/601/768/1000/1001/1280pxのホーム横はみ出しなし。1280pxでホームと家事カテゴリはheader 101px・card 364pxで一致。Enterでホームの読みものリンクが動作。390pxを目視。
- 文字色コントラスト: muted/background、accent/background、muted/surface、accent/softはいずれも4.5:1以上。新SVGのXML構文を検証。
- 旧キャッシュ混在を避けるため変更CSS/JSに版付きURLを付与。


## 前回のQA対象（ゲームメニュー案・2026-10-16）

- 状態: ユーザーから猫カフェ案への変更指示を受領。旧案は比較・復旧用の履歴。
- URL: https://ing08.github.io/developing-stg/
- ソースSHA: `2a61a07b2c9746ffd339040a9651ba70194a6d60`
- ZIP SHA256: `4bd0d48c9b30a36bce01351df6406ec521a66c3ec008aebf369b2b2a56cde192`
- STG run: https://github.com/ing08/developing-stg/actions/runs/38843498405 （build/deploy/smoke成功）
- 本番側の取得・ハッシュ検証: https://github.com/ing08/developing/actions/runs/38843585470 （成功・本番配備なし）
- 本人QA: 未受領。
- 本番公開承認: 未受領。今回の構築承認はSTGと仕組みの作成まで。
- 本番: 未公開。production環境はing08承認必須・管理者バイパス不可・main限定。設定をAPIで確認済み。実際の本番配備は未実施。
- 既存家事サイト: 継続。mainは `d40735fa7035b017334caf86d6253a57dfaf301a` のまま。

## 確認手順

1. ホームの雰囲気と「アプリ」「読みもの」の分かりやすさを見る。
2. 読みもの→タグ「家事分担」で2件になることを確認。
3. 家事カテゴリ→記事へ進み、配色とヘッダー・カード寸法の一貫性を見る。
4. スマホで画像・文章が読みやすく、横にはみ出さないか確認。

デザイン初版でタグは仮分類。家事以外のアプリは未掲載。検索公開・計測・管理画面は別工程。

## 品質ループ

対象: 配信物、CI/STG/本番workflow、同一成果物検証、承認ゲート、復旧手順、正本と記録の整合。
追加観点: 他repoへの権限共有とQA中の上書き防止（公開運用の取り違えを避けるため）。

- 第1ラウンド: 検証時のWindows一時フォルダ制約を解消。リリース入力の負例テストを追加し、取得権限・source symlink拒否を明示。サイト画面は変更せず。
- 第2ラウンド: 10テスト成功。改変ZIP、不正パス、未成功STG、別workflow、入力の同時指定・未指定・QA記録欠落を拒否。JS構文検査成功。
- GitHub上でCheck成功、STG配備と公開SHA照合成功、本番repoのトークンでSTG成果物取得・全ファイルハッシュ検証成功。
- 公開STGをブラウザで目視。ホーム、記事絞り込み2件、カテゴリテーマ、390pxカテゴリ・記事の横はみ出しなし、コンソールエラー0件。
- 新規問題0件。ただし本人QAと本番配備・復旧の実地検証は未実施。成功したと扱わない。
- 後続コミットはテスト・文書のみ。配信内容は上記QA対象から変更なし。次の変更時は再配備が必要か差分を照合する。
