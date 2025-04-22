import Image from "next/image";

export default function skills () {



return (
    <div className="bg-black">
        <main className="relative h-screen w-full items-center flex flex-col sm:flex-col overflow-x-hidden">
        <div>
            <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
            style={{backgroundImage: "url('/coding.jpg')"}}>
            </div>
            {/* header */}
                <div className="relative z-10 flex flex-col items-center space-y-8">
                    <h1 className="mt-30 text-5xl sm:text-7xl md:text-8xl text-center font-bold font-mono text-white mb-4">
                    SKILLS
                    </h1>
                        <p className="font-mono text-white text-sm  font-bold">
                        &lt;p&gt; I am striving to never stop learning and improving  &lt;/p&gt;
                        </p>
                <div>
                </div>
            </div>
            {/* skills icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white z-10">
              <Image width={100} height={100} src="/html.png" alt="html" className="w-16 h-16" />
            </div>

            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white z-10">
              <Image width={100} height={100} src="/css.png" alt="CSS" className="w-15 h-20" />
            </div>

            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white z-10">
              <Image width={100} height={100} src="/js.jpg" alt="JS" className="w-20 h-20" />
            </div>

            <div className="w-24 h-24 flex items-center justify-center rounded-2xl bg-white z-10">
              <Image width={100} height={100} src="/react.png" alt="REACT" className="w-50 h-20" />
            </div>

        </div>
        </div> 
        </main>

        <footer className="bg-blue-500 flex sm:flex-row items-center py-3 px-4 space-y-2 sm:space-y-0 justify-between">
        <div className="text-sm text-white sm:text-left">
          2025 BrandonIsades.All rigths reserverd
          </div>
            <p className="flex text-sm text-white text-center sm:text-right">
                Designed by Brandon
            </p>
        </footer>   

    </div>
)

}