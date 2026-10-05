import type { Metadata } from "next";
import { CaseHero, CaseSection } from "@/components/sections/CaseStudy";

export const metadata: Metadata = {
    title: "AD2 bulk upload · TAT −70% — case study · Piyush",
    description: "Excel-based bulk upload for AD2 remittance partners at AU Small Finance Bank: 70% TAT cut, RBI automation, risk alerts.",
};

export default function BulkUploadCase() {
    return (
        <div className="w-full text-left space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CaseHero
                kicker="case study · production banking"
                title="AD2 bulk upload — remittance TAT down 70%"
                lede="Outward-remittance transactions from AD2 partners (EbixCash, MakeMyTrip) were processed one by one. An Excel-based bulk-upload flow into the Core Banking path cut turnaround time by 70% — built at AU Small Finance Bank, Jaipur."
                meta={["Core Banking", "REST APIs", "Excel ingestion", "RBI compliance", "2025"]}
            />
            <CaseSection heading="Problem">
                <p>
                    Partner transaction volumes arrive in bursts — travel-season remittances don't spread
                    themselves evenly. Operations entered them manually, one ticket at a time, which meant
                    queues, overtime, and error-prone re-keying during exactly the peaks when speed mattered most.
                </p>
            </CaseSection>
            <CaseSection heading="Constraints">
                <p>
                    Banking constraints, not startup constraints: every transaction must reconcile with Core
                    Banking, RBI reporting is mandatory and time-bound, partner file formats are fixed by the
                    partner (not by us), and a failed row can never silently poison a batch. The ops team lives
                    in Excel — any solution that asked them to learn a new tool would die on arrival.
                </p>
            </CaseSection>
            <CaseSection heading="Approach">
                <p>
                    Met ops where they were: a validated <strong className="text-white">Excel bulk-upload</strong> with
                    row-level validation, so a bad row fails loudly and alone instead of blocking the batch.
                    Uploaded transactions flow through the existing <strong className="text-white">Core Banking
                    API integrations</strong> (Remittance, LC, BG) rather than a parallel path — one ledger,
                    one reconciliation story.
                </p>
                <p>
                    Around the upload I automated the two adjacent time-sinks: scheduled{" "}
                    <strong className="text-white">RBI compliance reports</strong> for the Business team and{" "}
                    <strong className="text-white">risk-mitigation email alerts</strong> that flag potential
                    transaction errors to Operations before they settle.
                </p>
            </CaseSection>
            <CaseSection heading="Result">
                <p>
                    Transaction turnaround time down <strong className="text-white">70%</strong> on the AD2
                    partner flow; compliance reporting near-zero manual effort with on-time RBI submissions;
                    proactive error flags instead of post-facto reversals.
                </p>
            </CaseSection>
            <CaseSection heading="What I'd do differently">
                <p>
                    Add idempotency keys per row so retried uploads are provably safe; give partners an async
                    status API (accepted / settled / failed with reasons) instead of email round-trips; and
                    ship a partner sandbox with the exact validators production uses, so format errors get
                    caught on their side first.
                </p>
            </CaseSection>
        </div>
    );
}
