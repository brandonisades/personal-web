export default function AboutMe (){
    
    return (
        <div className="min-h-screen bg-black text-white">
        <main className="relative flex flex-col min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-12 py-8">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 " style={{backgroundImage: "url('/aboutme2.jpg')"}}>
                </div>
                <h1 className="relative text-4xl sm:text-6xl mb-8  text-white text-center sm:text-left font-bold">
                    About Me
                </h1>
                {/* Description Box */}
        <div className="relative bg-white text-black p-6 sm:p-10 rounded-3xl max-w-3xl w-full z-10 shadow-lg">
          <p className="text-blue-500 text-sm font-mono">&lt;p&gt;</p>
          <h2 className="text-3xl font-bold mb-4">Hello!</h2>
          <p className="font-mono text-sm sm:text-base leading-relaxed">
            My name is Brandon and I specialize in Web Development using HTML, CSS, JS, and REACT! <br /><br />
            I am a highly motivated individual and an eternal optimist dedicated to writing clear, concise, robust code that works.
            Always striving to never stop learning and improving.
          </p>
          <p className="text-blue-500 text-sm font-mono mt-4">&lt;/p&gt;</p>
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


