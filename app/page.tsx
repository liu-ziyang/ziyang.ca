import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black transition-all">

      {/* Avatar Section */}
      <section className="mb-12 flex flex-col items-center text-center">
        <Image
          src="/avatar.png"
          alt="Avatar of Ziyang"
          width={128}
          height={128}
          className="rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700"
        />
        <h1 className="text-3xl font-bold">Ziyang Liu</h1>
        <p className="text-md opacity-70">Software Engineer</p>
      </section>

      {/* Link Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl text-center lg:text-left">
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
          href="/resume-ziyang-liu.pdf" 
          title="Resume" 
          description="Download a copy of my resume." 
        />
      </section>
    </main>
  )
}

// Reusable card component
type LinkCardProps = {
  href: string;
  title: string;
  description: string;
};

function LinkCard({ href, title, description }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border rounded-xl px-6 py-5 transition-all hover:shadow-md hover:border-gray-300 hover:bg-white dark:hover:border-neutral-700 dark:hover:bg-neutral-800/30"
    >
      <h2 className="text-xl font-bold mb-2 flex items-center justify-center lg:justify-start gap-2">
        {title}
        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          →
        </span>
      </h2>
      <p className="text-sm opacity-70">{description}</p>
    </a>
  )
}
