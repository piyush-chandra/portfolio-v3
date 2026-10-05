import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="w-full text-left space-y-6 py-10">
            <p className="text-6xl font-bold text-white">404</p>
            <p className="text-neutral-400 max-w-md leading-relaxed">
                this endpoint doesn&apos;t exist — unlike my APIs, which return proper status codes.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-blue-300 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" /> back home
            </Link>
        </div>
    );
}
