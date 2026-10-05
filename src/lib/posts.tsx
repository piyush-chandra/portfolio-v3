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
];
