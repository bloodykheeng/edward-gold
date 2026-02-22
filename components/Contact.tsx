"use client";

const whatsappUrl =
    "https://wa.me/256752187948?text=Hello%20Edward%20Gold%2C%20I%20am%20interested%20in%20your%20gold%20products.";

const whatsappBuyUrl =
    "https://wa.me/256752187948?text=Hello%20Edward%20Gold%2C%20I%20would%20like%20to%20buy%20gold.%20Please%20share%20details.";

const whatsappSellUrl =
    "https://wa.me/256752187948?text=Hello%20Edward%20Gold%2C%20I%20have%20gold%20to%20sell.%20Can%20we%20discuss%3F";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 sm:py-32 bg-zinc-900 dark:bg-zinc-950 relative overflow-hidden"
        >
            {/* BG image */}
            <div className="absolute inset-0 opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=1800&q=60"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-900" />

            {/* Gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs tracking-widest uppercase mb-8">
                    Contact Us
                </div>

                <h2
                    className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Let&apos;s Trade{" "}
                    <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                        Together
                    </span>
                </h2>

                <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                    Whether you&apos;re a buyer or seller, our team is ready to help you trade
                    safely and profitably. Reach us directly on WhatsApp.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a
                        href={whatsappBuyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-900 font-bold text-base tracking-wide shadow-2xl shadow-amber-400/30 hover:shadow-amber-400/60 hover:scale-105 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        I Want to Buy Gold
                    </a>
                    <a
                        href={whatsappSellUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-amber-400/40 text-amber-300 font-bold text-base tracking-wide hover:bg-amber-400/10 transition-all duration-300 hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        I Want to Sell Gold
                    </a>
                </div>

                {/* Info cards */}
                <div className="grid sm:grid-cols-3 gap-4 mb-12">
                    {[
                        { icon: "📍", label: "Location", val: "Kampala, Uganda" },
                        { icon: "📞", label: "WhatsApp", val: "+256 752187948" },
                        { icon: "🌍", label: "Origins", val: "DRC · Uganda · Dubai" },
                    ].map((c) => (
                        <div key={c.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                            <div className="text-2xl mb-2">{c.icon}</div>
                            <div className="text-zinc-500 text-xs tracking-widest uppercase mb-1">{c.label}</div>
                            <div className="text-zinc-200 font-semibold text-sm">{c.val}</div>
                        </div>
                    ))}
                </div>

                {/* Floating WhatsApp button */}
                <div className="fixed bottom-6 right-6 z-50">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-400/70 hover:scale-110 transition-all duration-300 font-bold text-sm"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="hidden sm:inline">Chat Now</span>
                    </a>
                </div>
            </div>
        </section>
    );
}