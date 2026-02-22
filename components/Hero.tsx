"use client";
import { useEffect, useRef } from "react";

const whatsappUrl =
    "https://wa.me/256700000000?text=Hello%20Edward%20Gold%2C%20I%20am%20interested%20in%20your%20gold%20products.";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
            {/* Background Image with Parallax */}
            <div ref={parallaxRef} className="absolute inset-0 scale-110">
                <img
                    src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1800&q=80"
                    alt="Gold bars"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950" />
            </div>

            {/* Gold shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-yellow-900/20 pointer-events-none" />

            {/* Decorative ring */}
            <div className="absolute w-[600px] h-[600px] rounded-full border border-amber-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute w-[800px] h-[800px] rounded-full border border-amber-400/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs tracking-widest uppercase mb-8 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Trusted Since Foundation · Kampala, Uganda
                </div>

                <h1
                    className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight text-white mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Premium{" "}
                    <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                        Gold
                    </span>
                    <br />
                    Trading
                </h1>

                <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Safe, transparent, and reliable gold trading services in Uganda.
                    Founded by{" "}
                    <span className="text-amber-300 font-semibold">Trevor Jjingo</span>{" "}
                    — built on integrity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-900 font-bold text-base tracking-wide shadow-2xl shadow-amber-400/30 hover:shadow-amber-400/60 hover:scale-105 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Start Trading Now
                    </a>
                    <a
                        href="#product"
                        className="px-8 py-4 rounded-full border border-amber-400/40 text-amber-300 font-semibold text-base tracking-wide hover:bg-amber-400/10 transition-all duration-300"
                    >
                        View Gold Specs
                    </a>
                </div>

                {/* Stats row */}
                <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
                    {[
                        { label: "Purity", value: "97.6%" },
                        { label: "Carat", value: "23+" },
                        { label: "Price/KG", value: "$120K" },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <div
                                className="text-2xl sm:text-3xl font-black text-amber-300"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {s.value}
                            </div>
                            <div className="text-xs tracking-widest uppercase text-zinc-500 mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}