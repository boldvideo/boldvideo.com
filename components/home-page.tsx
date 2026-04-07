"use client";

import { useEffect, useRef } from "react";

const ANNOUNCEMENT_MESSAGES = [
  "Growing out of Kajabi?",
  "Outgrowing Circle?",
  "Scaling past Teachable?",
];

const CHAT_SCENARIOS = [
  [
    {
      t: "u",
      x: "My student is stuck on pricing her SaaS. She crossed $40k MRR but feels like she's leaving money on the table.",
    },
    {
      t: "c",
      x: "SaaS founder · $40k MRR · growth stage",
    },
    {
      t: "a",
      x: "<strong>Two frameworks address this directly.</strong> The key principle is anchoring on your customer's ROI — if your product saves them $50K/year, a $500/month price point is obvious. Don't compete on cost, <strong>compete on the math.</strong>",
    },
    {
      t: "s",
      items: [
        { n: "Value-Based Pricing", ts: "14:23" },
        { n: "Pricing Teardown", ts: "08:47" },
        { n: "Niche Focuser", ts: "46:15" },
      ],
    },
  ],
  [
    {
      t: "u",
      x: "How do I find my customer's deepest emotional drivers? Our copy isn't converting.",
    },
    {
      t: "c",
      x: "program owner · copy · advanced",
    },
    {
      t: "a",
      x: '<strong>Start with frustrations and wants — table stakes.</strong> Then dig below the line into fears and aspirations. If someone says "overworked," the real fear might be missing their kids grow up. <strong>Below the line is where real copy lives.</strong>',
    },
    {
      t: "s",
      items: [
        { n: "Niche Focuser", ts: "36:22" },
        { n: "Hot Button Issues", ts: "44:18" },
        { n: "Content Framework", ts: "12:05" },
      ],
    },
  ],
  [
    {
      t: "u",
      x: "Our library has 85% non-engagement. How do other programs fix discoverability?",
    },
    {
      t: "c",
      x: "L&D director · 500+ students",
    },
    {
      t: "a",
      x: "<strong>The content graveyard problem.</strong> Three approaches: intelligence reports making every video searchable by concept. An AI layer routing to the exact moment. And <strong>implementation tools attached to videos</strong> so learning-to-doing is one click.",
    },
    {
      t: "s",
      items: [
        { n: "Scaling Libraries", ts: "22:10" },
        { n: "Implementation Gap", ts: "07:33" },
        { n: "Content ROI", ts: "31:45" },
      ],
    },
  ],
] as const;

type ChatStep = (typeof CHAT_SCENARIOS)[number][number];

const styles = String.raw`
  .landing-v10,
  .landing-v10 * ,
  .landing-v10 *::before,
  .landing-v10 *::after {
    box-sizing: border-box;
  }

  .landing-v10 {
    --bg:#FDFCFA;
    --bg-dark:#0B0B0B;
    --bg-muted:#F3F2EE;
    --text:#111;
    --text-mid:#555;
    --text-dim:#999;
    --mint:#41C6A6;
    --mint-text:#1A7F63;
    --mint-dark:#14705A;
    --mint-dim:rgba(65,198,166,0.07);
    --mint-fill:rgba(65,198,166,0.12);
    --blue:#0052E0;
    --blue-dim:rgba(0,82,224,0.05);
    --warm:#8B7340;
    --warm-dim:rgba(139,115,64,0.05);
    --hrtu-brown:#2C1F14;
    --hrtu-gold:#C8A96E;
    --border:rgba(0,0,0,0.07);
    --border-strong:rgba(0,0,0,0.13);
    --font:'Plus Jakarta Sans',system-ui,sans-serif;
    --mono:'DM Mono',monospace;
    background:var(--bg);
    color:var(--text);
    font-family:var(--font);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }

  .landing-v10 a { color:inherit; text-decoration:none; }
  .landing-v10 img { display:block; max-width:100%; }
  .landing-v10 .grain { position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.025; }
  .landing-v10 .grain canvas { width:100%; height:100%; }
  .landing-v10 .container { max-width:1120px; margin:0 auto; padding:0 2rem; }

  .landing-v10 .announce { background:var(--bg-dark); color:rgba(255,255,255,0.7); font-size:14px; padding:12px 2rem; display:flex; align-items:center; justify-content:center; gap:10px; position:fixed; top:0; left:0; right:0; z-index:101; }
  .landing-v10 .announce strong { color:white; font-weight:600; transition:opacity 0.3s; }
  .landing-v10 .announce a { color:var(--mint); font-weight:500; text-decoration:underline; text-underline-offset:2px; transition:color 0.15s; }
  .landing-v10 .announce a:hover { color:var(--mint-dark); }
  .landing-v10 .announce .sep { width:1px; height:14px; background:rgba(255,255,255,0.15); margin:0 4px; }

  .landing-v10 nav { position:fixed; top:44px; left:0; right:0; z-index:100; backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); background:rgba(253,252,250,0.9); border-bottom:1px solid var(--border); }
  .landing-v10 .nav-inner { max-width:1120px; margin:0 auto; padding:0 2rem; height:52px; display:flex; align-items:center; justify-content:space-between; }
  .landing-v10 .nav-logo svg { display:block; }
  .landing-v10 .nav-right { display:flex; align-items:center; gap:2rem; }
  .landing-v10 .nav-right a { font-size:14px; color:var(--text-mid); transition:color 0.2s; }
  .landing-v10 .nav-right a:hover { color:var(--text); }
  .landing-v10 .nav-cta { font-size:14px !important; padding:8px 18px; background:var(--text); color:white !important; font-weight:500; transition:opacity 0.15s; }
  .landing-v10 .nav-cta:hover { opacity:0.85; }

  .landing-v10 .hero { padding:10rem 0 3rem; display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:start; }
  .landing-v10 .hero-text { padding-top:1rem; }
  .landing-v10 .hero-eyebrow { font-family:var(--mono); font-size:12px; color:var(--mint-text); letter-spacing:0.08em; text-transform:uppercase; margin-bottom:1rem; }
  .landing-v10 h1 { font-size:clamp(2.4rem,4.2vw,3.4rem); line-height:1.1; letter-spacing:-0.03em; font-weight:800; margin:0 0 1.25rem; color:var(--text); }
  .landing-v10 h1 .u { background:linear-gradient(to top,var(--mint-fill) 40%,transparent 40%); padding:0 2px; box-decoration-break:clone; -webkit-box-decoration-break:clone; }
  .landing-v10 .hero-sub { font-size:16px; color:var(--text-mid); max-width:440px; line-height:1.75; margin:0 0 2rem; }
  .landing-v10 .hero-actions { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
  .landing-v10 .btn-mint { display:inline-flex; align-items:center; gap:8px; padding:13px 26px; background:var(--mint); color:white; font-weight:600; font-size:15px; border:none; cursor:pointer; transition:all 0.15s; }
  .landing-v10 .btn-mint:hover { background:var(--mint-dark); transform:translateY(-1px); box-shadow:0 4px 20px rgba(65,198,166,0.3); }
  .landing-v10 .btn-ghost { display:inline-flex; align-items:center; gap:6px; padding:13px 22px; font-size:14px; color:var(--text-mid); border:1px solid var(--border-strong); cursor:pointer; background:transparent; transition:all 0.15s; }
  .landing-v10 .btn-ghost:hover { border-color:var(--text); color:var(--text); }

  .landing-v10 .chat-demo { background:white; border:1px solid var(--border-strong); overflow:hidden; box-shadow:0 1px 2px rgba(0,0,0,0.04),0 12px 40px rgba(0,0,0,0.07); }
  .landing-v10 .chat-header { padding:11px 16px; border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; }
  .landing-v10 .chat-hl { display:flex; align-items:center; gap:8px; }
  .landing-v10 .chat-av { width:22px; height:22px; background:var(--mint); display:flex; align-items:center; justify-content:center; padding:3px; }
  .landing-v10 .chat-av svg { width:100%; height:100%; }
  .landing-v10 .chat-ht { font-weight:700; font-size:13px; color:var(--text); }
  .landing-v10 .chat-st { font-family:var(--mono); font-size:10px; color:var(--text-dim); display:flex; align-items:center; gap:4px; }
  .landing-v10 .chat-st .dot { width:5px; height:5px; border-radius:50%; background:var(--mint); }
  .landing-v10 .chat-body { padding:16px; height:370px; overflow:hidden; display:flex; flex-direction:column; gap:12px; font-size:13px; line-height:1.65; }
  .landing-v10 .cm { max-width:92%; opacity:0; transform:translateY(6px); animation:landing-mi 0.25s ease forwards; }
  .landing-v10 .cm.user { align-self:flex-end; background:var(--bg-muted); padding:10px 14px; color:var(--text); }
  .landing-v10 .cm.ai { align-self:flex-start; }
  .landing-v10 .cm .lb { font-family:var(--mono); font-size:10px; color:var(--mint-text); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:4px; }
  .landing-v10 .cm .ct { color:var(--text-mid); line-height:1.7; }
  .landing-v10 .cm .ct strong { color:var(--text); font-weight:600; }
  .landing-v10 .cites { display:flex; gap:5px; margin-top:10px; flex-wrap:wrap; }
  .landing-v10 .cite { display:flex; align-items:center; gap:6px; padding:6px 10px; border:1px solid var(--border); font-family:var(--mono); font-size:10px; color:var(--text-mid); cursor:default; opacity:0; transform:translateY(4px); transition:border-color 0.2s; }
  .landing-v10 .cite:hover { border-color:var(--mint); }
  .landing-v10 .cite .ts { color:var(--text); font-weight:500; }
  .landing-v10 .cite .pl { width:22px; height:16px; background:var(--bg-muted); display:flex; align-items:center; justify-content:center; flex-shrink:0; position:relative; overflow:hidden; }
  .landing-v10 .cite .pl svg { width:6px; height:6px; color:var(--text-dim); position:relative; z-index:1; }
  .landing-v10 .cite .pl::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,var(--mint-fill),var(--blue-dim)); opacity:0.5; }
  .landing-v10 .chat-input { padding:10px 16px; border-top:1px solid var(--border); display:flex; align-items:center; gap:8px; }
  .landing-v10 .chat-input input { flex:1; font-family:var(--font); font-size:12px; color:var(--text-dim); background:none; border:none; outline:none; }
  .landing-v10 .chat-input button { width:26px; height:26px; background:var(--mint); display:flex; align-items:center; justify-content:center; border:none; cursor:pointer; }
  .landing-v10 .chat-input button svg { width:11px; height:11px; color:white; }
  .landing-v10 .td { display:flex; gap:3px; padding:3px 0; }
  .landing-v10 .td span { width:4px; height:4px; border-radius:50%; background:var(--text-dim); animation:landing-bl 1.2s infinite; }
  .landing-v10 .td span:nth-child(2) { animation-delay:0.2s; }
  .landing-v10 .td span:nth-child(3) { animation-delay:0.4s; }
  .landing-v10 .ctag { display:inline-flex; align-items:center; gap:4px; padding:2px 7px; background:var(--mint-fill); font-family:var(--mono); font-size:10px; color:var(--mint-text); margin-bottom:5px; }

  .landing-v10 .showcase { padding:4rem 0 5rem; }
  .landing-v10 .showcase-head { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:2rem; gap:1rem; }
  .landing-v10 .showcase-head h2 { font-size:1.4rem; font-weight:700; letter-spacing:-0.015em; margin:0; color:var(--text); }
  .landing-v10 .showcase-head a { font-family:var(--mono); font-size:12px; color:var(--text-dim); text-decoration:underline; text-underline-offset:3px; }
  .landing-v10 .showcase-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
  .landing-v10 .sc-card { border:1px solid var(--border); overflow:hidden; transition:border-color 0.2s,box-shadow 0.2s; background:white; }
  .landing-v10 .sc-card:hover { border-color:var(--border-strong); box-shadow:0 8px 30px rgba(0,0,0,0.06); }
  .landing-v10 .sc-screen { height:180px; position:relative; overflow:hidden; }
  .landing-v10 .sc-hrtu-bg { background:linear-gradient(145deg,#3D2B1D 0%,#1a0f08 100%); }
  .landing-v10 .sc-fw-bg { background:linear-gradient(145deg,#1a1a2e 0%,#0f0f1a 100%); }
  .landing-v10 .sc-vt-bg { background:linear-gradient(145deg,#e8f0f8 0%,#d0dce8 100%); }
  .landing-v10 .sc-screen .sc-grain { position:absolute; inset:0; opacity:0.15; mix-blend-mode:overlay; width:100%; height:100%; }
  .landing-v10 .sc-screen .sc-label { position:absolute; bottom:12px; left:12px; font-family:var(--mono); font-size:9px; text-transform:uppercase; letter-spacing:0.1em; padding:3px 8px; background:rgba(0,0,0,0.3); backdrop-filter:blur(6px); color:rgba(255,255,255,0.7); }
  .landing-v10 .sc-vt-bg .sc-label { background:rgba(255,255,255,0.6); color:var(--text-mid); }
  .landing-v10 .sc-screen .sc-logo-big { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-weight:800; font-size:22px; letter-spacing:0.02em; }
  .landing-v10 .sc-hrtu-bg .sc-logo-big { color:var(--hrtu-gold); }
  .landing-v10 .sc-fw-bg .sc-logo-big { color:#7C8FFF; }
  .landing-v10 .sc-vt-bg .sc-logo-big { color:var(--blue); }
  .landing-v10 .sc-info { padding:14px 16px; }
  .landing-v10 .sc-info h4 { font-size:14px; font-weight:700; margin:0 0 2px; color:var(--text); }
  .landing-v10 .sc-info p { font-size:12px; color:var(--text-dim); margin:0; }

  .landing-v10 .sec-label { font-family:var(--mono); font-size:11px; color:var(--text-dim); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem; }
  .landing-v10 .section-title { font-size:clamp(1.8rem,3.2vw,2.5rem); line-height:1.15; letter-spacing:-0.025em; font-weight:800; color:var(--text); margin:0; }
  .landing-v10 .sec-sub { font-size:15px; color:var(--text-mid); max-width:480px; line-height:1.7; margin-top:0.75rem; }

  .landing-v10 .problem { padding:5rem 0; border-top:1px solid var(--border); }
  .landing-v10 .problem .sec-sub { margin-bottom:3rem; }
  .landing-v10 .stat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0; border:1px solid var(--border); }
  .landing-v10 .stat-card { padding:2rem 1.75rem; border-right:1px solid var(--border); position:relative; }
  .landing-v10 .stat-card:last-child { border-right:none; }
  .landing-v10 .stat-card:hover .stat-bar { width:100%; }
  .landing-v10 .stat-bar { position:absolute; top:0; left:0; height:2px; width:0; background:var(--mint); transition:width 0.5s; }
  .landing-v10 .stat-num { font-family:var(--mono); font-size:2.2rem; font-weight:500; line-height:1; margin-bottom:0.3rem; color:var(--text); }
  .landing-v10 .stat-tag { font-family:var(--mono); font-size:10px; color:var(--text-dim); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:0.75rem; }
  .landing-v10 .stat-p { font-size:13px; color:var(--text-mid); line-height:1.65; }

  .landing-v10 .features { padding:5rem 0; border-top:1px solid var(--border); }
  .landing-v10 .features .sec-sub { margin-bottom:3rem; }
  .landing-v10 .f-row { display:grid; grid-template-columns:1fr 1fr; gap:0; border:1px solid var(--border); overflow:hidden; margin-bottom:-1px; background:white; }
  .landing-v10 .f-vis { min-height:320px; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; }
  .landing-v10 .f-vis .grid-bg { position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px); background-size:32px 32px; }
  .landing-v10 .f-vis .radial { position:absolute; width:300px; height:300px; border-radius:50%; filter:blur(80px); opacity:0.25; }
  .landing-v10 .fv1 { background:#F0FAF6; }
  .landing-v10 .fv1 .radial { background:var(--mint); top:20%; right:10%; }
  .landing-v10 .fv2 { background:#F0F4FF; }
  .landing-v10 .fv2 .radial { background:var(--blue); bottom:10%; left:15%; }
  .landing-v10 .fv3 { background:#F8F4EC; }
  .landing-v10 .fv3 .radial { background:#C8A96E; top:30%; left:20%; }
  .landing-v10 .f-vis .f-icon { position:relative; z-index:1; width:72px; height:72px; background:white; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,0.05); }
  .landing-v10 .f-vis .f-icon svg { width:32px; height:32px; }
  .landing-v10 .f-text { padding:2.75rem; display:flex; flex-direction:column; justify-content:center; }
  .landing-v10 .f-tag { font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:0.6rem; padding:3px 8px; display:inline-flex; width:fit-content; }
  .landing-v10 .ft1 { background:var(--mint-fill); color:var(--mint-text); }
  .landing-v10 .ft2 { background:rgba(0,82,224,0.07); color:var(--blue); }
  .landing-v10 .ft3 { background:rgba(139,115,64,0.08); color:var(--warm); }
  .landing-v10 .f-text h3 { font-size:1.25rem; font-weight:700; letter-spacing:-0.01em; margin:0 0 0.6rem; color:var(--text); }
  .landing-v10 .f-text p { font-size:14px; color:var(--text-mid); line-height:1.75; margin:0; }
  .landing-v10 .f-row:nth-child(even) .f-vis { order:2; }

  .landing-v10 .roi { padding:5rem 0; background:var(--bg-dark); color:white; position:relative; overflow:hidden; }
  .landing-v10 .roi .grid-bg { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px); background-size:48px 48px; }
  .landing-v10 .roi-inner { position:relative; z-index:1; text-align:center; max-width:700px; margin:0 auto; }
  .landing-v10 .roi .sec-label { color:rgba(255,255,255,0.3); }
  .landing-v10 .roi .section-title { color:white; margin-bottom:2.5rem; max-width:none; }
  .landing-v10 .roi-math { display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:2rem; flex-wrap:wrap; }
  .landing-v10 .roi-block { text-align:center; }
  .landing-v10 .roi-block .num { font-family:var(--mono); font-size:2.8rem; font-weight:500; line-height:1; color:var(--mint); }
  .landing-v10 .roi-block .lbl { font-family:var(--mono); font-size:11px; color:rgba(255,255,255,0.35); text-transform:uppercase; letter-spacing:0.08em; margin-top:6px; }
  .landing-v10 .roi-op { font-size:1.5rem; color:rgba(255,255,255,0.2); padding-top:0.5rem; }
  .landing-v10 .roi-result { font-size:1.1rem; color:rgba(255,255,255,0.6); line-height:1.7; max-width:520px; margin:0 auto; }
  .landing-v10 .roi-result strong { color:white; font-weight:600; }

  .landing-v10 .case-study { background:var(--hrtu-brown); color:rgba(255,255,255,0.8); padding:5rem 0; position:relative; overflow:hidden; }
  .landing-v10 .cs-inner { position:relative; z-index:1; max-width:1120px; margin:0 auto; padding:0 2rem; }
  .landing-v10 .cs-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; }
  .landing-v10 .cs-text h3 { font-size:clamp(1.5rem,2.2vw,1.9rem); font-weight:700; color:white; margin:0 0 1rem; line-height:1.25; letter-spacing:-0.015em; }
  .landing-v10 .cs-text p { font-size:14px; line-height:1.75; margin:0 0 1.5rem; color:rgba(255,255,255,0.5); }
  .landing-v10 .cs-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:0; margin-bottom:1.5rem; border:1px solid rgba(255,255,255,0.07); }
  .landing-v10 .cs-s { text-align:center; padding:1rem; border-right:1px solid rgba(255,255,255,0.07); }
  .landing-v10 .cs-s:last-child { border-right:none; }
  .landing-v10 .cs-s-n { font-family:var(--mono); font-size:1.6rem; font-weight:500; color:var(--hrtu-gold); }
  .landing-v10 .cs-s-l { font-family:var(--mono); font-size:9px; color:rgba(255,255,255,0.3); text-transform:uppercase; letter-spacing:0.08em; margin-top:2px; }
  .landing-v10 .btn-gold { display:inline-flex; align-items:center; gap:8px; padding:12px 24px; background:var(--hrtu-gold); color:var(--hrtu-brown); font-weight:600; font-size:14px; border:none; cursor:pointer; }
  .landing-v10 .cs-photo { position:relative; overflow:hidden; aspect-ratio:4/3; background:linear-gradient(160deg,#4a3425 0%,#2C1F14 40%,#1a0f08 100%); }
  .landing-v10 .cs-photo-grain { position:absolute; inset:0; opacity:0.12; mix-blend-mode:overlay; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
  .landing-v10 .cs-photo-badge { position:absolute; bottom:16px; right:16px; font-family:var(--mono); font-size:11px; color:rgba(255,255,255,0.5); display:flex; align-items:center; gap:6px; padding:6px 12px; background:rgba(0,0,0,0.4); backdrop-filter:blur(8px); }

  .landing-v10 .not-for { padding:5rem 2rem; }
  .landing-v10 .nf-container { max-width:1120px; margin:0 auto; background:var(--bg-muted); border:1px solid var(--border); position:relative; overflow:hidden; padding:4rem; }
  .landing-v10 .nf-container .grid-accent { position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.025) 1px,transparent 1px); background-size:48px 48px; pointer-events:none; }
  .landing-v10 .nf-container .mint-glow { position:absolute; width:300px; height:300px; border-radius:50%; background:var(--mint); filter:blur(120px); opacity:0.06; top:-50px; right:-50px; pointer-events:none; }
  .landing-v10 .nf-inner { position:relative; z-index:1; }
  .landing-v10 .nf-header { margin-bottom:2.5rem; }
  .landing-v10 .nf-header h2 { margin:0 0 0.5rem; }
  .landing-v10 .nf-desc { font-size:15px; color:var(--text-mid); line-height:1.7; max-width:500px; }
  .landing-v10 .nf-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; }
  .landing-v10 .nf { display:flex; align-items:flex-start; gap:12px; padding:14px 18px; border:1px solid var(--border); font-size:14px; color:var(--text-mid); line-height:1.5; background:white; }
  .landing-v10 .nf .ic { font-family:var(--mono); font-size:12px; flex-shrink:0; margin-top:1px; }
  .landing-v10 .nf-y { border-color:var(--mint); background:rgba(65,198,166,0.06); color:var(--text); }
  .landing-v10 .nf-y .ic { color:var(--mint-text); }
  .landing-v10 .nf-n .ic { color:var(--text-dim); }

  .landing-v10 .cta { padding:6rem 0; text-align:center; color:white; position:relative; overflow:hidden; background:#0a1a14; }
  .landing-v10 .cta-bg { position:absolute; inset:0; background:url('/cta-bg.jpg') center/cover no-repeat; }
  .landing-v10 .cta-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.35); }
  .landing-v10 .cta .container { position:relative; z-index:1; }
  .landing-v10 .cta h2 { color:white; margin:0 auto 1rem; max-width:550px; text-shadow:0 2px 20px rgba(0,0,0,0.3); font-size:clamp(1.8rem,3.2vw,2.5rem); line-height:1.15; letter-spacing:-0.025em; font-weight:800; }
  .landing-v10 .cta p { font-size:15px; color:rgba(255,255,255,0.65); max-width:420px; margin:0 auto 2rem; line-height:1.7; }
  .landing-v10 .btn-cta { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:white; color:var(--text); font-weight:600; font-size:15px; border:none; cursor:pointer; transition:all 0.15s; }
  .landing-v10 .btn-cta:hover { transform:translateY(-1px); box-shadow:0 8px 30px rgba(255,255,255,0.2); }

  .landing-v10 footer { background:var(--bg-dark); color:rgba(255,255,255,0.3); padding:0 0 3rem; border-top:1px solid rgba(255,255,255,0.06); }
  .landing-v10 .footer-top { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; padding-top:3rem; margin-bottom:3rem; }
  .landing-v10 .footer-brand { margin-bottom:1rem; }
  .landing-v10 .footer-brand svg { display:block; max-width:100%; height:auto; }
  .landing-v10 .footer-tl { font-size:13px; line-height:1.6; max-width:250px; }
  .landing-v10 .footer-col h4 { font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:0.12em; color:rgba(255,255,255,0.15); margin:0 0 1rem; }
  .landing-v10 .footer-col a { display:block; font-size:13px; margin-bottom:0.5rem; transition:color 0.15s; }
  .landing-v10 .footer-col a:hover { color:rgba(255,255,255,0.7); }
  .landing-v10 .footer-bot { border-top:1px solid rgba(255,255,255,0.05); padding-top:2rem; display:flex; justify-content:space-between; align-items:center; font-size:11px; font-family:var(--mono); }
  .landing-v10 .footer-bot a { margin-left:2rem; }
  .landing-v10 .footer-bot a:hover { color:rgba(255,255,255,0.5); }

  @keyframes landing-mi { to { opacity:1; transform:translateY(0); } }
  @keyframes landing-ci { to { opacity:1; transform:translateY(0); } }
  @keyframes landing-bl { 0%,100% { opacity:0.3; } 50% { opacity:1; } }

  @media (max-width:900px) {
    .landing-v10 .hero,
    .landing-v10 .cs-grid {
      grid-template-columns:1fr;
    }
    .landing-v10 .hero { padding-top:8rem; gap:2rem; }
    .landing-v10 .stat-grid,
    .landing-v10 .showcase-grid,
    .landing-v10 .nf-grid {
      grid-template-columns:1fr;
    }
    .landing-v10 .f-row { grid-template-columns:1fr; }
    .landing-v10 .f-row:nth-child(even) .f-vis { order:0; }
    .landing-v10 .footer-top { grid-template-columns:1fr 1fr; }
    .landing-v10 .stat-card { border-right:none; border-bottom:1px solid var(--border); }
    .landing-v10 .stat-card:last-child { border-bottom:none; }
    .landing-v10 .nav-right a:not(.nav-cta) { display:none; }
    .landing-v10 .announce { font-size:12px; padding:10px 1rem; }
    .landing-v10 .container,
    .landing-v10 .nav-inner,
    .landing-v10 .cs-inner { padding-left:1rem; padding-right:1rem; }
    .landing-v10 .nf-container { padding:2rem 1.25rem; }
  }
`;

function renderPartialHtml(html: string, chars: number) {
  let result = "";
  let visible = 0;
  let insideTag = false;

  for (let index = 0; index < html.length; index += 1) {
    const char = html[index];
    if (char === "<") {
      insideTag = true;
      result += char;
      continue;
    }
    if (char === ">") {
      insideTag = false;
      result += char;
      continue;
    }
    if (insideTag) {
      result += char;
      continue;
    }
    if (visible >= chars) {
      break;
    }
    result += char;
    visible += 1;
  }

  return result;
}

function plainLength(html: string) {
  let count = 0;
  let insideTag = false;

  for (let index = 0; index < html.length; index += 1) {
    const char = html[index];
    if (char === "<") {
      insideTag = true;
      continue;
    }
    if (char === ">") {
      insideTag = false;
      continue;
    }
    if (!insideTag) {
      count += 1;
    }
  }

  return count;
}

function drawStaticNoise(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  if (!context) return;

  canvas.width = 400;
  canvas.height = 250;
  const imageData = context.createImageData(400, 250);
  const buffer = imageData.data;

  for (let index = 0; index < buffer.length; index += 4) {
    const value = Math.random() * 255;
    buffer[index] = value;
    buffer[index + 1] = value;
    buffer[index + 2] = value;
    buffer[index + 3] = 255;
  }

  context.putImageData(imageData, 0, 0);
}

export function HomePage() {
  const grainRef = useRef<HTMLCanvasElement | null>(null);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const announcementRef = useRef<HTMLElement | null>(null);
  const showcaseGrainRefs = useRef<Array<HTMLCanvasElement | null>>([]);

  useEffect(() => {
    const grainCanvas = grainRef.current;
    const chatBody = chatBodyRef.current;
    const announcement = announcementRef.current;
    if (!grainCanvas || !chatBody || !announcement) return;

    const context = grainCanvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let announcementIndex = 0;
    let scenarioIndex = 0;
    const timeoutIds: number[] = [];
    const intervalIds: number[] = [];

    const resizeGrain = () => {
      grainCanvas.width = window.innerWidth;
      grainCanvas.height = window.innerHeight;
    };

    const drawGrain = () => {
      const { width, height } = grainCanvas;
      const imageData = context.createImageData(width, height);
      const buffer = imageData.data;

      for (let index = 0; index < buffer.length; index += 4) {
        const value = Math.random() * 255;
        buffer[index] = value;
        buffer[index + 1] = value;
        buffer[index + 2] = value;
        buffer[index + 3] = 255;
      }

      context.putImageData(imageData, 0, 0);
      animationFrame = window.requestAnimationFrame(drawGrain);
    };

    resizeGrain();
    drawGrain();
    window.addEventListener("resize", resizeGrain);

    showcaseGrainRefs.current.forEach((canvas) => {
      if (canvas) {
        drawStaticNoise(canvas);
      }
    });

    const announcementInterval = window.setInterval(() => {
      announcementIndex =
        (announcementIndex + 1) % ANNOUNCEMENT_MESSAGES.length;
      announcement.style.opacity = "0";
      window.setTimeout(() => {
        announcement.textContent = ANNOUNCEMENT_MESSAGES[announcementIndex];
        announcement.style.opacity = "1";
      }, 300);
    }, 4000);
    intervalIds.push(announcementInterval);

    const clearScenarioTimers = () => {
      timeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      timeoutIds.length = 0;
    };

    const runScenario = () => {
      clearScenarioTimers();
      chatBody.innerHTML = "";
      const steps = CHAT_SCENARIOS[scenarioIndex];
      scenarioIndex = (scenarioIndex + 1) % CHAT_SCENARIOS.length;
      let stepIndex = 0;

      const next = () => {
        if (stepIndex >= steps.length) {
          timeoutIds.push(window.setTimeout(runScenario, 4000));
          return;
        }

        const step = steps[stepIndex] as ChatStep;
        stepIndex += 1;

        if (step.t === "u") {
          const bubble = document.createElement("div");
          bubble.className = "cm user";
          bubble.textContent = step.x;
          bubble.style.animationDelay = "0.1s";
          chatBody.appendChild(bubble);
          timeoutIds.push(window.setTimeout(next, 800));
          return;
        }

        if (step.t === "c") {
          const wrap = document.createElement("div");
          wrap.className = "cm ai";
          wrap.style.animationDelay = "0.1s";

          const tag = document.createElement("div");
          tag.className = "ctag";
          tag.innerHTML =
            '<svg width="8" height="8" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1"/><circle cx="5" cy="5" r="1.5" fill="currentColor"/></svg> ' +
            step.x;

          const dots = document.createElement("div");
          dots.className = "td";
          dots.innerHTML = "<span></span><span></span><span></span>";

          wrap.appendChild(tag);
          wrap.appendChild(dots);
          chatBody.appendChild(wrap);

          timeoutIds.push(
            window.setTimeout(() => {
              dots.remove();
              next();
            }, 1300),
          );
          return;
        }

        if (step.t === "a") {
          const wrap = document.createElement("div");
          wrap.className = "cm ai";
          wrap.style.animationDelay = "0.05s";

          const label = document.createElement("div");
          label.className = "lb";
          label.textContent = "Bold AI";

          const content = document.createElement("div");
          content.className = "ct";

          wrap.appendChild(label);
          wrap.appendChild(content);
          chatBody.appendChild(wrap);

          const totalChars = plainLength(step.x);
          let visibleChars = 0;

          const type = () => {
            if (visibleChars <= totalChars) {
              content.innerHTML = renderPartialHtml(step.x, visibleChars);
              visibleChars += 1;
              timeoutIds.push(window.setTimeout(type, 8));
              return;
            }

            content.innerHTML = step.x;
            timeoutIds.push(window.setTimeout(next, 150));
          };

          type();
          return;
        }

        if (step.t === "s") {
          const citations = document.createElement("div");
          citations.className = "cites";

          step.items.forEach((item, index) => {
            const citation = document.createElement("div");
            citation.className = "cite";
            citation.innerHTML =
              '<div class="pl"><svg viewBox="0 0 8 8" fill="none"><polygon points="2,1 7,4 2,7" fill="currentColor"/></svg></div><span class="ts">' +
              item.ts +
              "</span>" +
              item.n;
            citation.style.animation = `landing-ci 0.25s ease ${index * 0.1}s forwards`;
            citations.appendChild(citation);
          });

          const aiMessages = chatBody.querySelectorAll(".cm.ai");
          const target = aiMessages[aiMessages.length - 1];
          if (target) {
            target.appendChild(citations);
          }

          timeoutIds.push(window.setTimeout(next, 3200));
        }
      };

      timeoutIds.push(window.setTimeout(next, 500));
    };

    timeoutIds.push(window.setTimeout(runScenario, 900));

    return () => {
      clearScenarioTimers();
      intervalIds.forEach((intervalId) => {
        window.clearInterval(intervalId);
      });
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeGrain);
    };
  }, []);

  return (
    <>
      <main className="landing-v10" id="main-content">
        <div className="grain">
          <canvas ref={grainRef} />
        </div>

        <div className="announce">
          <strong ref={announcementRef}>Growing out of Kajabi?</strong>
          <div className="sep" />
          <a href="#">See how to migrate &rarr;</a>
        </div>

        <nav>
          <div className="nav-inner">
            <a className="nav-logo" href="#">
              <svg width="22" height="22" viewBox="0 0 512 512" fill="none">
                <path
                  clipRule="evenodd"
                  d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                  fill="#41C6A6"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <div className="nav-right">
              <a href="#">Product</a>
              <a href="#">Docs</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a className="nav-cta" href="#">
                Book a demo
              </a>
            </div>
          </div>
        </nav>

        <section className="hero container">
          <div className="hero-text">
            <div className="hero-eyebrow">Video intelligence platform</div>
            <h1>
              Scale your coaching program{" "}
              <span className="u">without hiring more coaches</span>
            </h1>
            <p className="hero-sub">
              Your students are stuck and your coaches are burned out answering
              the same questions. Bold turns your video library into an AI coach
              that cites the exact moment that matters.
            </p>
            <div className="hero-actions">
              <a className="btn-mint" href="#">
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 2l5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a className="btn-ghost" href="#">
                Watch it work
              </a>
            </div>
          </div>

          <div>
            <div className="chat-demo">
              <div className="chat-header">
                <div className="chat-hl">
                  <div className="chat-av">
                    <svg viewBox="0 0 512 512" fill="none">
                      <path
                        clipRule="evenodd"
                        d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                        fill="white"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="chat-ht">Ask the library</div>
                </div>
                <div className="chat-st">
                  <span className="dot" />
                  347 videos
                </div>
              </div>
              <div className="chat-body" ref={chatBodyRef} />
              <div className="chat-input">
                <input placeholder="Ask about any topic..." readOnly />
                <button type="button">
                  <svg viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase container">
          <div className="showcase-head">
            <h2>See what teams build with Bold</h2>
            <a href="#">View all customers &rarr;</a>
          </div>
          <div className="showcase-grid">
            <div className="sc-card">
              <div className="sc-screen sc-hrtu-bg">
                <canvas
                  className="sc-grain"
                  ref={(node) => {
                    showcaseGrainRefs.current[0] = node;
                  }}
                />
                <div className="sc-logo-big">HRTU</div>
                <div className="sc-label">Healthcare</div>
              </div>
              <div className="sc-info">
                <h4>HRT University</h4>
                <p>97+ clinical lessons powered by Bold AI</p>
              </div>
            </div>
            <div className="sc-card">
              <div className="sc-screen sc-fw-bg">
                <canvas
                  className="sc-grain"
                  ref={(node) => {
                    showcaseGrainRefs.current[1] = node;
                  }}
                />
                <div className="sc-logo-big">FounderWell</div>
                <div className="sc-label">SaaS coaching</div>
              </div>
              <div className="sc-info">
                <h4>FounderWell</h4>
                <p>SaaS growth coaching program</p>
              </div>
            </div>
            <div className="sc-card">
              <div className="sc-screen sc-vt-bg">
                <canvas
                  className="sc-grain"
                  ref={(node) => {
                    showcaseGrainRefs.current[2] = node;
                  }}
                />
                <div className="sc-logo-big">Viva</div>
                <div className="sc-label">Music education</div>
              </div>
              <div className="sc-info">
                <h4>Viva Tuition</h4>
                <p>Music training academy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="problem container">
          <div className="sec-label">The problem</div>
          <h2 className="section-title">
            You built the content. Nobody can use it.
          </h2>
          <p className="sec-sub">
            Your video library is growing faster than discoverability. Students
            churn not because your teaching is bad — but because they can&apos;t
            find the right answer at the right time.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-bar" />
              <div className="stat-num">85%</div>
              <div className="stat-tag">Content unused</div>
              <div className="stat-p">
                Hundreds of hours of training. Students watch a fraction. The
                rest is a content graveyard you paid six figures to build.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-bar" />
              <div className="stat-num">10x</div>
              <div className="stat-tag">Repeat questions</div>
              <div className="stat-p">
                Coaches answer the same questions over and over. You can&apos;t
                hire fast enough, and every new hire dilutes quality.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-bar" />
              <div className="stat-num">60%</div>
              <div className="stat-tag">Renewal ceiling</div>
              <div className="stat-p">
                Students love the content but churn anyway. The gap isn&apos;t
                teaching — it&apos;s implementation support at scale.
              </div>
            </div>
          </div>
        </section>

        <section className="features container">
          <div className="sec-label">How it works</div>
          <h2 className="section-title">Intelligence, not transcripts</h2>
          <p className="sec-sub">
            Bold doesn&apos;t search words. It extracts structured
            understanding, then coaches with cited, timestamped precision.
          </p>

          <div className="f-row">
            <div className="f-vis fv1">
              <div className="grid-bg" />
              <div className="radial" />
              <div className="f-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    stroke="var(--mint-text)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 11h14M9 16h10M9 21h12"
                    stroke="var(--mint-text)"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="f-text">
              <div className="f-tag ft1">Intelligence reports</div>
              <h3>Every video understood, not just transcribed</h3>
              <p>
                For every video, Bold extracts structured understanding —
                what&apos;s taught, what questions are answered, what to watch
                for. The AI coach knows your content conceptually, not just by
                keywords.
              </p>
            </div>
          </div>

          <div className="f-row">
            <div className="f-vis fv2">
              <div className="grid-bg" />
              <div className="radial" />
              <div className="f-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle
                    cx="16"
                    cy="12"
                    r="5"
                    stroke="var(--blue)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10"
                    stroke="var(--blue)"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="f-text">
              <div className="f-tag ft2">Viewer context</div>
              <h3>Same question, different answer</h3>
              <p>
                Bold knows who&apos;s asking — their stage, role, and progress.
                A beginner gets foundational frameworks. An advanced student
                gets nuanced tactical advice from deeper in the library.
              </p>
            </div>
          </div>

          <div className="f-row">
            <div className="f-vis fv3">
              <div className="grid-bg" />
              <div className="radial" />
              <div className="f-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle
                    cx="16"
                    cy="16"
                    r="10"
                    stroke="var(--warm)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="3.5"
                    stroke="var(--warm)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 6v4M16 22v4M6 16h4M22 16h4"
                    stroke="var(--warm)"
                    opacity="0.35"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
            <div className="f-text">
              <div className="f-tag ft3">Bounded synthesis</div>
              <h3>Accurate citations, not hallucinations</h3>
              <p>
                Two-tier RAG selects relevant videos first, then synthesizes
                within that bounded context. Every answer comes with timestamped
                citations you can verify.
              </p>
            </div>
          </div>
        </section>

        <section className="roi">
          <div className="grid-bg" />
          <div className="container">
            <div className="roi-inner">
              <div className="sec-label">The math</div>
              <h2 className="section-title">The ROI is obvious</h2>
              <div className="roi-math">
                <div className="roi-block">
                  <div className="num">3%</div>
                  <div className="lbl">Retention bump</div>
                </div>
                <div className="roi-op">&times;</div>
                <div className="roi-block">
                  <div className="num">$5M</div>
                  <div className="lbl">Program revenue</div>
                </div>
                <div className="roi-op">=</div>
                <div className="roi-block">
                  <div className="num">$150K</div>
                  <div className="lbl">Saved annually</div>
                </div>
              </div>
              <p className="roi-result">
                A small improvement in retention on an established program pays
                for Bold <strong>many times over.</strong> You&apos;re not
                buying software — you&apos;re recovering revenue you&apos;re
                currently losing to churn.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study">
          <div className="cs-inner">
            <div className="sec-label" style={{ color: "var(--hrtu-gold)" }}>
              Case study
            </div>
            <div className="cs-grid">
              <div className="cs-text">
                <h3>
                  HRT University turned 97 clinical lessons into an always-on AI
                  teaching assistant
                </h3>
                <p>
                  HRTU trains licensed healthcare providers in hormone and
                  metabolic medicine. Bold indexes every lesson and gives
                  clinicians instant, cited answers grounded in the curriculum.
                </p>
                <div className="cs-stats">
                  <div className="cs-s">
                    <div className="cs-s-n">97+</div>
                    <div className="cs-s-l">Lessons</div>
                  </div>
                  <div className="cs-s">
                    <div className="cs-s-n">6</div>
                    <div className="cs-s-l">Modules</div>
                  </div>
                  <div className="cs-s">
                    <div className="cs-s-n">30</div>
                    <div className="cs-s-l">CEU hrs</div>
                  </div>
                </div>
                <a className="btn-gold" href="#">
                  Read the case study
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 2l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </div>
              <div className="cs-photo">
                <div className="cs-photo-grain" />
                <div className="cs-photo-badge">
                  <svg width="14" height="14" viewBox="0 0 512 512" fill="none">
                    <path
                      clipRule="evenodd"
                      d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                  Powered by Bold
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="not-for">
          <div className="nf-container">
            <div className="grid-accent" />
            <div className="mint-glow" />
            <div className="nf-inner">
              <div className="nf-header">
                <div className="sec-label">Clarity</div>
                <h2 className="section-title">
                  Built for programs with real libraries
                </h2>
                <p className="nf-desc">
                  Bold&apos;s intelligence matters at scale. 50+ hours of video,
                  100+ active students. Below that, we&apos;re not the right fit
                  yet.
                </p>
              </div>
              <div className="nf-grid">
                <div className="nf nf-y">
                  <span className="ic">&#10003;</span>Coaching programs with 50+
                  hours of video content
                </div>
                <div className="nf nf-y">
                  <span className="ic">&#10003;</span>Training academies with
                  100+ active students
                </div>
                <div className="nf nf-n">
                  <span className="ic">&#10007;</span>Individual creators with
                  fewer than 50 videos
                </div>
                <div className="nf nf-n">
                  <span className="ic">&#10007;</span>Primarily written content
                  programs
                </div>
                <div className="nf nf-y">
                  <span className="ic">&#10003;</span>Programs struggling with
                  churn despite great content
                </div>
                <div className="nf nf-n">
                  <span className="ic">&#10007;</span>Anyone looking for cheap
                  video hosting
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta-bg" />
          <div className="cta-overlay" />
          <div className="container">
            <h2>Stop letting your best content collect dust</h2>
            <p>
              Bold is in private beta with established coaching programs. If
              that&apos;s you, let&apos;s talk.
            </p>
            <a className="btn-cta" href="#">
              Book a demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 2l5 5-5 5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer-top">
              <div>
                <div className="footer-brand">
                  <svg
                    width="100"
                    height="28"
                    viewBox="0 0 2446 670"
                    fill="none"
                  >
                    <path
                      d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z"
                      fill="white"
                    />
                    <path
                      d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z"
                      fill="white"
                    />
                    <path
                      d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z"
                      fill="white"
                    />
                    <path
                      d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="footer-tl">
                  Video intelligence for coaching programs. Turn your library
                  into an AI coach that cites the moment that matters.
                </p>
              </div>
              <div className="footer-col">
                <h4>Product</h4>
                <a href="#">AI Coach</a>
                <a href="#">AI Search</a>
                <a href="#">Video Chat</a>
                <a href="#">Integrations</a>
              </div>
              <div className="footer-col">
                <h4>Developers</h4>
                <a href="#">Docs</a>
                <a href="#">API</a>
                <a href="#">SDK</a>
                <a href="#">Changelog</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="footer-bot">
              <span>&copy; 2026 Bold Video</span>
              <div>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>
        {styles}
      </style>
    </>
  );
}
