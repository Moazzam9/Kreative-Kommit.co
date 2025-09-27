import Link from 'next/link';
import { Palette, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
  {/* Light mode logo */}
  <img
    src="/ico.png"
    alt="KreativeKommit Logo Light"
    className="h-6 w-6 block dark:hidden"
  />
  {/* Dark mode logo */}
  <img
    src="/ico2.png"
    alt="KreativeKommit Logo Dark"
    className="h-6 w-6 hidden dark:block"
  />
  <span className="text-lg font-bold text-slate-800 dark:text-white">
    KreativeKommit
  </span>
</Link>
<p className="text-sm text-slate-600 dark:text-slate-400">
  Building fast, SEO, SSR and SSG optimised web experiences that drive real results.
</p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/kreativekommit"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/kreativekommit"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/kreativekommit"
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                aria-label="View our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Designs', 'Portfolio', 'Services'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {['Web Design', 'Development', 'SEO Optimisation', 'Performance Audit'].map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Connect
            </h3>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block text-sm text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors "
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-300">
            © {currentYear} KreativeKommit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}