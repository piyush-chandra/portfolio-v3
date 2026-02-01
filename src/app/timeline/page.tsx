import { Timeline } from "@/components/sections/Timeline";

export default function TimelinePage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <h1 className="text-3xl font-bold">timeline</h1>
                <p className="text-neutral-400">life updates & milestones.</p>
            </div>
            <Timeline />
        </div>
    );
}
