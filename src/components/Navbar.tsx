import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => (
    <nav className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between px-6">
            <h1 className="text-xl font-bold">ComputeDHT</h1>
            <ul className="flex space-x-6">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="#features" className="hover:underline">Features</Link></li>
                <li><Link href="#architecture" className="hover:underline">Architecture</Link></li>
                <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
