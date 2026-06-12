/**
 * CORNIX TYPER — Cloudflare Worker
 * - 静的アセット配信 (public/ → ASSETS binding)
 * - /api/ranking : D1 によるランキング API
 *   D1 未バインド時は 503 を返し、クライアントが localStorage にフォールバックする。
 */

const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8' };
const MAX_SCORE = 99999; // 60秒で物理的に到達不可能な値は弾く

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });

// 制御文字 (C0 + DEL) を除去
const sanitizeName = (raw) =>
  Array.from(String(raw))
    .filter((c) => {
      const code = c.codePointAt(0);
      return code >= 32 && code !== 127;
    })
    .join('')
    .trim()
    .slice(0, 12);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/ranking') {
      if (!env.DB) return json({ error: 'ranking database not configured' }, 503);
      try {
        if (request.method === 'GET') return await getRanking(env, url);
        if (request.method === 'POST') return await postScore(request, env);
        return json({ error: 'method not allowed' }, 405);
      } catch (err) {
        console.error(err);
        return json({ error: 'internal error' }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  },
};

async function getRanking(env, url) {
  const mode = url.searchParams.get('mode') === 'jp' ? 'jp' : 'en';
  const { results } = await env.DB.prepare(
    `SELECT name, score, words, miss, created_at
       FROM scores
      WHERE mode = ?1
      ORDER BY score DESC, created_at ASC
      LIMIT 20`
  ).bind(mode).all();
  return json(results);
}

async function postScore(request, env) {
  const body = await request.json().catch(() => null);
  if (!body) return json({ error: 'invalid json' }, 400);

  const name = sanitizeName(body.name ?? '');
  const score = Number(body.score);
  const words = Number(body.words ?? 0);
  const miss = Number(body.miss ?? 0);
  const mode = body.mode === 'jp' ? 'jp' : 'en';

  if (!name) return json({ error: 'name required' }, 400);
  if (!Number.isInteger(score) || score < 0 || score > MAX_SCORE)
    return json({ error: 'invalid score' }, 400);
  if (!Number.isInteger(words) || words < 0 || words > 400) return json({ error: 'invalid words' }, 400);
  if (!Number.isInteger(miss) || miss < 0 || miss > 2000) return json({ error: 'invalid miss' }, 400);

  await env.DB.prepare(
    'INSERT INTO scores (name, score, words, miss, mode) VALUES (?1, ?2, ?3, ?4, ?5)'
  ).bind(name, score, words, miss, mode).run();

  const { rank } = await env.DB.prepare(
    'SELECT COUNT(*) + 1 AS rank FROM scores WHERE mode = ?1 AND score > ?2'
  ).bind(mode, score).first();

  return json({ ok: true, rank });
}
