'use client'

import { useState } from 'react'
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react'
import { SiJavascript, SiTypescript, SiNextdotjs, SiNestjs } from 'react-icons/si'
import SobreMin from '@/components/sobre'
import { BsDiscord } from 'react-icons/bs'
import ContactSection from '@/components/contato'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div  className={`min-h-screen`}>
      <div className="bg-black text-white transition-colors duration-300 fist">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 border border-stone-900 bg-black backdrop-blur shadow-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <a href="#" className="text-2xl font-bold">Gedson</a>
              <div className="hidden md:flex items-center space-x-4">
                <a href="#Projetos" className="hover:text-gray-600 dark:hover:text-gray-300">Projetos</a>
                <a href="#Contato" className="hover:text-gray-600 dark:hover:text-gray-300">Contato</a>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                  {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-black py-2">
              <a href="#Projetos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Projetos</a>
              <a href="#Contato" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Contato</a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="w-full relative bg-center bg-no-repeat bg-cover pt-20 mb-40 z-10"
          style={{ backgroundImage: "url(./hero.svg)" }}>
          <div className="container mx-auto px-6 py-20">
            <div className="w-full flex flex-col justify-center items-center animate-in fade-in slide-in-from-bottom-1"
              style={{ animationDuration: "1s" }}>
              <h1 className="text-6xl md:text-8xl text-center font-bold mb-4">Gedson</h1>
              <p className="font-light text-xl md:text-2xl text-center mb-8 ">(Backend Developer)</p>
              <div className="flex space-x-4 mb-8 scale-125 opacity-75">
                <SiJavascript className="h-8 w-8 text-yellow-400" />
                <SiTypescript className="h-8 w-8 text-blue-600" />
                <SiNextdotjs className="h-8 w-8" />
                <SiNestjs className="h-8 w-8 text-red-600" />
              </div>
              <a href="#sobre"
                className="inline-block bg-[#0070f3] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0060d3] transition-colors duration-300">Me conheça</a>
            </div>
          </div>
          <div className="h-[300px] w-full bg-center bg-no-repeat bg-cover"></div>
        </div>

        <SobreMin />

        <section id="Projetos" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="border border-stone-900 rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />

        {/* Footer */}
        <footer className="bg-black py-6">
          <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2023 Gedson.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}