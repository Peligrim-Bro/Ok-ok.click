# PattayaOK — handoff for another model

Live site: https://pattayaok.netlify.app/
This folder **is** the site. Deploy the whole folder to Netlify so `index.html` stays at the root.

Read this file first. Then `config.js`. Then search `index.html` for the function named in the task.

---

## What this is

Static mobile-first PWA directory for Pattaya. One HTML file + `config.js` + assets. No backend, no build step, no npm.

Owner language: Russian. UI languages: RU / EN / TH.
Brand: dark navy + mint. Light theme exists (`data-theme="light"`).

Product idea: places you can trust in Pattaya. Not a clone of Google Maps. Badges are scarce on purpose.

---

## Files

```
pattayaok/
  index.html          ~5000 lines. CSS + all app JS + PLACES/SCAMS data
  config.js           contacts, tickers, news, trusts, notes, wallets, bot
  sw.js               service worker, cache name pattayaok-v64
  manifest.json       PWA
  netlify.toml        publish = "."
  HANDOFF.md          this file
  README.txt          short deploy note for the owner
  assets/images/      photos (many reused; some venue-specific in images/places/)
  assets/icons/       180/192/512
  assets/qr/          leftover QR files; donate UI must NOT show QR
  assets/guide/       PDF guide exists on disk but must NOT appear in donate
```

After any JS/HTML change bump the string in `sw.js`: `const CACHE = "pattayaok-vXX"`.

---

## How the app boots

1. `config.js` sets `window.PATTAYAOK`.
2. Big script in `index.html` aliases it as `CFG`.
3. `let lang = localStorage pok-lang` (ru|en|th). First visit opens language picker.
4. `let theme = localStorage pok-theme` (dark|light). Button `#themeBtn` ☀/☾.
5. Tabs via `setTab(name)` + `history.pushState`. Back button `#backBtn`.
6. Bottom nav: home, shop (quiet cannabis leaf), list, scam (red), game (snake).

Do not add a 6th nav button. Five already fill the dock.

---

## Tabs and screens

| tab | renderer | notes |
|---|---|---|
| home | `renderHome` | visa clock, spin, tours button, news rail, trusts 3+3, favorite spot, scam of week, cards |
| list | `renderList` | category chips |
| shop | `renderShop` | `cat === "shop"` cannabis shops, quiet leaf in nav |
| scam | `renderScams` | report form first, then news/scams, then SOS |
| game | `renderGame` / `startSnake` | snake, score `pok-snake` |
| timer | `renderTimer` | visa countdown |
| report | `renderReport` | Netlify form + photos |
| spot | `renderSpot` | "моя любимая локация", GPS / maps URL |
| rules | `renderRules` | short city rules |

Category chips on list (order locked by owner):

`food, cash, night, visa, auto, health, tour`

Labels live in `T.ru/en/th.cats`.

---

## Data: PLACES

Array `PLACES` inside `index.html`. Object shape:

```
{
  id, name, cat, area, rating, reviews, price,
  badge,          // "premium" | "ok" | ""  (empty = white "Проверяется")
  photo, phone, maps, hours,
  blurb: {ru,en}, conditions: {ru,en},
  comments: []    // stored but NOT shown (owner removed reviews from UI)
}
```

`cat` values: food | cash | night | visa | auto | health | shop | tour

Badge rules the owner set and you must keep:

- Premium ONLY: Supermao, EX24.pro Pratumnak
- OK only where the owner explicitly said OK (about four places; other EX24 offices = ok, not premium)
- Everyone else: checking (white). Schools Progress / Pro Language / PLC = checking.
- Do not sprinkle Premium again.

Photos: many cards share generic files. Venue-true shots live under `assets/images/places/{id}.jpg` when they exist. Google Places Photo API was requested; there is no API key. Do not put a Maps key in client HTML.

Counts last checked: food ~40, night ~34, auto ~9, health ~10, shop ~9, cash ~9, visa includes 3 schools, tour = 4 (Nong Nooch, Sanctuary of Truth, Mini Siam, Koh Larn).

---

## config.js — edit without touching index.html

```
site, telegramChannel, telegramGroup,
telegramBotToken, telegramChatId,
whatsappNumber,                 // 66808243185
usdtTrc20, ton,                 // donate copy-only, no QR
recs[],                         // top ticker "рекомендую"
ads[],                          // bottom ticker
notes[],                        // $ button, "Заметки от автора"
news[],                         // home horizontal rail, max 5
trusts[]                        // 6 links, 2 columns x 3
```

Ticker / news / trusts item: `{ href, ru, en, th, when? }`.

Current recs: Nomads.com.
Current ads: TG channel, EX24 Thappraya, Supermao maps link.

---

## Forms and Telegram

Netlify Forms on report / add-business / spot. `enctype=multipart/form-data`, photo input present.

`notifyTelegram` sends via Bot API POST `application/x-www-form-urlencoded`, `mode: "no-cors"`.

- Token is in `config.js` (public site!). Warn owner to rotate if abused.
- Chat id `@PattayaOk_Ok` — bot must be admin of that channel or messages stay silent.
- Service worker must NOT cache `api.telegram.org`. Current `sw.js` only caches same-origin GET. Keep it that way. An older GET cache caused the bot to spam "."

Do not resurrect in-app chat. Owner deleted the Chat tab on purpose.
Do not resurrect Web Notification pushes. Owner deleted them. Visa timer is on-screen + .ics only.

---

## Owner decisions you must not undo

- No Chat tab. Game instead.
- No review quotes / "N Google" counts on cards.
- No donate QR. Only two copyable addresses: USDT TRC20 and TON/Gram.
- No PDF guide inside donate. File may stay in assets.
- No Home button that overflowed the header (it caused horizontal jitter). `overflow-x: hidden` on html/body/header.
- Two tickers: top = recs, bottom = ads. Ads less loud than the first MTV version.
- `$` is first header action (donate), then theme, language, report. Timer is green.
- Songthaew price in any copy: **15 baht**, not 10.
- Scam tab: complain form first, then stories, then emergency numbers. Scam button stays red.
- Cannabis shops sit behind a dull leaf, not a bright "Шопы" label.
- Bottom nav colors: scam red; leaf muted; list/game only tint when selected. Not a rainbow dock.

---

## Features that work

PWA install sheet, language picker, light/dark, history back, visa timer + calendar, spin reel of ~20 Google-popular places (sometimes injects FX ad copy), snake game, favorite GPS spot, Netlify photo forms, Telegram notify attempt, SOS numbers, news rail, trusts grid, RU/EN/TH.

localStorage keys: `pok-lang`, `pok-lang-set`, `pok-theme`, `pok-saved`, `pok-spots`, `pok-fav`, `pok-snake`, visa blob.

---

## How to change common things

Add a place: append to `PLACES`, unique `id`, correct `cat`, `badge: ""` unless owner said otherwise, photo path that exists.

Weekly news: replace `CFG.news` (5 items). Rewrite in your own words, keep `href` to the source.

Trusted links: `CFG.trusts`, keep 6.

Ticker: `CFG.recs` / `CFG.ads`.

New category: add to `T.*.cats`, add key in `renderFilters` keys array, add places.

After edits: bump `sw.js` CACHE, zip the **folder**, drag the folder (or zip) onto Netlify Deploys. Not a single HTML file — photos live in `assets/`.

---

## Contacts / money (owner)

- Site: https://pattayaok.netlify.app/
- Telegram: https://t.me/PattayaOk_Ok
- WhatsApp: 66808243185
- USDT TRC20: TPi5ifGJjobW7zshfmheLJjj4WxZEYFVL9
- TON / Gram: UQDS62ZginknxqFEET0F10s7WGIPpgGmVdc3YwdFQduRl1vE
- Bot token: see config.js (treat as compromised for anything except this channel)

---

## Known gaps

- Most photos are not the Google listing photo.
- Ratings/review counts are static snapshots, not live API.
- Bot delivery depends on channel admin rights.
- Visa alerts do not fire when the phone is locked / tab closed.
- `comments` arrays still sit in data but UI ignores them.
- Header has many small buttons; test on a real 390px phone before adding more.

---

## Prompt starter for the next model

You are continuing PattayaOK, a static PWA at https://pattayaok.netlify.app/. Read HANDOFF.md and config.js. The whole app is index.html. Do not introduce a bundler. Do not add a sixth nav tab. Do not put Google API keys or the Telegram token into new public files if you can avoid it. Owner speaks Russian; keep RU/EN/TH in sync. After code changes bump sw.js cache and give a Netlify-ready folder zip.
