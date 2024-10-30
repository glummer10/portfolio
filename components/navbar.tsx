'use client'
import { useState } from 'react'
import {  Menu, X } from 'lucide-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    return (
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
    )
}