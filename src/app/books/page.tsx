import { Books } from "@/components/sections/Books";

export default function BooksPage() {
    return (
        <div className="w-full text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center space-y-4">
                <h1 className="text-3xl font-bold">books</h1>
                <p className="text-neutral-400">what i'm reading & thoughts.</p>
            </div>
            <Books />
        </div>
    );
}
