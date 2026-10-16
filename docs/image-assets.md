# 画像素材（2026-10-16）

内蔵image_genで新規生成。SVGの手組み画像から置換。既存の他社キャラクター参照なし。
配信用にSharpでリサイズ・形式変換し、ロゴの透過を保持した。図柄の編集はしていない。

| 用途 | 保存先 | 配信サイズ |
|---|---|---|
| ホームの猫カフェ | site/assets/cat-cafe-generated.webp | 1200×800、171762 bytes |
| 猫ロゴ・favicon | site/assets/cat-mark-generated.png | 128×128、12642 bytes、透過PNG |

## Hero prompt

Create a polished editorial illustration for the hero area of a friendly personal website called developING. No typography or lettering anywhere. A cozy quiet cat cafe in warm afternoon light: a relaxed sleeping ginger cat on a sage green upholstered window seat, wooden small table with a ceramic cup and a couple of books, leafy potted plant, sunlight through a softly arched window. Hand-painted gouache and colored-pencil texture, sophisticated picture-book illustration, tactile warm paper grain, organic shapes, gentle and welcoming rather than childish. Cream background (#faf7f0), muted warm browns and sage greens, restrained palette. Landscape 3:2 composition, scene centered with ample cream breathing space at edges, complete cat and table visible. Suitable as a standalone website illustration beside text, not a screenshot or UI mockup. No buttons, cards, logos, text, frame border, watermark, people, or housework equipment.

## Logo prompt

Use case: logo-brand. Generate a standalone original cat brand mark for a warm personal app and writing website. One simple charming sleeping cat head, rounded cheek silhouette with two ears, closed curved eyes and tiny nose, dark warm coffee-brown silhouette (#79563f) with transparent negative space facial features. Calm, welcoming, refined cafe identity. Clean hand-drawn curves with extremely subtle organic character, strong legibility at 32 pixels. Centered composition filling about 85 percent of a square image, generous safe edge. Only the cat head, no circle badge, no border, no cup, no body, no letters, no words, no shadow, no gradient, no texture. Transparent background. This is a real raster brand asset not an SVG or UI mockup.

## アプリ紹介記事の画像（2026-10-16）

内蔵image_genで生成。記事冒頭・一覧・アプリ誘導カードで使用。実画面ではなくイメージイラストと明記。Sharpで1200×800のWebPへ形式変換。

- `site/assets/kaji-introduction.webp`: 168268 bytes
- `site/assets/media-shuffle-introduction.webp`: 244248 bytes

### Kaji prompt

Create a wide 3:2 editorial illustration for a Japanese article about a couples household chores game app. Two adult partners happily folding laundry and washing dishes in a cozy sunlit home, small playful star and trophy motifs suggest accomplishment. Sophisticated hand-painted gouache editorial style, warm cream paper, muted olive green, butter yellow, terracotta accents, soft texture, clear simple composition readable as thumbnail. No text, no logos, no fake app UI.

### Media Shuffle prompt

Use case: illustration-story. Create a wide 3:2 editorial illustration for an article about rediscovering stored photos with a photo shuffle app. A cozy wooden table with a loose flowing arrangement of beautiful printed landscape snapshots: ocean, mountains, autumn trees, night lights. A hand gently picks up one photo, a small closed album and cup nearby, inviting sense of chance discovery and memories. Sophisticated hand-painted gouache and colored pencil, warm cream paper texture, muted sage, dusty blue, terracotta, soft sunlight. Clear uncluttered composition readable as thumbnail. No text, no logos, no fake UI, no personal identifiable photographs.


## アプリ内コンテンツ参照・本文画像（2026-10-16）

内蔵image_genに公開素材を参照画像として渡して6点生成。1200×800 WebPに変換。従来の生活風景イラストを差し替え、各記事の本文に2枚追加。人物・個人の家事記録・私的写真は使用していない。

参照元:
- 家事: https://weekend-kaji-battle.vercel.app/ の青・オレンジのファイターと配色、および https://weekend-kaji-battle.vercel.app/assets/stamps/rest-rabbit.png
- Media Shuffle: https://media-shuffle-preview.vercel.app/sample/dawn.jpg （公開デモ「夜明けの水平線」）

イラストは機能説明用に構成したもので、実画面やスタンプそのものの複製ではない。

### kaji-cover-v2

保存先: `site/assets/kaji-cover-v2.webp`

Create a 3:2 editorial cover illustration for Weekend Kaji Battle based on its actual app motifs: TWO rounded bear-eared fighter mascots, one dusty blue and one coral orange, cream oval faces, dot eyes, tiny smiling mouths, rosy cheeks, mitten hands, dark charcoal belts, friendly compact bodies. They stand together beside a laundry basket, dishes and small achievement stars. Pale lime and warm offwhite background, charcoal outlines. Match the soft outlined kawaii graphic language of the attached actual rabbit stamp, but the MAIN mascots must have round bear ears, NOT rabbit ears. No people, no living room, no text, no UI, no trophy. Wide clean composition, charming restrained flat illustration. This is an editorial illustration, not a screenshot.

### kaji-record-v2

保存先: `site/assets/kaji-record-v2.webp`

Create a 3:2 editorial explanation illustration for recording chores and seeing a week's progress in Weekend Kaji Battle. Actual app motifs: blue and coral round bear-eared fighter mascots with cream oval faces, tiny dot eyes, rosy cheeks, dark belts. A simple seven-space weekly strip has little blue/coral footprint marks; a laundry basket and dishwashing icon sit beside it. Suggest small daily chores adding up. Soft flat kawaii illustration, thick charcoal outlines, pale lime/offwhite background, inspired by the attached app rabbit stamp's visual style. No real names, numbers, dates, text, invented UI buttons, or people. Not a screenshot.

### kaji-stamps-v2

保存先: `site/assets/kaji-stamps-v2.webp`

Create a 3:2 editorial illustration for a thank-you stamp feature in Weekend Kaji Battle. Use the attached actual rabbit stamp as a close reference: cream rabbit, long ears with coral centers, closed gentle eyes, thick dark outline, rosy cheeks, blue steaming mug. Feature this rabbit prominently as a floating sticker, with a warm brown bear thank-you sticker and friendly orange fox encouragement sticker arranged around a small heart. Warm offwhite and very pale lime background, blue and coral accent dots, generous space. Preserve rabbit character style and cup. No text, letters, people, phones or fake UI.

### media-cover-v2

保存先: `site/assets/media-cover-v2.webp`

Create a 3:2 editorial cover for Media Shuffle based closely on its attached PUBLIC DEMO CONTENT. Reuse the exact quiet visual language of the sample: broad simplified rolling mountain silhouettes, pale circular sun, peach dawn sky, slate blue and muted teal layers. Compose three overlapping landscape image panels, the main one showing this dawn landscape and the other two soft mist/sea variants. Warm offwhite background, thin refined edges, lots of breathing room. This represents random discovery of demo images. No physical printed photos, wooden desk, albums, coffee, people, letters, controls, or fake screenshot. Elegant flat digital illustration.

### media-shuffle-v2

保存先: `site/assets/media-shuffle-v2.webp`

Create a 3:2 explanatory editorial illustration for RANDOMLY DISPLAYING ONE IMAGE in Media Shuffle. Use attached public demo landscape as exact content/style reference: flat layered slate blue hills, peach sky and pale disk sun. Place one large dawn landscape panel in center, two quieter partial landscape panels behind, small curved shuffle arrows outside panels hint at switching the displayed image. Warm offwhite background, muted teal gray, airy minimalist digital style. Clearly a conceptual illustration, not a UI screenshot. No text, letters, numbers, devices, physical photographs or people.

### media-album-v2

保存先: `site/assets/media-album-v2.webp`

Create a 3:2 explanatory editorial illustration for OPENING AN ALBUM and narrowing what to view in Media Shuffle. Based on attached public demo landscape's style and subject: minimalist broad curved hills, circular sun, soft peach and slate blue. Arrange six equally sized landscape thumbnails in a clean two-row grid, varying misty blue morning, peach dawn, teal coastline and gray mountains; three form a gently emphasized group with muted teal framing. Offwhite background, restrained fine lines, generous margins. Conceptual editorial illustration, no invented app UI, no text, numbers, people, physical photo albums, or buttons.
