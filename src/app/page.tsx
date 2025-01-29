import React from "react";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
}

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

const Hero: React.FC = () => (
  <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-24">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">ComputeDHT</h1>
      <p className="text-xl max-w-3xl mx-auto opacity-90">
        A Next-Generation DHT-based Distributed Computing Platform with WebAssembly Runtime
      </p>
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Features: React.FC = () => (
  <section id="features" className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="General-Purpose Hardware Support"
          description="A lightweight distributed system capable of running on common devices like smartphones and laptops. Seamlessly operates on iOS and macOS, making decentralized computing accessible to everyone."
        />
        <FeatureCard
          title="Existing Programming Resources"
          description="Leverages WebAssembly to support a wide range of programming languages including C++, Rust, Go, and Swift, along with their ecosystems, enabling developers to use familiar tools and libraries."
        />
        <FeatureCard
          title="Flexible Operation & Monetization"
          description="Designed without cryptocurrency dependencies, allowing program developers to freely design their monetization strategies and operational models without traditional blockchain constraints."
        />
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer id="contact" className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>ComputeDHT Project - Magic Research Lab</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
