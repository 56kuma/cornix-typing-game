# CORNIX TYPER — 60s NEON PROTOCOL

分割キーボード **Cornix** のための近未来SFタイピングゲーム。
Cloudflare Workers + 静的アセット(HTML/CSS/JS)+ D1(ランキング)のシンプル構成。

![rank](https://img.shields.io/badge/TIME-60s-00f0ff) ![stack](https://img.shields.io/badge/stack-Workers%20%2B%20D1-f38020)

## 遊び方

- **2モード**: タイトルで選択(選択は記憶される)
  - **ENGLISH** — SF英単語をそのままタイプ
  - **日本語** — SF用語(人工知能、超光速航法 など)を**ローマ字入力**。
    ヘボン式/訓令式どちらもOK(shi/si、chi/ti、ja/jya/zya、ん=n/nn/xn、っ=子音重ね)。
    表示はヘボン式優先で、打った表記に合わせて残りが追従する
- **60秒**以内に単語を打ちまくる
- 画面下部の **Cornixキーガイド** が次に押すキーを光って教えてくれる(指のガイド付き)
- 正確タイプでコンボが伸び、倍率が **×2(10コンボ) → ×3(25) → ×4(50)** と加速
- ×3以上で **FEVER** 突入(背景がマゼンタに染まり星が加速)
- たまに出る **★GOLD WORD** は得点3倍
- ミスタイプは **−15pt & コンボ消滅**

### スコアリング

| イベント | 得点 |
| --- | --- |
| 正タイプ1打 | 10 × コンボ倍率 (× GOLD3倍) |
| 単語クリア | 100 × コンボ倍率 (× GOLD3倍) |
| ミスタイプ | −15、コンボリセット |

リザルトでは E〜SSS のランク称号、次ランクまでの残りポイント、自己ベスト更新表示で
「もう1回」を煽ってくる。ランキングはグローバル(D1)に登録可能。

## ローカルで動かす

```sh
npm install
npm run db:init:local   # ローカルD1にスキーマ投入(初回のみ)
npm run dev             # http://localhost:8787
```

D1なしでも動く(ランキングはブラウザのlocalStorage保存になり `[LOCAL MODE]` 表示)。

## Cloudflareへデプロイ

```sh
npm install
npx wrangler login

# 1. D1データベース作成
npx wrangler d1 create cornix-typing
#    → 出力された database_id を wrangler.toml の REPLACE_WITH_YOUR_D1_DATABASE_ID に貼る

# 2. スキーマ投入
npm run db:init

# 3. デプロイ
npm run deploy
```

ランキング不要なら `wrangler.toml` の `[[d1_databases]]` セクションを削除するだけでOK
(クライアントが自動でローカル保存にフォールバックする)。

## 構成

```
public/          フロントエンド(素のHTML/CSS/JS)
  index.html
  style.css
  game.js        ゲームロジック・Cornixキーガイド・WebAudio効果音・パーティクル
src/worker.js    Worker: 静的配信 + /api/ranking (GET: top20 / POST: スコア登録)
schema.sql       D1スキーマ
wrangler.toml    Workers設定
```

## API

- `GET /api/ranking?mode=en|jp` → モード別上位20件 `[{name, score, words, miss, created_at}]`
- `POST /api/ranking` `{name, score, words, miss, mode}` → `{ok, rank}`
  (name 12文字まで・制御文字除去、score 0–99999 の整数のみ受理。ランキングはモード別)
