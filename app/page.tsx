
"use client";
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black transition-all">
      <div className="flex flex-col items-center w-full gap-y-6 sm:gap-y-10 xl:gap-y-16">
        {/* Avatar Section */}
        <section className="flex flex-col items-center text-center">
          <Image
            src="/avatar.png"
            alt="Avatar of Ziyang"
            width={128}
            height={128}
            className="rounded-full mb-2 border-2 border-gray-200 dark:border-gray-700"
          />
          <h1 className="text-2xl font-bold">Ziyang Liu</h1>
          <p className="text-sm opacity-70">Software Engineer</p>
        </section>

        {/* Link Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 xl:gap-6 w-full max-w-5xl text-center lg:text-left">
          <LinkCard 
            href="https://github.com/liu-ziyang" 
            title="GitHub" 
            description="Explore past projects and contributions." 
          />
          <LinkCard 
            href="https://www.linkedin.com/in/liu-ziyang" 
            title="LinkedIn" 
            description="Browse my career path and professional insights." 
          />
          <LinkCard 
            asButton
            onClick={() => setShowResume(true)}
            title="Resume" 
            description="See my skills, experience, and education." 
          />
        </section>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative bg-white dark:bg-neutral-900 rounded-lg shadow-xl w-[90vw] max-w-2xl h-[90vh] flex flex-col"
          >
            {/* Close button removed as requested */}
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              className="flex-1 w-full rounded-b-lg"
              style={{ border: 0 }}
            />
          </div>
        </div>
      )}
    </main>
  )
}

// Reusable card component
type LinkCardProps = {
  href?: string;
  title: string;
  description: string;
  asButton?: boolean;
  onClick?: () => void;
};

function LinkCard({ href, title, description, asButton, onClick }: LinkCardProps) {
  const className = "group border rounded-xl px-3 py-3 sm:px-6 sm:py-5 lg:px-8 lg:py-6 max-w-xs w-full mx-auto transition-all hover:shadow-md hover:border-gray-300 hover:bg-white dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30";
  if (asButton) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={className}
      >
        <h2 className="text-xl font-bold mb-2 flex items-center justify-center lg:justify-start gap-2">
          {title}
          <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
        </h2>
        <p className="text-sm opacity-70 text-left w-full">{description}</p>
      </button>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <h2 className="text-xl font-bold mb-2 flex items-center justify-center lg:justify-start gap-2">
        {title}
        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
      </h2>
      <p className="text-sm opacity-70">{description}</p>
    </a>
  );
}
