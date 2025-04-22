"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const goToContact = () => {
    router.push('/contact');

  }

  return (
    <div className=" bg-black">    
    
    <main className="relative h-screen w-full flex sm:flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/* Text on top */}
      <h1 className="absolute text-white text-6xl font-bold z-10 items-center flex flex-col">
      <Image
        src="/brandon.jpg"
        alt="Your Name"
        width={250}
        height={250}
        className="rounded-full object-cover border-4 border-white shadow-lg"
      />
        Hi! I&apos;m
        <p className="text-blue-500 font-bold font-mono">
      Brandon
        </p>
        <p className="text-sm text-blue-500 items-center flex flex-col">&lt;h1&gt;</p>
        <p className="text-xl items-center flex flex-col">
        Full-stack developer </p>
        <p className="text-sm text-blue-500 items-center flex flex-col">&lt;/h1&gt;</p>
        <p className="text-sm text-white items-center flex flex-col font-mono ">&quot;Building scalable and high-performance web solutions for your business needs.&quot;</p>
        <div className="w-1/2 h-px bg-blue-500 mt-5">

        </div>
        <button onClick={goToContact} className="w-fit text-sm py-3 px-2 rounded-full mt-5 bg-blue-500 hover:bg-white hover:text-blue-500 cursor-pointer">Contact Me!</button>
       
    </h1>    
    </main>
    
    
    <footer className="bg-blue-500 flex justify-between">
        <div className="text-sm text-white ml-5 ">
          2025 BrandonIsades.All rigths reserverd
          </div>
          <p className="flex mr-5 text-white text-sm">
Designed by Brandon
          </p>
          </footer>      
    </div>
    
  );
}
