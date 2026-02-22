"use client";

const whatsappUrl =
    "https://wa.me/256752187948?text=Hello%20Edward%20Gold%2C%20I%20am%20interested%20in%20purchasing%20gold%20from%20you.";

const specs = [
    { label: "Product Type", value: "Gold Bars / Gold Nuggets", icon: "🪙" },
    { label: "Location", value: "Kampala, Uganda", icon: "📍" },
    { label: "Carat", value: "23+ Carats", icon: "⭐" },
    { label: "Purity", value: "97.6%", icon: "🔬" },
    { label: "Color", value: "Yellow Gold", icon: "✨" },
    { label: "Price Per KG", value: "$120,000 USD", icon: "💰" },
    { label: "Origin", value: "DRC, Uganda & Dubai — African Gold", icon: "🌍" },
    { label: "Commission", value: "$3,000 USD", icon: "🤝" },
];

export default function Product() {
    return (
        <section
            id="product"
            className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent dark:from-amber-900/10 dark:via-transparent dark:to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-50 dark:bg-amber-400/10 text-amber-600 dark:text-amber-300 text-xs tracking-widest uppercase mb-6">
                        Product Specifications
                    </div>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Pure African{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                            Gold
                        </span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
                        Directly sourced from trusted African mines, verified for purity, and
                        ready for international trade.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-yellow-600/20 rounded-3xl blur-2xl" />
                        <div className="relative rounded-2xl overflow-hidden aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1543699565-003b8adda5fc?w=900&q=80"
                                alt="Gold bars"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                            {/* Price tag */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-amber-400/30">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="text-zinc-300 text-xs tracking-widest uppercase mb-1">Price Per KG</div>
                                        <div
                                            className="text-3xl font-black text-amber-300"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            $120,000
                                        </div>
                                        <div className="text-zinc-400 text-sm">USD · Negotiable</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-zinc-300 text-xs tracking-widest uppercase mb-1">Purity</div>
                                        <div className="text-2xl font-black text-amber-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                                            97.6%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specs grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {specs.map((spec) => (
                            <div
                                key={spec.label}
                                className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-xl p-5 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg hover:shadow-amber-400/10 transition-all duration-300 group"
                            >
                                <div className="text-2xl mb-3">{spec.icon}</div>
                                <div className="text-xs tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-1">
                                    {spec.label}
                                </div>
                                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    {spec.value}
                                </div>
                            </div>
                        ))}

                        {/* CTA card */}
                        <div className="sm:col-span-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl p-5 flex items-center justify-between">
                            <div>
                                <div className="text-zinc-900 font-black text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Ready to Buy?
                                </div>
                                <div className="text-zinc-800 text-sm">Message us directly on WhatsApp</div>
                            </div>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition-colors shadow-lg whitespace-nowrap"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Contact Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}