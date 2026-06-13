# CORNIX TYPER — 60s NEON PROTOCOL

分割キーボード **Cornix** 向けの近未来SFタイピングゲーム。
Cloudflare Workers + 静的HTML/CSS/JS + D1(ランキング)。

## 遊び方

- **60秒**でSF単語を打ちまくる。2モード(タイトルで選択・記憶)
  - **ENGLISH** … SF英単語
  - **日本語** … SF用語をローマ字入力(ヘボン式/訓令式・`n`/`nn`・促音対応)
- 画面下部の **Cornixキーガイド**(実機準拠レイアウト)が次キーと指を発光案内
- コンボ倍率 **×2(10)→×3(25)→×4(50)**、×3以上で **FEVER**
- **★GOLD WORD** は得点3倍 / ミスは **−15pt & コンボ消滅**
- リザルト: ランク称号(E〜SSS)・苦手キーTOP5・自己ベスト、ランキングはモード別

| 得点 | |
| --- | --- |
| 正タイプ | 10 × 倍率(×GOLD3) |
| 単語クリア | 100 × 倍率(×GOLD3) |
| ミス | −15・コンボ0 |

## ローカル実行

```sh
npm install
npm run db:init:local   # 初回のみ
npm run dev             # http://localhost:8787
```

D1なしでも動作(ランキングはlocalStorageに保存・`[LOCAL MODE]`表示)。

## デプロイ

```sh
npx wrangler login                     # Cloudflareアカウントに認証（初回のみ）
# npx wrangler d1 create cornix-typing   # DB未作成の場合のみ。database_id を wrangler.toml に貼る
npm run db:init                        # 本番D1にテーブルを作成（IF NOT EXISTS なので冪等）
npm run deploy                         # Cloudflare Workers にデプロイ
```

> `wrangler.toml` に `database_id` が入っていれば `d1 create` は不要。

## 構成 / API

```
public/   index.html · style.css · game.js
src/worker.js   静的配信 + /api/ranking
schema.sql · wrangler.toml
```

- `GET /api/ranking?mode=en|jp` → モード別 上位20件
- `POST /api/ranking` `{name,score,words,miss,mode}` → `{ok,rank}`

## Cloudflare 構成図

```
┌─────────────────────────────────────────────────────────┐
│                   Cloudflare Edge                        │
│                                                          │
│  ブラウザ ──HTTP──▶ Workers (src/worker.js)              │
│                         │                               │
│          ┌──────────────┴──────────────┐                │
│          │ /api/ranking ?               │ それ以外        │
│          ▼                             ▼                │
│   D1 Database (DB binding)     ASSETS binding           │
│   ┌─────────────────────┐      ┌──────────────────┐     │
│   │ scores テーブル      │      │ public/          │     │
│   │  id, name, score    │      │  index.html      │     │
│   │  words, miss, mode  │      │  style.css       │     │
│   │  created_at         │      │  game.js         │     │
│   └─────────────────────┘      └──────────────────┘     │
│                                                          │
└─────────────────────────────────────────────────────────┘

GET  /api/ranking?mode=en|jp  → scores を score DESC で上位20件取得
POST /api/ranking             → scores に INSERT → 自分の順位を返す
それ以外                       → ASSETS から静的ファイルを配信

D1 未バインド時: /api/ranking は 503 を返し、
                ゲーム側は localStorage にフォールバック ([LOCAL MODE])
```
