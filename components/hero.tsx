import Image from "next/image"

const Hero = () => {
  return (
    <section id="home" className="relative h-[500px]" >
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/placeholder.svg?height=500&width=1200"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">CRESCO RISK MANAGEMENT</h1>
          <p className="text-white text-xl mb-8">Gestione dei crediti anomali e recupero crediti</p>
          <a
            href="#servizi"
            className="bg-[#084CA1] text-white px-6 py-3 font-bold inline-block hover:bg-[#084CA1]/90 transition-colors"
          >
            SCOPRI I NOSTRI SERVIZI
          </a>
        </div>
      </div>
    </section >
  )
}

export default Hero