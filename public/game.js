/* ================= CORNIX TYPER ================= */
'use strict';

/* ---------- word pools (SF) ---------- */
const POOL_SHORT = [
  'ion','bot','hex','orb','warp','core','grid','flux','node','byte',
  'mech','nova','zero','echo','volt','beam','dock','port','scan','sync',
  'ping','data','ai','laser','drone','orbit','comet','radar','sonar','pixel',
  'void','star','moon','mars','ship','code','link','chip','jet','ray',
  'bit','pod','hub','axis','halo','neon','fuel','gear','dome','wire',
  'base','nano','cube','gate','dust',
];
const POOL_MID = [
  'plasma','photon','neutron','quantum','android','cyborg','nebula','galaxy',
  'matrix','neural','cipher','vector','fusion','reactor','gravity','cosmos',
  'protocol','firewall','override','encrypt','decode','uplink','signal','sector',
  'system','stellar','pulsar','quasar','rocket','anomaly','phantom','glitch',
  'kernel','daemon','binary','circuit','sensor','turbine','krypton','machine',
  'engine','fission','module','satellite','asteroid','starship','hologram',
  'shuttle','capsule','cockpit','station','colony','meteor','eclipse','horizon',
  'spectrum','particle','molecule','magnetar','redshift','starbase','railgun',
  'blaster','exosuit','biochip','neuron','synapse','avatar','upload','server',
  'router','scanner','booster','torpedo','shield','stealth','outpost','airlock',
  'habitat','monolith','moonbase','beacon','cluster','gateway','hivemind',
];
const POOL_LONG = [
  'singularity','hyperdrive','terraform','exoplanet','cryosleep','nanomachine',
  'lightspeed','wormhole','supernova','cybernetic','darkmatter','voidwalker',
  'antimatter','mothership','teleporter','telemetry','positron','graviton',
  'mainframe','interstellar','holodeck','spacecruiser','neurolink','overclock',
  'biosphere','blackhole','spacesuit','hypernova','multiverse','cyberspace',
  'terraformer','astronaut','cosmonaut','planetfall','timemachine','dimension',
  'neutronstar','gravitywell','solarflare','cryogenics','xenomorph',
  'spacestation','constellation',
];
const WORD_JP = {
  ion:'イオン', bot:'ボット', hex:'十六進', orb:'オーブ', warp:'ワープ', core:'コア',
  grid:'グリッド', flux:'フラックス', node:'ノード', byte:'バイト', mech:'メック',
  nova:'新星', zero:'ゼロ', echo:'エコー', volt:'ボルト', beam:'ビーム', dock:'ドック',
  port:'ポート', scan:'スキャン', sync:'同期', ping:'ピン', data:'データ', ai:'人工知能',
  laser:'レーザー', drone:'ドローン', orbit:'軌道', comet:'彗星', radar:'レーダー',
  sonar:'ソナー', pixel:'ピクセル', plasma:'プラズマ', photon:'光子', neutron:'中性子',
  quantum:'量子', android:'アンドロイド', cyborg:'サイボーグ', nebula:'星雲',
  galaxy:'銀河', matrix:'マトリックス', neural:'神経の', cipher:'暗号', vector:'ベクトル',
  fusion:'核融合', reactor:'反応炉', gravity:'重力', cosmos:'宇宙', protocol:'プロトコル',
  firewall:'防火壁', override:'上書き制御', encrypt:'暗号化', decode:'解読',
  uplink:'アップリンク', signal:'信号', sector:'セクター', system:'システム',
  stellar:'恒星の', pulsar:'パルサー', quasar:'クエーサー', rocket:'ロケット',
  anomaly:'特異点', phantom:'幻影', glitch:'グリッチ', kernel:'カーネル',
  daemon:'デーモン', binary:'二進数', circuit:'回路', sensor:'センサー',
  turbine:'タービン', krypton:'クリプトン', machine:'機械', engine:'エンジン',
  fission:'核分裂', module:'モジュール', satellite:'人工衛星', asteroid:'小惑星',
  starship:'恒星間船', hologram:'ホログラム', singularity:'シンギュラリティ',
  hyperdrive:'超光速機関', terraform:'惑星改造', exoplanet:'系外惑星',
  cryosleep:'冷凍睡眠', nanomachine:'ナノマシン', lightspeed:'光速',
  wormhole:'ワームホール', supernova:'超新星', cybernetic:'人工頭脳の',
  darkmatter:'暗黒物質', voidwalker:'虚空の歩行者', antimatter:'反物質',
  mothership:'母艦', teleporter:'転送装置', telemetry:'遠隔測定', positron:'陽電子',
  graviton:'重力子', mainframe:'大型計算機', interstellar:'恒星間の',
  holodeck:'仮想甲板', spacecruiser:'宇宙巡洋艦', neurolink:'神経接続',
  overclock:'限界駆動',
  void:'虚空', star:'恒星', moon:'月', mars:'火星', ship:'船', code:'コード',
  link:'接続', chip:'チップ', jet:'ジェット', ray:'光線', bit:'ビット',
  pod:'ポッド', hub:'ハブ', axis:'軸', halo:'光輪', neon:'ネオン', fuel:'燃料',
  gear:'歯車', dome:'ドーム', wire:'配線', base:'基地', nano:'ナノ',
  cube:'立方体', gate:'ゲート', dust:'宇宙塵',
  shuttle:'シャトル', capsule:'カプセル', cockpit:'操縦席', station:'ステーション',
  colony:'コロニー', meteor:'流星', eclipse:'日食', horizon:'地平線',
  spectrum:'スペクトル', particle:'粒子', molecule:'分子', magnetar:'磁気星',
  redshift:'赤方偏移', starbase:'星間基地', railgun:'電磁加速砲',
  blaster:'光線銃', exosuit:'強化服', biochip:'生体チップ', neuron:'神経細胞',
  synapse:'シナプス', avatar:'分身', upload:'転送', server:'サーバー',
  router:'中継機', scanner:'走査機', booster:'加速器', torpedo:'魚雷',
  shield:'防御壁', stealth:'隠密', outpost:'前哨基地', airlock:'気密室',
  habitat:'居住区', monolith:'石碑', moonbase:'月面基地', beacon:'航路標識',
  cluster:'星団', gateway:'関門', hivemind:'集合意識',
  biosphere:'生物圏', blackhole:'ブラックホール', spacesuit:'宇宙服',
  hypernova:'極超新星', multiverse:'多元宇宙', cyberspace:'電脳空間',
  terraformer:'惑星改造機', astronaut:'宇宙飛行士', cosmonaut:'宇宙飛行士',
  planetfall:'惑星着陸', timemachine:'時間機械', dimension:'次元',
  neutronstar:'中性子星', gravitywell:'重力井戸', solarflare:'太陽フレア',
  cryogenics:'低温工学', xenomorph:'異形生命体', spacestation:'宇宙ステーション',
  constellation:'星座',
};

/* ---------- JP mode word pools (SF日本語 / ローマ字入力) ---------- */
const JP_SHORT = [
  { jp: '時空', yomi: 'じくう' },
  { jp: '軌道', yomi: 'きどう' },
  { jp: '光速', yomi: 'こうそく' },
  { jp: '電脳', yomi: 'でんのう' },
  { jp: '銀河', yomi: 'ぎんが' },
  { jp: '宇宙', yomi: 'うちゅう' },
  { jp: '量子', yomi: 'りょうし' },
  { jp: '衛星', yomi: 'えいせい' },
  { jp: '彗星', yomi: 'すいせい' },
  { jp: '火星', yomi: 'かせい' },
  { jp: '月面', yomi: 'げつめん' },
  { jp: '信号', yomi: 'しんごう' },
  { jp: '回路', yomi: 'かいろ' },
  { jp: '装甲', yomi: 'そうこう' },
  { jp: '加速', yomi: 'かそく' },
  { jp: '未来', yomi: 'みらい' },
  { jp: '機械', yomi: 'きかい' },
  { jp: '惑星', yomi: 'わくせい' },
  { jp: '重力', yomi: 'じゅうりょく' },
  { jp: '探査機', yomi: 'たんさき' },
  { jp: '真空', yomi: 'しんくう' },
  { jp: '磁場', yomi: 'じば' },
  { jp: '電波', yomi: 'でんぱ' },
  { jp: '燃料', yomi: 'ねんりょう' },
  { jp: '酸素', yomi: 'さんそ' },
  { jp: '大気', yomi: 'たいき' },
  { jp: '隕石', yomi: 'いんせき' },
  { jp: '流星', yomi: 'りゅうせい' },
  { jp: '残骸', yomi: 'ざんがい' },
  { jp: '暗号', yomi: 'あんごう' },
  { jp: '端末', yomi: 'たんまつ' },
  { jp: '発射', yomi: 'はっしゃ' },
  { jp: '噴射', yomi: 'ふんしゃ' },
  { jp: '制御', yomi: 'せいぎょ' },
  { jp: '融合', yomi: 'ゆうごう' },
  { jp: '基地', yomi: 'きち' },
  { jp: '通信', yomi: 'つうしん' },
  { jp: '充電', yomi: 'じゅうでん' },
  { jp: '浮遊', yomi: 'ふゆう' },
  { jp: '探知', yomi: 'たんち' },
  { jp: '防壁', yomi: 'ぼうへき' },
  { jp: '結晶', yomi: 'けっしょう' },
  { jp: '次元', yomi: 'じげん' },
  { jp: '粒子', yomi: 'りゅうし' },
  { jp: '原子', yomi: 'げんし' },
  { jp: '電子', yomi: 'でんし' },
  { jp: '動力', yomi: 'どうりょく' },
  { jp: '推力', yomi: 'すいりょく' },
  { jp: '操縦', yomi: 'そうじゅう' },
  { jp: '司令', yomi: 'しれい' },
];
const JP_MID = [
  { jp: '人工知能', yomi: 'じんこうちのう' },
  { jp: '宇宙戦艦', yomi: 'うちゅうせんかん' },
  { jp: '反物質', yomi: 'はんぶっしつ' },
  { jp: '超新星', yomi: 'ちょうしんせい' },
  { jp: '仮想現実', yomi: 'かそうげんじつ' },
  { jp: '銀河帝国', yomi: 'ぎんがていこく' },
  { jp: '重力波', yomi: 'じゅうりょくは' },
  { jp: '異星人', yomi: 'いせいじん' },
  { jp: '電磁砲', yomi: 'でんじほう' },
  { jp: '冷凍睡眠', yomi: 'れいとうすいみん' },
  { jp: '量子暗号', yomi: 'りょうしあんごう' },
  { jp: '時空跳躍', yomi: 'じくうちょうやく' },
  { jp: '軌道修正', yomi: 'きどうしゅうせい' },
  { jp: '転送装置', yomi: 'てんそうそうち' },
  { jp: '人工衛星', yomi: 'じんこうえいせい' },
  { jp: '電脳空間', yomi: 'でんのうくうかん' },
  { jp: '暗黒星雲', yomi: 'あんこくせいうん' },
  { jp: 'ロボット', yomi: 'ろぼっと' },
  { jp: '宇宙人', yomi: 'うちゅうじん' },
  { jp: '多元宇宙', yomi: 'たげんうちゅう' },
  { jp: '電脳都市', yomi: 'でんのうとし' },
  { jp: '機動兵器', yomi: 'きどうへいき' },
  { jp: '恒星間', yomi: 'こうせいかん' },
  { jp: '亜空間', yomi: 'あくうかん' },
  { jp: '反応炉', yomi: 'はんのうろ' },
  { jp: '推進装置', yomi: 'すいしんそうち' },
  { jp: '居住区', yomi: 'きょじゅうく' },
  { jp: '防護服', yomi: 'ぼうごふく' },
  { jp: '自動操縦', yomi: 'じどうそうじゅう' },
  { jp: '量子通信', yomi: 'りょうしつうしん' },
  { jp: '培養槽', yomi: 'ばいようそう' },
  { jp: '月面基地', yomi: 'げつめんきち' },
  { jp: '火星移住', yomi: 'かせいいじゅう' },
  { jp: '軌道降下', yomi: 'きどうこうか' },
  { jp: '光子魚雷', yomi: 'こうしぎょらい' },
  { jp: '超伝導', yomi: 'ちょうでんどう' },
  { jp: '人造人間', yomi: 'じんぞうにんげん' },
  { jp: '宇宙海賊', yomi: 'うちゅうかいぞく' },
  { jp: '銀河連邦', yomi: 'ぎんがれんぽう' },
  { jp: '仮想人格', yomi: 'かそうじんかく' },
  { jp: '電磁加速砲', yomi: 'でんじかそくほう' },
];
const JP_LONG = [
  { jp: '超光速航法', yomi: 'ちょうこうそくこうほう' },
  { jp: '人工冬眠装置', yomi: 'じんこうとうみんそうち' },
  { jp: '自己増殖機械', yomi: 'じこぞうしょくきかい' },
  { jp: '軌道防衛網', yomi: 'きどうぼうえいもう' },
  { jp: '宇宙開発計画', yomi: 'うちゅうかいはつけいかく' },
  { jp: '知的生命体', yomi: 'ちてきせいめいたい' },
  { jp: '惑星改造計画', yomi: 'わくせいかいぞうけいかく' },
  { jp: '反重力装置', yomi: 'はんじゅうりょくそうち' },
  { jp: '暗黒物質', yomi: 'あんこくぶっしつ' },
  { jp: '機械生命体', yomi: 'きかいせいめいたい' },
  { jp: '宇宙飛行士', yomi: 'うちゅうひこうし' },
  { jp: '人工重力', yomi: 'じんこうじゅうりょく' },
  { jp: '観測衛星', yomi: 'かんそくえいせい' },
  { jp: '遺伝子改造', yomi: 'いでんしかいぞう' },
  { jp: '重力制御', yomi: 'じゅうりょくせいぎょ' },
  { jp: '強化外骨格', yomi: 'きょうかがいこっかく' },
  { jp: '超光速通信', yomi: 'ちょうこうそくつうしん' },
  { jp: '量子転送装置', yomi: 'りょうしてんそうそうち' },
  { jp: '宇宙移民船', yomi: 'うちゅういみんせん' },
  { jp: '恒星間飛行', yomi: 'こうせいかんひこう' },
  { jp: '自律戦闘機械', yomi: 'じりつせんとうきかい' },
  { jp: '反物質機関', yomi: 'はんぶっしつきかん' },
  { jp: '銀河標準時', yomi: 'ぎんがひょうじゅんじ' },
  { jp: '惑星防衛軍', yomi: 'わくせいぼうえいぐん' },
  { jp: '電脳監視網', yomi: 'でんのうかんしもう' },
];

/* ---------- romaji engine ---------- */
const KANA = {
  'あ':['a'],'い':['i'],'う':['u'],'え':['e'],'お':['o'],
  'か':['ka'],'き':['ki'],'く':['ku'],'け':['ke'],'こ':['ko'],
  'さ':['sa'],'し':['shi','si'],'す':['su'],'せ':['se'],'そ':['so'],
  'た':['ta'],'ち':['chi','ti'],'つ':['tsu','tu'],'て':['te'],'と':['to'],
  'な':['na'],'に':['ni'],'ぬ':['nu'],'ね':['ne'],'の':['no'],
  'は':['ha'],'ひ':['hi'],'ふ':['fu','hu'],'へ':['he'],'ほ':['ho'],
  'ま':['ma'],'み':['mi'],'む':['mu'],'め':['me'],'も':['mo'],
  'や':['ya'],'ゆ':['yu'],'よ':['yo'],
  'ら':['ra'],'り':['ri'],'る':['ru'],'れ':['re'],'ろ':['ro'],
  'わ':['wa'],'を':['wo'],
  'が':['ga'],'ぎ':['gi'],'ぐ':['gu'],'げ':['ge'],'ご':['go'],
  'ざ':['za'],'じ':['ji','zi'],'ず':['zu'],'ぜ':['ze'],'ぞ':['zo'],
  'だ':['da'],'ぢ':['di'],'づ':['du'],'で':['de'],'ど':['do'],
  'ば':['ba'],'び':['bi'],'ぶ':['bu'],'べ':['be'],'ぼ':['bo'],
  'ぱ':['pa'],'ぴ':['pi'],'ぷ':['pu'],'ぺ':['pe'],'ぽ':['po'],
  'きゃ':['kya'],'きゅ':['kyu'],'きょ':['kyo'],
  'しゃ':['sha','sya'],'しゅ':['shu','syu'],'しょ':['sho','syo'],
  'ちゃ':['cha','tya'],'ちゅ':['chu','tyu'],'ちょ':['cho','tyo'],
  'にゃ':['nya'],'にゅ':['nyu'],'にょ':['nyo'],
  'ひゃ':['hya'],'ひゅ':['hyu'],'ひょ':['hyo'],
  'みゃ':['mya'],'みゅ':['myu'],'みょ':['myo'],
  'りゃ':['rya'],'りゅ':['ryu'],'りょ':['ryo'],
  'ぎゃ':['gya'],'ぎゅ':['gyu'],'ぎょ':['gyo'],
  'じゃ':['ja','jya','zya'],'じゅ':['ju','jyu','zyu'],'じょ':['jo','jyo','zyo'],
  'びゃ':['bya'],'びゅ':['byu'],'びょ':['byo'],
  'ぴゃ':['pya'],'ぴゅ':['pyu'],'ぴょ':['pyo'],
};

function kanaUnit(chars, i) {
  if (i >= chars.length) return null;
  const two = chars[i] + (chars[i + 1] || '');
  if (chars[i + 1] && KANA[two]) return { text: two, options: KANA[two], len: 2 };
  return { text: chars[i], options: KANA[chars[i]] || [chars[i]], len: 1 };
}

// 読み(ひらがな)→ 入力セグメント列。っ は次のかなと結合(子音重ね)、ん は n/nn ゆれ対応
function buildSegments(yomi) {
  const chars = Array.from(yomi);
  const segs = [];
  let i = 0;
  while (i < chars.length) {
    if (chars[i] === 'っ') {
      const u = kanaUnit(chars, i + 1);
      segs.push({ jp: 'っ' + u.text, options: u.options.map(o => o[0] + o) });
      i += 1 + u.len;
    } else if (chars[i] === 'ん') {
      const u = kanaUnit(chars, i + 1);
      const single = u && !'あいうえおなにぬねのやゆよん'.includes(u.text[0]);
      segs.push({ jp: 'ん', options: single ? ['n', 'nn', 'xn'] : ['nn', 'xn'] });
      i++;
    } else {
      const u = kanaUnit(chars, i);
      segs.push({ jp: u.text, options: u.options.slice() });
      i += u.len;
    }
  }
  for (const s of segs) { s.viable = s.options.slice(); s.typed = 0; s.final = null; }
  return segs;
}

// 1打受理。{ok, complete} を返す。確定済み 'n' の次キーは次セグメントへ持ち越し
function jpAccept(segs, state, ch) {
  for (let hop = 0; hop < 2; hop++) {
    const seg = segs[state.idx];
    if (!seg) return { ok: false, complete: true };
    const matched = seg.viable.filter(o => o.length > seg.typed && o[seg.typed] === ch);
    if (matched.length) {
      seg.viable = matched;
      seg.typed++;
      if (seg.viable.every(o => o.length === seg.typed)) {
        seg.final = seg.viable[0];
        state.idx++;
      }
      return { ok: true, complete: state.idx >= segs.length };
    }
    const done = seg.viable.find(o => o.length === seg.typed);
    if (done && state.idx < segs.length - 1) {
      seg.final = done;
      state.idx++;
      continue; // 持ち越したキーを次セグメントで再判定
    }
    return { ok: false, complete: false };
  }
  return { ok: false, complete: false };
}

// 表示用ローマ字列と現在位置(優先表記で組み立て)
function jpDisplay(segs, state) {
  let str = '';
  let cur = 0;
  segs.forEach((seg, i) => {
    if (i < state.idx) {
      str += seg.final;
    } else if (i === state.idx) {
      const pre = seg.viable[0].slice(0, seg.typed);
      cur = str.length + pre.length;
      str += pre + seg.viable[0].slice(seg.typed);
    } else {
      str += seg.options[0];
    }
  });
  if (state.idx >= segs.length) cur = str.length;
  return { str, cur };
}

/* ---------- ranks ---------- */
const RANKS = [
  { min: 34000, label: 'SSS', cls: 'r-sss', name: '銀河最速伝説' },
  { min: 26000, label: 'SS',  cls: 'r-ss',  name: '量子マスター' },
  { min: 19000, label: 'S',   cls: 'r-s',   name: 'ネオ・シンギュラリティ' },
  { min: 13000, label: 'A',   cls: '',      name: 'サイバーエリート' },
  { min: 8000,  label: 'B',   cls: '',      name: 'エースパイロット' },
  { min: 4000,  label: 'C',   cls: '',      name: 'パイロット' },
  { min: 1500,  label: 'D',   cls: '',      name: 'ルーキー' },
  { min: 0,     label: 'E',   cls: '',      name: '見習いオペレーター' },
];

/* ---------- scoring ---------- */
const GAME_SEC = 60;
const PT_KEY = 10;
const PT_WORD = 100;
const PT_MISS = -15;
const GOLD_RATE = 0.12;
const GOLD_MULT = 3;
const multOf = c => (c >= 50 ? 4 : c >= 25 ? 3 : c >= 10 ? 2 : 1);

/* ---------- Cornix layout (3x6 + 3 thumbs per half) ---------- */
const LAYOUT = {
  left: {
    cols: [
      ['Tab', 'Ctl', 'Sft'],
      ['q', 'a', 'z'],
      ['w', 's', 'x'],
      ['e', 'd', 'c'],
      ['r', 'f', 'v'],
      ['t', 'g', 'b'],
    ],
    offsets: [14, 14, 5, 0, 7, 10],
    thumbs: ['Gui', 'Lwr', ' '],          // ' ' = space key
  },
  right: {
    cols: [
      ['y', 'h', 'n'],
      ['u', 'j', 'm'],
      ['i', 'k', ','],
      ['o', 'l', '.'],
      ['p', ';', '/'],
      ['Bsp', "'", 'Sft'],
    ],
    offsets: [10, 7, 0, 5, 14, 14],
    thumbs: ['Ent', 'Rse', 'Alt'],
  },
};
// 列→指 (左手は外側→内側、右手は内側→外側の並びなので別定義)
const FINGER = {
  left:  ['小指', '小指', '薬指', '中指', '人差し指', '人差し指'],
  right: ['人差し指', '人差し指', '中指', '薬指', '小指', '小指'],
};

const keyEls = {};   // char -> {el, hand, finger}

function buildKeyboard() {
  const kbd = document.getElementById('kbd');
  for (const hand of ['left', 'right']) {
    const half = document.createElement('div');
    half.className = `kbd-half ${hand}`;
    LAYOUT[hand].cols.forEach((col, ci) => {
      const colEl = document.createElement('div');
      colEl.className = 'kbd-col';
      colEl.style.marginTop = LAYOUT[hand].offsets[ci] + 'px';
      col.forEach(k => colEl.appendChild(makeKey(k, hand, ci, false)));
      half.appendChild(colEl);
    });
    const thumbs = document.createElement('div');
    thumbs.className = 'kbd-thumbs';
    LAYOUT[hand].thumbs.forEach(k => thumbs.appendChild(makeKey(k, hand, -1, true)));
    half.appendChild(thumbs);
    kbd.appendChild(half);
  }
}
function makeKey(k, hand, ci, isThumb) {
  const el = document.createElement('div');
  const isChar = k.length === 1;
  el.className = 'key' + (isChar ? '' : ' mod') + (isThumb ? ' thumb' : '');
  el.textContent = k === ' ' ? 'Spc' : k;
  if (isChar) {
    keyEls[k] = {
      el, hand,
      finger: isThumb ? '親指' : FINGER[hand][ci],
    };
  }
  return el;
}

/* ---------- DOM refs ---------- */
const $ = id => document.getElementById(id);
const els = {};
['hud','score','combo','mult','timer-bar','time-num','stage',
 'screen-title','screen-count','screen-game','screen-result','count-num',
 'word','word-jp','next-word-text','gold-tag','fever-tag','finger-hint',
 'timeup','result-rank','result-rank-name','result-score','result-record',
 'result-next-rank','st-words','st-kpm','st-acc','st-maxcombo','st-miss',
 'miss-keys','miss-key-list',
 'name-input','btn-submit','btn-retry','btn-start','btn-title','mute',
 'ranking-list-title','ranking-list-result','ranking-mode-tag','ranking-mode-tag2',
].forEach(id => els[id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = $(id));

/* ---------- game state ---------- */
const S = {
  phase: 'title',        // title | count | play | result
  mode: localStorage.getItem('ct_mode') === 'jp' ? 'jp' : 'en',
  score: 0, combo: 0, maxCombo: 0,
  hits: 0, misses: 0, words: 0,
  word: '', pos: 0, gold: false, nextEntry: null,
  jpEntry: null, segs: [], segState: { idx: 0 },   // jp mode
  missMap: {},                                      // 押すべきだったキー → ミス回数
  endAt: 0, submitted: false,
};
let highlightedKey = null;

/* ---------- audio (WebAudio, no assets) ---------- */
let AC = null;
let muted = localStorage.getItem('ct_mute') === '1';
function ac() {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
}
function tone(freq, dur, type = 'square', vol = 0.06, when = 0, slide = 0) {
  if (muted) return;
  try {
    const ctx = ac(), t = ctx.currentTime + when;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t); o.stop(t + dur + 0.02);
  } catch (_) { /* audio unavailable */ }
}
const sfx = {
  type()  { tone(Math.min(1500, 720 + S.combo * 9), 0.06, 'square', 0.05); },
  miss()  { tone(120, 0.18, 'sawtooth', 0.09, 0, -60); },
  word()  { [660, 880, 1320].forEach((f, i) => tone(f, 0.1, 'triangle', 0.07, i * 0.05)); },
  gold()  { [880, 1100, 1320, 1760].forEach((f, i) => tone(f, 0.12, 'triangle', 0.08, i * 0.06)); },
  fever() { tone(300, 0.5, 'sawtooth', 0.06, 0, 900); },
  count() { tone(880, 0.1, 'square', 0.07); },
  go()    { tone(1320, 0.3, 'square', 0.08); },
  end()   { [523, 392, 330, 262].forEach((f, i) => tone(f, 0.25, 'triangle', 0.08, i * 0.12)); },
  rank()  { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.2, 'triangle', 0.08, i * 0.09)); },
};

/* ---------- particles & starfield ---------- */
const fxCanvas = $('fx'), fxCtx = fxCanvas.getContext('2d');
let particles = [], stars = [];
function resizeFx() {
  fxCanvas.width = innerWidth; fxCanvas.height = innerHeight;
  stars = Array.from({ length: 110 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    z: 0.3 + Math.random() * 1.4,
  }));
}
addEventListener('resize', resizeFx);
resizeFx();

function burst(x, y, color, n = 16, speed = 5) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = (0.4 + Math.random()) * speed;
    particles.push({
      x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1.5,
      life: 1, decay: 0.02 + Math.random() * 0.025,
      size: 1.5 + Math.random() * 3, color,
    });
  }
}
function burstAt(el, color, n, speed) {
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, color, n, speed);
}

let lastFrame = performance.now();
function fxLoop(now) {
  const dt = Math.min(50, now - lastFrame) / 16.7;
  lastFrame = now;
  fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);

  // starfield — speeds up with combo (warp feel)
  const warp = 1 + Math.min(6, S.phase === 'play' ? S.combo / 12 : 0);
  const fever = multOf(S.combo) >= 3 && S.phase === 'play';
  fxCtx.fillStyle = fever ? 'rgba(255,120,230,0.8)' : 'rgba(160,220,255,0.7)';
  for (const st of stars) {
    const len = 1 + st.z * warp * 2.2;
    fxCtx.globalAlpha = 0.25 + st.z * 0.35;
    fxCtx.fillRect(st.x, st.y, st.z > 1.2 ? 2 : 1, len);
    st.y += st.z * warp * 1.6 * dt;
    if (st.y > innerHeight) { st.y = -len; st.x = Math.random() * innerWidth; }
  }
  fxCtx.globalAlpha = 1;

  // particles
  particles = particles.filter(p => p.life > 0);
  for (const p of particles) {
    p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 0.12 * dt;
    p.life -= p.decay * dt;
    fxCtx.globalAlpha = Math.max(0, p.life);
    fxCtx.fillStyle = p.color;
    fxCtx.fillRect(p.x, p.y, p.size, p.size);
  }
  fxCtx.globalAlpha = 1;

  // timer
  if (S.phase === 'play') {
    const left = Math.max(0, (S.endAt - now) / 1000);
    els.timerBar.style.width = (left / GAME_SEC * 100) + '%';
    els.timerBar.classList.toggle('warn', left <= 10);
    els.timeNum.textContent = left.toFixed(1);
    if (left <= 0) endGame();
  }
  requestAnimationFrame(fxLoop);
}
requestAnimationFrame(fxLoop);

/* ---------- screens ---------- */
function showScreen(name) {
  for (const s of ['screen-title', 'screen-count', 'screen-game', 'screen-result'])
    $(s).classList.toggle('hidden', s !== 'screen-' + name);
}

/* ---------- word handling ---------- */
function poolWeights() {
  const elapsed = GAME_SEC - Math.max(0, (S.endAt - performance.now()) / 1000);
  return elapsed < 15 ? [0.5, 0.4, 0.1] : elapsed < 35 ? [0.25, 0.5, 0.25] : [0.15, 0.45, 0.4];
}

function pickWord() {
  const w = poolWeights();
  const r = Math.random();
  if (S.mode === 'jp') {
    const pool = r < w[0] ? JP_SHORT : r < w[0] + w[1] ? JP_MID : JP_LONG;
    let entry;
    do { entry = pool[Math.floor(Math.random() * pool.length)]; }
    while (S.jpEntry && entry.jp === S.jpEntry.jp);
    return entry;
  }
  const pool = r < w[0] ? POOL_SHORT : r < w[0] + w[1] ? POOL_MID : POOL_LONG;
  let word;
  do { word = pool[Math.floor(Math.random() * pool.length)]; } while (word === S.word);
  return word;
}

function queueNext() {
  S.nextEntry = { word: pickWord(), gold: Math.random() < GOLD_RATE };
  const label = S.mode === 'jp' ? S.nextEntry.word.jp : S.nextEntry.word.toUpperCase();
  els.nextWordText.textContent = label + (S.nextEntry.gold ? ' ★' : '');
}

function loadWord(first) {
  const entry = first ? { word: pickWord(), gold: Math.random() < GOLD_RATE } : S.nextEntry;
  S.gold = entry.gold;
  els.word.classList.toggle('gold', S.gold);
  els.goldTag.classList.toggle('hidden', !S.gold);
  els.wordJp.classList.toggle('gold', S.gold);

  if (S.mode === 'jp') {
    S.jpEntry = entry.word;
    S.segs = buildSegments(S.jpEntry.yomi);
    S.segState = { idx: 0 };
    els.wordJp.textContent = S.jpEntry.jp;
    queueNext();
    renderRoma();
    return;
  }

  S.word = entry.word; S.pos = 0;
  els.wordJp.textContent = WORD_JP[S.word] || '';
  els.word.innerHTML = '';
  for (const ch of S.word) {
    const sp = document.createElement('span');
    sp.textContent = ch;
    sp.className = 'todo';
    els.word.appendChild(sp);
  }
  queueNext();
  paintWord();
}

function paintWord() {
  const spans = els.word.children;
  for (let i = 0; i < spans.length; i++)
    spans[i].className = i < S.pos ? 'done' : i === S.pos ? 'cur' : 'todo';
  els.word.classList.toggle('longword', S.word.length > 12);
  highlightKey(S.word[S.pos]);
}

// JPモード: ローマ字表示を毎回組み立て直す(表記ゆれで残り表示が変わるため)
function renderRoma() {
  const { str, cur } = jpDisplay(S.segs, S.segState);
  els.word.innerHTML = '';
  Array.from(str).forEach((ch, i) => {
    const sp = document.createElement('span');
    sp.textContent = ch;
    sp.className = i < cur ? 'done' : i === cur ? 'cur' : 'todo';
    els.word.appendChild(sp);
  });
  els.word.classList.toggle('longword', str.length > 12);
  highlightKey(str[cur]);
  return cur;
}

function highlightKey(ch) {
  if (highlightedKey) {
    highlightedKey.el.classList.remove('next', 'goldkey');
    highlightedKey = null;
  }
  if (!ch || !keyEls[ch]) { els.fingerHint.innerHTML = '&nbsp;'; return; }
  const k = keyEls[ch];
  k.el.classList.add('next');
  if (S.gold) k.el.classList.add('goldkey');
  highlightedKey = k;
  els.fingerHint.innerHTML =
    `NEXT&nbsp;▸&nbsp;<b>${ch.toUpperCase()}</b>&nbsp;｜&nbsp;${k.hand === 'left' ? '左手' : '右手'}・${k.finger}`;
}

function flashKey(ch, cls) {
  const k = keyEls[ch];
  if (!k) return;
  k.el.classList.add(cls);
  setTimeout(() => k.el.classList.remove(cls), 110);
}

/* ---------- score popups ---------- */
function floatScore(text, el, cls = '') {
  const r = el.getBoundingClientRect();
  const f = document.createElement('div');
  f.className = 'float-score ' + cls;
  f.textContent = text;
  f.style.left = (r.left + r.width / 2 - 30 + (Math.random() * 60 - 30)) + 'px';
  f.style.top = (r.top - 8) + 'px';
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 850);
}

function addScore(pts) {
  S.score = Math.max(0, S.score + pts);
  els.score.textContent = S.score.toLocaleString();
  els.score.classList.remove('bump');
  void els.score.offsetWidth;
  els.score.classList.add('bump');
}

function updateComboUI() {
  els.combo.textContent = S.combo;
  const m = multOf(S.combo);
  els.mult.textContent = '×' + m;
  els.mult.className = 'mult-badge' + (m > 1 ? ' m' + m : '');
  const fever = m >= 3;
  els.feverTag.classList.toggle('hidden', !fever);
  document.body.classList.toggle('fever', fever);
}

/* ---------- input ---------- */
addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  if (S.phase === 'title' && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault(); startCountdown(); return;
  }
  if (S.phase === 'result') {
    const tag = document.activeElement && document.activeElement.tagName;
    if (e.key === 'Enter' && tag !== 'INPUT' && tag !== 'BUTTON') {
      e.preventDefault(); startCountdown();
    } else if (e.key === 'Escape') {
      e.preventDefault(); goTitle();
    }
    return;
  }
  if (S.phase !== 'play') return;
  if (e.key.length !== 1) return;
  e.preventDefault();

  const ch = e.key.toLowerCase();
  let hit = false, complete = false, span = null;

  if (S.mode === 'jp') {
    const res = jpAccept(S.segs, S.segState, ch);
    hit = res.ok; complete = res.complete;
    if (hit) {
      const cur = renderRoma();
      span = els.word.children[Math.max(0, cur - 1)];
    }
  } else if (ch === S.word[S.pos]) {
    hit = true;
    S.pos++;
    complete = S.pos >= S.word.length;
    paintWord();
    span = els.word.children[S.pos - 1];
  }

  if (hit) {
    const prevMult = multOf(S.combo);
    S.hits++; S.combo++;
    S.maxCombo = Math.max(S.maxCombo, S.combo);
    const m = multOf(S.combo);
    if (m >= 3 && prevMult < 3) sfx.fever();
    addScore(PT_KEY * m * (S.gold ? GOLD_MULT : 1));
    sfx.type();
    flashKey(ch, 'hit');
    if (span) {
      span.classList.add('hitpop');
      burstAt(span, S.gold ? '#ffd24a' : '#00f0ff', 6, 3.5);
    }
    if (complete) {
      S.words++;
      const bonus = PT_WORD * m * (S.gold ? GOLD_MULT : 1);
      addScore(bonus);
      floatScore('+' + bonus, els.word, S.gold ? 'gold' : '');
      burstAt(els.word, S.gold ? '#ffd24a' : '#ff2bd6', S.gold ? 46 : 28, 7);
      S.gold ? sfx.gold() : sfx.word();
      loadWord(false);
    }
    updateComboUI();
  } else {
    S.misses++;
    S.combo = 0;
    const expected = S.mode === 'jp'
      ? (() => { const d = jpDisplay(S.segs, S.segState); return d.str[d.cur]; })()
      : S.word[S.pos];
    if (expected) S.missMap[expected] = (S.missMap[expected] || 0) + 1;
    addScore(PT_MISS);
    floatScore(String(PT_MISS), els.word, 'neg');
    sfx.miss();
    flashKey(ch, 'wrong');
    updateComboUI();
    document.getElementById('app').classList.remove('shake');
    void document.getElementById('app').offsetWidth;
    document.getElementById('app').classList.add('shake');
    document.body.classList.remove('missflash');
    void document.body.offsetWidth;
    document.body.classList.add('missflash');
  }
});

/* ---------- flow ---------- */
function startCountdown() {
  if (S.phase === 'count') return;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  ac(); // unlock audio
  S.phase = 'count';
  showScreen('count');
  els.hud.classList.add('hidden');
  let n = 3;
  const tick = () => {
    if (n > 0) {
      els.countNum.textContent = n;
      els.countNum.style.animation = 'none';
      void els.countNum.offsetWidth;
      els.countNum.style.animation = '';
      sfx.count();
      n--;
      setTimeout(tick, 800);
    } else {
      els.countNum.textContent = 'GO!';
      sfx.go();
      setTimeout(startGame, 350);
    }
  };
  tick();
}

function startGame() {
  Object.assign(S, {
    phase: 'play', score: 0, combo: 0, maxCombo: 0,
    hits: 0, misses: 0, words: 0, pos: 0, word: '', submitted: false,
    missMap: {},
  });
  S.endAt = performance.now() + GAME_SEC * 1000;
  els.score.textContent = '0';
  updateComboUI();
  els.hud.classList.remove('hidden');
  $('screen-game').classList.toggle('jp', S.mode === 'jp');
  showScreen('game');
  loadWord(true);
}

function rankOf(score) { return RANKS.find(r => score >= r.min); }

function goTitle() {
  S.phase = 'title';
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  els.hud.classList.add('hidden');
  showScreen('title');
  fetchRanking();
}

function endGame() {
  S.phase = 'result';
  highlightKey(null);
  document.body.classList.remove('fever');
  els.feverTag.classList.add('hidden');
  sfx.end();
  showScreen('result');

  const rank = rankOf(S.score);
  els.resultRank.textContent = rank.label;
  els.resultRank.className = rank.cls;
  els.resultRankName.textContent = rank.name;
  setTimeout(() => sfx.rank(), 400);

  // next-rank carrot
  const idx = RANKS.indexOf(rank);
  els.resultNextRank.innerHTML = idx > 0
    ? `▲ ${RANKS[idx - 1].label} ランクまであと <b>${(RANKS[idx - 1].min - S.score).toLocaleString()}</b> pt`
    : 'あなたは銀河の頂点に立った。';

  // best score (モード別)
  const bestKey = 'ct_best_' + S.mode;
  const best = +(localStorage.getItem(bestKey) || 0);
  if (S.score > best) {
    localStorage.setItem(bestKey, S.score);
    els.resultRecord.classList.remove('hidden');
  } else {
    els.resultRecord.classList.add('hidden');
  }

  // stats
  els.stWords.textContent = S.words;
  els.stKpm.textContent = S.hits; // 60s game → keys/min == hits
  const total = S.hits + S.misses;
  els.stAcc.textContent = (total ? (S.hits / total * 100).toFixed(1) : '0.0') + '%';
  els.stMaxcombo.textContent = S.maxCombo;
  els.stMiss.textContent = S.misses;

  // 苦手キー TOP5
  const missTop = Object.entries(S.missMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  els.missKeys.classList.toggle('hidden', !missTop.length);
  els.missKeyList.innerHTML = '';
  for (const [key, count] of missTop) {
    const d = document.createElement('div');
    d.className = 'miss-key';
    const b = document.createElement('b');
    b.textContent = key;
    const c = document.createElement('span');
    c.textContent = '×' + count;
    d.append(b, c);
    els.missKeyList.appendChild(d);
  }

  // score count-up
  const dur = 900, t0 = performance.now();
  const ease = t => 1 - Math.pow(1 - t, 3);
  (function countUp(now) {
    const t = Math.min(1, (now - t0) / dur);
    els.resultScore.textContent = Math.round(S.score * ease(t)).toLocaleString();
    if (t < 1) requestAnimationFrame(countUp);
  })(t0);

  els.nameInput.value = localStorage.getItem('ct_name') || '';
  els.btnSubmit.disabled = false;
  els.btnSubmit.textContent = '登録';
  renderRanking(els.rankingListResult, cachedRanking, null);
}

/* ---------- ranking (API + localStorage fallback) ---------- */
let cachedRanking = [];
let rankingOnline = true;

function localRanking() {
  try { return JSON.parse(localStorage.getItem('ct_ranking_' + S.mode) || '[]'); }
  catch (_) { return []; }
}

async function fetchRanking() {
  try {
    const r = await fetch('/api/ranking?mode=' + S.mode);
    if (!r.ok) throw new Error(r.status);
    cachedRanking = await r.json();
    rankingOnline = true;
  } catch (_) {
    cachedRanking = localRanking();
    rankingOnline = false;
  }
  const tag = (S.mode === 'jp' ? '[日本語]' : '[ENGLISH]') + (rankingOnline ? '' : ' [LOCAL MODE]');
  els.rankingModeTag.textContent = tag;
  els.rankingModeTag2.textContent = tag;
  renderRanking(els.rankingListTitle, cachedRanking, null);
  renderRanking(els.rankingListResult, cachedRanking, null);
}

async function submitScore() {
  const name = (els.nameInput.value.trim() || 'NO NAME').slice(0, 12);
  localStorage.setItem('ct_name', name);
  els.btnSubmit.disabled = true;
  els.btnSubmit.textContent = '…';
  const entry = { name, score: S.score, words: S.words, miss: S.misses, mode: S.mode };

  let ok = false;
  if (rankingOnline) {
    try {
      const r = await fetch('/api/ranking', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(entry),
      });
      ok = r.ok;
    } catch (_) { ok = false; }
  }
  if (!ok) {
    // local fallback
    const list = localRanking();
    list.push({ ...entry, created_at: new Date().toISOString() });
    list.sort((a, b) => b.score - a.score);
    localStorage.setItem('ct_ranking_' + S.mode, JSON.stringify(list.slice(0, 20)));
    rankingOnline = false;
  }
  await fetchRanking();
  renderRanking(els.rankingListResult, cachedRanking, entry);
  els.btnSubmit.textContent = '登録済 ✓';
}

// D1は "YYYY-MM-DD HH:MM:SS"(UTC)、ローカル保存はISO文字列 → 端末のローカル時刻で表示
function fmtDate(s) {
  if (!s) return '';
  const d = new Date(s.includes('T') ? s : s.replace(' ', 'T') + 'Z');
  if (isNaN(d)) return '';
  const p = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}/${p(d.getMonth() + 1)}/${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function renderRanking(listEl, list, me) {
  listEl.innerHTML = '';
  if (!list.length) {
    const li = document.createElement('li');
    li.className = 'rk-empty';
    li.textContent = 'NO RECORDS — 初代チャンピオンになれ';
    listEl.appendChild(li);
    return;
  }
  let meMarked = false;
  list.slice(0, 20).forEach((e, i) => {
    const li = document.createElement('li');
    if (me && !meMarked && e.name === me.name && e.score === me.score) {
      li.className = 'me';
      meMarked = true;
    }
    const pos = document.createElement('span');
    pos.className = 'rk-pos';
    pos.textContent = (i + 1) + '.';
    const nm = document.createElement('span');
    nm.className = 'rk-name';
    nm.textContent = e.name;
    const dt = document.createElement('span');
    dt.className = 'rk-date';
    dt.textContent = fmtDate(e.created_at);
    const sc = document.createElement('span');
    sc.className = 'rk-score';
    sc.textContent = (+e.score).toLocaleString();
    li.append(pos, nm, dt, sc);
    listEl.appendChild(li);
  });
  const meLi = listEl.querySelector('.me');
  if (meLi) meLi.scrollIntoView({ block: 'nearest' });
}

/* ---------- wiring ---------- */
els.btnStart.addEventListener('click', startCountdown);
els.btnRetry.addEventListener('click', startCountdown);
els.btnTitle.addEventListener('click', goTitle);
els.btnSubmit.addEventListener('click', submitScore);
els.nameInput.addEventListener('keydown', e => {
  e.stopPropagation();
  if (e.key === 'Enter') submitScore();
});
els.mute.classList.toggle('off', muted);
els.mute.addEventListener('click', () => {
  muted = !muted;
  localStorage.setItem('ct_mute', muted ? '1' : '0');
  els.mute.classList.toggle('off', muted);
});

/* ---------- mode select ---------- */
function setMode(mode) {
  S.mode = mode;
  localStorage.setItem('ct_mode', mode);
  document.querySelectorAll('.mode-btn').forEach(b =>
    b.classList.toggle('sel', b.dataset.mode === mode));
  fetchRanking();
}
document.querySelectorAll('.mode-btn').forEach(b =>
  b.addEventListener('click', () => setMode(b.dataset.mode)));

buildKeyboard();
setMode(S.mode);
