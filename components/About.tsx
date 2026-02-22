"use client";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 sm:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden"
        >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image side */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&q=80"
                                alt="Luxury gold bars background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                            {/* Badge */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 bg-white/10 dark:bg-zinc-950/60 backdrop-blur-md rounded-xl p-4 border border-amber-400/20">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">Verified & Certified</div>
                                    <div className="text-zinc-300 text-xs">All gold verified for purity</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text side */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-50 dark:bg-amber-400/10 text-amber-600 dark:text-amber-300 text-xs tracking-widest uppercase mb-6">
                            Our Story
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-black leading-tight text-zinc-900 dark:text-white mb-6"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Gold Business
                            <br />
                            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                                Built on Trust
                            </span>
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mb-6">
                            Founded by{" "}
                            <strong className="text-zinc-900 dark:text-white">Trevor Jjingo</strong>, our
                            company was created to provide safe, transparent, and reliable gold
                            trading services in Uganda. We aim to build lasting partnerships
                            through integrity and professional service.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mb-10">
                            We are a trusted gold trading and sourcing company based in Kampala,
                            Uganda. We specialize in supplying high-quality gold with verified
                            purity and transparent processes. Our mission is to connect reliable
                            gold sellers and buyers with honesty, security, and professionalism.
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3">
                            {["DRC Origin", "Uganda Sourced", "Dubai Certified", "African Gold"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 text-amber-700 dark:text-amber-300 text-sm font-semibold"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}