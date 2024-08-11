import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'James McDougall, SWE',
  description: "James McDougall's Software Portfolio",
}

interface FooterLinkProps {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

const FooterLink = ({ title, description, href, external = false }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target={external ? '_blank' : ''}
      rel={external ? 'noopener noreferrer' : ''}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </Link>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${inter.className}`}>
        <main className="flex min-h-screen flex-col items-center p-10 bg-sky-200 text-slate-900">
          <div className="z-10 w-full items-center justify-between font-mono text-lg lg:flex">
            James McDougall: Full Stack Software Engineer
          </div>
          {children}
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <FooterLink
              href="/"
              title='Home'
              description='Learn more about me'
            />
            <FooterLink
              href="/smart_spend"
              title='Smart Spend'
              description='Learn more about the main project I worked on at Affinipay.'
            />
            <FooterLink
              href="/workwise"
              title='WorkWise'
              description='Learn more about WorkWise App, an application that helps builders create bids using AI.'
            />
            <FooterLink
              href="https://linkedin.com/in/james-mcdouga"
              external
              title='Connect'
              description='Connect with me on social media.'
            />
          </div>
        </main>
      </body>
    </html>
  );
}
