import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

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
  <section className="bg-gray-50 py-16">
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

interface TierCardProps {
  tier: string;
  title: string;
  description: string;
}

const TierCard: React.FC<TierCardProps> = ({ tier, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h4 className="text-lg font-semibold text-blue-600 mb-2">
      Tier {tier}: {title}
    </h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Architecture: React.FC = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">System Architecture</h2>
      <p className="text-gray-700 text-center mb-8">
        ComputeDHT is an innovative distributed system comprised of several key components:
      </p>
      <div className="mb-12">
        <ul className="space-y-2 text-gray-700">
          {["Main DHT Network acting as distributed RAM", "Program Deployment DHT Network for WASM program distribution", "WebAssembly Runtime Environment", "Overlay Balancing System (OBS) for decentralized load management"].map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-2xl font-bold text-center mb-8">Node Tier System</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TierCard tier="1" title="Cloud Computing Resources" description="Server-class machines in data centers providing 24/7 uninterrupted operation and reliable connectivity." />
        <TierCard tier="2" title="High-Power Consumer Computers" description="Desktop PCs and high-performance laptops offering substantial computing power and storage capacity." />
        <TierCard tier="3" title="Mobile Connected Devices" description="Smartphones and tablets with constant cellular network connectivity, offering mobility and widespread distribution." />
        <TierCard tier="4" title="Low-Energy Computing Cells" description="IoT devices and Raspberry Pi-like computers, providing continuous connectivity with optimized power consumption." />
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>ComputeDHT Project - Magic Research Lab</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Architecture />
      <Footer />
    </div>
  );
};

export default App;
