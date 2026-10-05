import type { Metadata } from "next";
import { CaseHero, CaseSection } from "@/components/sections/CaseStudy";

export const metadata: Metadata = {
    title: "Diabetes Risk Check — case study · Piyush",
    description: "Private in-browser diabetes screening: 5-expert stacking ensemble, 10-algo honest benchmark, CTGAN study, parity-verified JS artifact.",
    alternates: { canonical: "/projects/diabetes-risk-check" },
    openGraph: {
        title: "Diabetes Risk Check — case study",
        description: "5-expert ensemble, honest benchmarks, zero server inference.",
        url: "/projects/diabetes-risk-check",
        type: "article",
    },
};

export default function DiabetesCase() {
    return (
        <div className="w-full text-left space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CaseHero
                kicker="case study · featured build"
                title="Diabetes Risk Check"
                lede="Free, private screening for early-diabetes symptom patterns. Answer 16 questions; a 5-expert stacking ensemble scores you locally in the browser — no server inference, nothing uploaded. A score is a prompt to get a blood test, never a diagnosis."
                meta={["Next.js + TypeScript", "scikit-learn", "CTGAN", "Vercel", "2026"]}
                live="https://diabetes-site-three.vercel.app"
                github="https://github.com/piyush-chandra/diabetes-risk-check"
            />
            <CaseSection heading="Problem">
                <p>
                    Early-diabetes symptoms are easy to dismiss and awkward to check: booking a lab visit for a
                    vague suspicion feels like overkill, while symptom-checker sites either demand sign-ups or
                    ship your health answers to a server. The bar was a check that is instant, free, and
                    private by construction — not by promise.
                </p>
            </CaseSection>
            <CaseSection heading="Constraints">
                <p>
                    No backend budget and no appetite for holding health data — so inference had to run
                    100% client-side. The model artifact had to be small enough to ship with a static page,
                    and the whole pipeline had to be reproducible: anyone should be able to retrain from
                    scratch and get the identical artifact.
                </p>
            </CaseSection>
            <CaseSection heading="Approach">
                <p>
                    Trained and compared <strong className="text-white">10 algorithms plus a 5-expert stacking
                    ensemble</strong> (<code className="text-[13px] font-mono text-blue-300">train/compare.py</code>),
                    publishing the full comparison table in the repo instead of cherry-picking the winner.
                    A <strong className="text-white">CTGAN augmentation study</strong> tested whether synthetic
                    tabular data helps on this small clinical-style dataset — with honest, mixed results kept in
                    the write-up rather than buried.
                </p>
                <p>
                    The trained model is exported to a JSON artifact and ported to TypeScript, with a{" "}
                    <strong className="text-white">parity fixture + test gate</strong> proving the browser
                    scores exactly what Python scored. A <code className="text-[13px] font-mono text-blue-300">verify_all.sh</code> pre-deploy
                    gate (retrain → export → parity → bundle → hashed build) means the shipped site can never
                    drift from the evaluated model.
                </p>
            </CaseSection>
            <CaseSection heading="Result">
                <p>
                    Live static site: 16 dropdown questions → instant local risk pattern, with methodology,
                    benchmark, and GAN-study pages alongside it. Zero inference cost, zero data liability,
                    fully reproducible from one commands block in the README.
                </p>
            </CaseSection>
            <CaseSection heading="What I'd do differently">
                <p>
                    Add probability calibration (Platt/isotonic) and surface calibrated bands instead of a raw
                    score; run a proper fairness slice across age/sex subgroups before calling it a screening
                    aid; and package the flow as an installable PWA for low-connectivity clinics.
                </p>
            </CaseSection>
        </div>
    );
}
