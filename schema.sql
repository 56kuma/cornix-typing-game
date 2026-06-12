-- CORNIX TYPER ranking table (Cloudflare D1)
CREATE TABLE IF NOT EXISTS scores (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,
  score      INTEGER NOT NULL,
  words      INTEGER NOT NULL DEFAULT 0,
  miss       INTEGER NOT NULL DEFAULT 0,
  mode       TEXT    NOT NULL DEFAULT 'en',   -- 'en' | 'jp'
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_scores_mode_score ON scores (mode, score DESC, created_at ASC);
