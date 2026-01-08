'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'about', href: '/' },
  { name: 'experiences', href: '/experiences' },
  { name: 'fieldnotes', href: '/fieldnotes' },
  { name: 'my philosophy', href: '/philosophy' },
  { name: 'photos', href: '/photos' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-36 lg:overflow-y-auto">
        <nav className="flex h-full flex-col items-end justify-center pr-8">
          <ul className="space-y-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm lowercase tracking-wide transition-colors ${pathname === item.href
                      ? 'text-black dark:text-white'
                      : 'text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white'
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-md px-6 py-4 lg:hidden dark:bg-black/80 border-b border-gray-100 dark:border-gray-900">
        <Link href="/" className="text-lg font-bold tracking-tight text-black dark:text-white">
          James Win
        </Link>
        <button
          type="button"
          className="text-gray-700 dark:text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden dark:bg-black">
          <nav className="flex h-full flex-col items-center justify-center">
            <ul className="space-y-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl lowercase tracking-wide transition-colors ${pathname === item.href
                        ? 'text-black dark:text-white'
                        : 'text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
