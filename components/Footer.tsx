export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-10 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span
                        className="text-2xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Edward Gold
                    </span>
                </div>
                <p className="text-zinc-600 text-sm text-center">
                    © {new Date().getFullYear()} Edward Gold. Founded by Trevor Jjingo. Kampala, Uganda.
                </p>
                <div className="text-zinc-600 text-sm">
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}