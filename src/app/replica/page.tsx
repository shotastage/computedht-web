"use client";

import React, { useState } from 'react';

interface CodeBlockProps {
    code: string;
    language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'swift' }) => (
    <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
        <pre className="text-gray-100 font-mono text-sm">{code}</pre>
    </div>
);

interface FeatureCardProps {
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

interface TabButtonProps {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 font-medium rounded-t-lg ${active
                ? 'bg-white text-blue-600 border-t border-x border-gray-200'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
    >
        {children}
    </button>
);

const Hero: React.FC = () => (
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Replica</h1>
            <p className="text-xl max-w-2xl mx-auto">
                A modern programming language designed for distributed computing with built-in actor model support
            </p>
        </div>
    </div>
);

const KeyFeatures: React.FC = () => (
    <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard title="Actor-First Design" description="All objects are actors by default, making distributed computing natural and intuitive." />
                <FeatureCard title="Swift/Java-like Syntax" description="Familiar object-oriented syntax making it easy for developers to get started." />
                <FeatureCard title="Built for Distribution" description="First-class support for distributed actors and async operations." />
            </div>
        </div>
    </div>
);

const CodeExamples: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'basic' | 'distributed' | 'single'>('basic');

    const examples: Record<typeof activeTab, string> = {
        basic: `actor User {
    var id: String
    var name: String

    init(id: String, name: String) {
        self.id = id
    }

    func greet() -> String {
        return "Hello, \\(name)!"
    }
}`,
        distributed: `actor Counter {
    var value: Int = 0

    func increment() async {
        value += 1
    }

    func getValue() async -> Int {
        return value
    }
}`,
        single: `single actor Cache {
    var data: [String: String] = [:]

    func store(key: String, value: String) {
        data[key] = value
    }

    func fetch(key: String) -> String? {
        return data[key]
    }
}`,
    };

    return (
        <div className="py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Code Examples</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="flex gap-2 mb-4">
                        {(['basic', 'distributed', 'single'] as const).map((tab) => (
                            <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)} Actor
                            </TabButton>
                        ))}
                    </div>
                    <CodeBlock code={examples[activeTab]} />
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <KeyFeatures />
            <CodeExamples />
        </div>
    );
};

export default App;
