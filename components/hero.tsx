'use client';
import { FadeIn } from "./ui/fadeIn";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 h-[500px] md:h-[600px] scroll-mt-16 overflow-hidden bg-black"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full max-w-7xl mx-auto object-cover z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
        }}
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Capa oscura sobre el video */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Contenido */}
      <div className="relative container px-4 md:px-8 xl:px-0 mx-auto z-20 h-full w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <FadeIn direction="up" delay={0}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              CRESCO RISK MANAGEMENT
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-white text-xl mb-8">
              Gestione dei crediti anomali e recupero crediti
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <a
              href="#servizi"
              className="bg-[#084CA1] text-white px-6 py-3 font-bold inline-block hover:bg-[#084CA1]/90 transition-colors"
            >
              SCOPRI I NOSTRI SERVIZI
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;