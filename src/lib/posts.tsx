import type { JSX } from "react";

export type Post = {
    slug: string;
    title: string;
    date: string;
    minutes: number;
    hook: string;
    body: JSX.Element;
};

export const POSTS: Post[] = [
    {
        slug: "bulk-uploads-beat-dashboards",
        title: "Bulk uploads beat dashboards: cutting remittance TAT 70%",
        date: "Mar 2025",
        minutes: 4,
        hook: "Ops lived in Excel. So the automation went to Excel — row-level validation, one ledger, 70% faster turnarounds.",
        body: (
            <>
                <p>
                    Our AD2 partners — EbixCash, MakeMyTrip — send outward-remittance transactions in bursts.
                    Travel season doesn't spread itself evenly, and Operations was keying tickets in one by one:
                    queues, overtime, and re-keying errors at exactly the peaks when speed mattered most.
                </p>
                <p>
                    The key decision was sociological, not technical: <strong>ops lived in Excel, so the
                    automation went to Excel.</strong> Any solution demanding a new tool would have died on
                    arrival. We built a validated bulk-upload flow — row-level validation, so one bad row
                    fails loudly and alone instead of blocking the whole batch.
                </p>
                <p>
                    The second decision: uploaded transactions flow through the <strong>existing Core Banking
                    API integrations</strong>, not a parallel path. One ledger, one reconciliation story. A
                    shadow pipeline would have doubled every future audit.
                </p>
                <p>
                    Around the upload, two adjacent time-sinks got automated: scheduled RBI compliance reports
                    for the Business team, and risk-mitigation email alerts that flag suspicious transactions
                    to Operations <em>before</em> they settle. Result: 70% TAT cut on the partner flow, on-time
                    compliance at near-zero manual effort.
                </p>
                <p>
                    Lesson I'd generalize: find where the humans already are, automate the seam — not the human.
                </p>
            </>
        ),
    },
    {
        slug: "benchmark-ten-classifiers",
        title: "Benchmark 10 classifiers before trusting one",
        date: "Sep 2026",
        minutes: 5,
        hook: "My diabetes-screening side project compares 10 algorithms plus an ensemble — and publishes the full table, losers included.",
        body: (
            <>
                <p>
                    Most ML side projects pick a model, report its best number, and move on. For my Diabetes
                    Risk Check I did the boring-honest version: <strong>train 10 algorithms plus a 5-expert
                    stacking ensemble, publish the whole comparison table</strong> in the repo
                    (<code>train/compare.py → comparison.json</code>). Losers included.
                </p>
                <p>
                    Why it matters: on a small clinical-style dataset, the gap between algorithms is mostly
                    noise plus preprocessing. Showing all ten keeps you honest about that — and the ensemble
                    earns its place instead of inheriting it.
                </p>
                <p>
                    Two process details I'm proud of. First, a <strong>CTGAN augmentation study</strong> tested
                    whether synthetic tabular data actually helps here — with mixed results that stayed in the
                    write-up instead of being buried. Negative results are results. Second, the trained model is
                    exported to JSON, ported to TypeScript, and a <strong>parity gate</strong> proves the
                    browser scores exactly what Python scored. A single <code>verify_all.sh</code> (retrain →
                    export → parity → bundle) means the shipped site can never silently drift from the
                    evaluated model.
                </p>
                <p>
                    The whole pipeline reruns from one README block. If a side project can't be reproduced by a
                    stranger, it's a demo, not engineering.
                </p>
            </>
        ),
    },
    {
        slug: "pending-transactions-need-a-tracer",
        title: "Pending transactions need a tracer",
        date: "Nov 2024",
        minutes: 4,
        hook: "SWIFT messages go quiet after sending. A Tracer Service watching the pending pile and nudging both sides fixed that.",
        body: (
            <>
                <p>
                    In trade finance, the scariest state isn't <em>failed</em> — it's <em>pending with no
                    updates</em>. A SWIFT message goes out, the counterparty goes quiet, and nobody owns the
                    silence. Applicant assumes beneficiary is slow; beneficiary never got pinged. Days evaporate.
                </p>
                <p>
                    The fix I built at Newgen was a <strong>Tracer Service</strong>: a watcher over the pending
                    pile that notifies applicant and beneficiary when a transaction sits too long without
                    movement. Conceptually a dead-man's switch for correspondence — the absence of an event
                    becomes the event.
                </p>
                <p>
                    It sat alongside the Correspondence Event superstructure mapping SWIFT N-series messages to
                    workflow events, so tracer alerts carried real context (which message, which leg, how long
                    stuck) instead of generic "please check" noise. Alerts without context get filtered; alerts
                    with a message reference and age get acted on.
                </p>
                <p>
                    Generalizing: every async pipeline needs an owner for silence. Retries handle failure;
                    only a tracer handles quiet.
                </p>
            </>
        ),
    },
    {
        slug: "toolchat-blocked-chatgpt",
        title: "Corporate ChatGPT is blocked. So I built ToolChat.",
        date: "Jun 2026",
        minutes: 7,
        hook: "A Gemini-powered chat clone for locked-down office networks: threads, bookmarks, summaries — and an honest proxy experiment.",
        body: (
            <>
                <p>
                    The itch was embarrassingly practical: on some office networks, ChatGPT is blocked and the
                    approved alternatives are clunky. I had a Gemini API key and a weekend. ToolChat is what
                    came out — a clean chat app at <code>pitools.vercel.app</code> that does the 20% of ChatGPT
                    I actually use every day.
                </p>
                <p>
                    The shape is deliberately borrowed: sidebar threads, a streaming-ish message view, markdown
                    answers. I didn't redesign chat — the idea was <strong>familiarity in a place the real
                    thing can't reach</strong>. Underneath it's Next.js with Genkit flows doing the LLM work:
                    <code>generate-response</code> for answers and a separate <code>summarize-chat</code> flow
                    that compresses long threads when they sprawl. Two small flows beat one god-prompt.
                </p>
                <p>
                    Three decisions I'm fond of. First, <strong>history lives in localStorage</strong> — your
                    threads never touch my database, because there is no database. In a corporate-adjacent tool,
                    "we can't leak what we don't store" is a feature, not a missing backend. Second,{" "}
                    <strong>bookmarking</strong>: one click pins a useful answer above the scrollback, because
                    the half-life of a good LLM answer is about forty seconds of scrolling. Third, a{" "}
                    <strong>login gate</strong> — basic username/password, just enough that a public Vercel URL
                    isn't an open key-burner.
                </p>
                <p>
                    The honest footnote: the repo contains an <code>/api/proxy</code> route exploring whether a
                    Next.js endpoint can tunnel traffic past network restrictions. Verdict, documented in the
                    README: it's <strong>conceptual</strong>. True egress bypass needs dedicated infrastructure,
                    not a serverless function. I kept the experiment visible instead of deleting it — the
                    negative result is the documentation.
                </p>
                <p>
                    Trade-offs, stated plainly: basic auth is a gate, not security; localStorage doesn't sync
                    across devices; and a personal Gemini key has rate limits a team would blow through by
                    lunch. For one engineer on a locked-down network, though, it's exactly enough — and it
                    shipped in days, not sprints.
                </p>
            </>
        ),
    },
    {
        slug: "my-own-bitly",
        title: "I built my own bitly — with the analytics Bitly hides.",
        date: "Feb 2026",
        minutes: 7,
        hook: "Custom short codes, a visit-logging pipeline, and an analytics dashboard behind basic auth. Plus test scripts, because side projects deserve them too.",
        body: (
            <>
                <p>
                    Every link I share is <code>piyus.site/…</code>, which means somewhere there's a service
                    turning short codes into redirects. Commercial shorteners do this fine — and then charge
                    you to see who clicked. So I built my own: FastAPI, server-rendered HTML via HTMX,
                    SQLAlchemy, Docker. No SPA, no build step for the frontend. A form posts, HTML comes back.
                </p>
                <p>
                    The route table is the whole product: <code>POST /shorten</code> mints a code,{" "}
                    <code>POST /custom_shorten</code> lets you claim your own slug,{" "}
                    <code>GET /{"{short_code}"}</code> 302s to the target, <code>GET /h/{"{name}"}</code> serves
                    a public ask page, and <code>GET /ana</code> is the analytics dashboard sitting behind{" "}
                    <strong>HTTP basic auth</strong>. Five routes. Nothing else was needed, so nothing else
                    exists.
                </p>
                <p>
                    The part I'm proudest of is invisible: every redirect fires a{" "}
                    <strong>background task that logs the visit</strong> — IP-derived location, user agent,
                    referrer — after the 302 is already on its way. Analytics must never slow down the
                    redirect; the redirect is the product, the analytics are the exhaust. FastAPI's{" "}
                    <code>BackgroundTasks</code> is exactly the right weight for this — a queue would be more
                    correct and entirely unnecessary at my scale, and the code admits that.
                </p>
                <p>
                    Unusual for a weekend project: it has <strong>test scripts with opinions</strong>. The repo
                    carries <code>verify_analytics.py</code>, <code>verify_custom_shorten.py</code>,{" "}
                    <code>verify_ask_page.py</code>, and a <code>verify_regression.py</code> that ties them
                    together. I wrote them because shorteners fail silently — a broken redirect looks exactly
                    like a working page until someone tells you their link is dead. The scripts are the
                    monitoring.
                </p>
                <p>
                    Honest limits: basic auth protects the dashboard but it's one shared password; background
                    tasks die with the process (a crash eats visits); and there's no abuse throttling yet. If
                    it ever outgrows one container, the queue and the rate limiter are the first two things
                    I'd add — in that order.
                </p>
            </>
        ),
    },
    {
        slug: "group-chat-rest-polling",
        title: "Group chat on REST and polling. No WebSockets. (On purpose.)",
        date: "Dec 2025",
        minutes: 6,
        hook: "Two repos, one honest architecture: FastAPI REST + React polling with paginated history. WebSockets can wait until the room needs them.",
        body: (
            <>
                <p>
                    Every group-chat tutorial reaches for WebSockets on step one. I built mine —{" "}
                    <code>chat-b</code> (FastAPI) plus <code>chat-f</code> (Vite + React) — on{" "}
                    <strong>plain REST and polling</strong>, and I'd make the same call again for anything
                    under a hundred concurrent chatters.
                </p>
                <p>
                    The API is four endpoints and a shrug: <code>POST /api/messages</code> takes{" "}
                    <code>{"{text, sender}"}</code> and returns the timestamped, id-stamped message;{" "}
                    <code>GET /api/history?limit&before_id</code> pages backward through time;{" "}
                    <code>GET /api/health</code> exists so deploys can prove they're alive;{" "}
                    <code>GET /</code> says "Chat Server Running (REST)" — the parens doing honest work.
                    Pydantic models guard the boundary, a tiny storage module owns persistence, and CORS is
                    wide open because frontend and backend deploy separately.
                </p>
                <p>
                    Why polling wins <em>here</em>: both halves deploy to serverless-friendly hosts where
                    long-lived socket connections are the thing that breaks. Polling is stateless, cacheable,
                    debuggable with curl, and survives a deploy mid-conversation. The pagination cursor
                    (<code>before_id</code>) means the client never re-fetches the world — new messages poll,
                    old messages page. For a side-project chat room, that's the entire scaling story, and it's
                    enough.
                </p>
                <p>
                    The idea I stole: chat UIs are just <strong>an append-only log with good scrolling</strong>.
                    Timestamps, sender rails, auto-scroll-to-bottom, unreadable-history-above. Get the log
                    semantics right and the "chat" feeling is free.
                </p>
                <p>
                    When would I upgrade? The day a room wants typing indicators, presence dots, or sub-second
                    delivery guarantees — that's the WebSocket-shaped hole. The migration path is clean because
                    the message model already exists: keep REST for history, add sockets for live fan-out. Both
                    transports, one log. Until then, polling is a feature: fewer moving parts, fewer 3am pages.
                </p>
            </>
        ),
    },
    {
        slug: "edge-llm-proxy",
        title: "Streaming LLMs through a 20-line edge proxy.",
        date: "Apr 2026",
        minutes: 5,
        hook: "An edge-runtime route that streams SSE from an OpenAI-compatible upstream straight to the browser. No buffering, no key leaks.",
        body: (
            <>
                <p>
                    The entire backend of my Local-LLM experiment is one route file. <code>POST</code> comes in
                    from the browser, gets forwarded to an OpenAI-compatible chat-completions endpoint, and the
                    response stream flows back untouched. Twenty lines that earn their keep.
                </p>
                <p>
                    Three lines do all the work. <code>export const runtime = "edge"</code> puts the proxy
                    geographically near the user instead of in one region. The upstream body streams back with{" "}
                    <code>text/event-stream</code>, <code>Cache-Control: no-cache</code>, and{" "}
                    <code>X-Accel-Buffering: no</code> — the trio that tells every proxy in the chain{" "}
                    <strong>do not hold my tokens</strong>. And non-200 upstreams map to clean JSON errors
                    instead of leaking raw provider responses to the client.
                </p>
                <p>
                    Why proxy at all instead of calling the model from the browser? Two reasons, both
                    non-negotiable: the <strong>API key stays server-side</strong>, and the browser never
                    fights <strong>CORS</strong> with a third-party AI host. The proxy is a key-hider and a
                    CORS-eraser that happens to also pick the closest region for you.
                </p>
                <p>
                    Honest naming complaint, filed against myself: the repo is called Local-LLM and nothing
                    here runs locally — it's a streaming pass-through to a hosted endpoint. The name was
                    aspirational; the shelf it sits on is "experiments in talking to models." A truly local
                    version would mean Ollama or vLLM behind this same route shape — which, notably, this
                    proxy already supports, since it speaks plain OpenAI-compatible SSE either way.
                </p>
            </>
        ),
    },
];
