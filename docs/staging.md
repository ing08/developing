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
