import Image from "next/image";

export default function testimonials (){
    
    return (
        <div className="min-h-screen bg-black text-white">
        <main className="relative flex flex-col min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-12 py-8">
                <h1 className="relative text-4xl sm:text-6xl mb-8 text-white text-center sm:text-left font-bold">
                    Testimonials
                </h1>
                {/* Description Box */}
        <div className="relative flex flex-col justify-center items-center bg-white text-black p-6 sm:p-10 rounded-3xl max-w-3xl w-full z-10 shadow-lg">
        <Image
        src="/testi.png"
        alt="testi"
        width={350}
        height={350}
        className="rounded-full object-cover border-4 border-white shadow-lg"/>
          <p className="text-center font-mono text-sm sm:text-base leading-relaxed mt-5">
          &quot;The design quality, flexibility, documentation and support are all absolutely excellent. I know Brandon will deliver the work!&quot;
          </p>
          <p className="text-blue-500 text-sm font-bold mt-4 text-center">Josef Sharon</p>
          <p className="text-blue-500 text-sm text-center">CEO, Omnishoft</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 flex flex-col sm:flex-row justify-between items-center px-4 py-3 text-white text-sm">
        <div>2025 BrandonIsades. All rights reserved.</div>
        <p>Designed by Brandon</p>
      </footer>
    </div>
    )

    
}


