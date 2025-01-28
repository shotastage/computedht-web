// app/page.tsx
import { type Metadata } from 'next';
import { Features, Architecture, TechnicalDetails } from '@/components/home';

export const metadata: Metadata = {
  title: 'ComputeDHT - Home',
  description: 'Next generation distributed computing platform',
};

export default function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">ComputeDHT</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A Next-Generation DHT-based Distributed Computing Platform with WebAssembly Runtime
          </p>
        </div>
      </div>
      <Features />
      <Architecture />
      <TechnicalDetails />
    </>
  );
}

// app/replica/page.tsx
import { type Metadata } from 'next';
import { 
  ReplicaFeatures, 
  CodeExamples, 
  TypeSystem, 
  ActorModelSection 
} from '@/components/replica';

export const metadata: Metadata = {
  title: 'Replica Language - ComputeDHT',
  description: 'Modern programming language for distributed computing',
};

export default function ReplicaPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Replica</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A modern programming language designed for distributed computing with built-in actor model support
          </p>
        </div>
      </div>
      <ReplicaFeatures />
      <CodeExamples />
      <TypeSystem />
      <ActorModelSection />
    </>
  );
}

// types/common.ts
export interface Feature {
  title: string;
  description: string;
}

export interface CodeExample {
  title: string;
  code: string;
  language?: string;
}

// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              ComputeDHT
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`${
                    pathname === '/' 
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  href="/replica"
                  className={`${
                    pathname === '/replica'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Replica Lang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// components/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <div className="bg-gray-100 border-b">
      <div className="container mx-auto px-6">
        <div className="py-3 flex items-center space-x-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ComputeDHT
          </Link>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <span key={path} className="flex items-center space-x-2">
                <span className="text-gray-500">/</span>
                {isLast ? (
                  <span className="text-gray-700 font-medium capitalize">
                    {segment}
                  </span>
                ) : (
                  <Link
                    href={path}
                    className="text-blue-600 hover:text-blue-800 capitalize"
                  >
                    {segment}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// components/CodeBlock.tsx
interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "swift" }: CodeBlockProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
      <pre className="text-gray-100 font-mono text-sm">
        {code}
      </pre>
    </div>
  );
}

// components/FeatureCard.tsx
interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

// components/replica/CodeExamples.tsx
'use client';

import { useState } from 'react';
import CodeBlock from '../CodeBlock';
import type { CodeExample } from '@/types/common';

const codeExamples: Record<string, CodeExample> = {
  basic: {
    title: 'Basic Actor',
    code: `actor User {
    var id: String
    var name: String

    init(id: String, name: String) {
        self.id = id
    }

    func greet() -> String {
        return "Hello, \\(name)!"
    }
}`
  },
  distributed: {
    title: 'Distributed Actor',
    code: `actor Counter {
    var value: Int = 0

    func increment() async {
        value += 1
    }

    func getValue() async -> Int {
        return value
    }
}`
  }
};

export default function CodeExamples() {
  const [activeTab, setActiveTab] = useState<string>('basic');

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Code Examples</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-4">
            {Object.entries(codeExamples).map(([key, example]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 font-medium rounded-t-lg ${
                  activeTab === key
                    ? "bg-white text-blue-600 border-t border-x border-gray-200"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>
          <CodeBlock code={codeExamples[activeTab].code} />
        </div>
      </div>
    </div>
  );
}
