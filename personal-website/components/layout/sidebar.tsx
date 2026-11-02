"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "about", href: "/" },
  { name: "my writings", href: "/writings" },
  { name: "speaking & events", href: "/speaking" },
  { name: "videos", href: "/videos" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-48 lg:overflow-y-auto">
        <nav
          aria-label="Main navigation"
          className="flex min-h-full flex-col justify-center px-6 py-8"
        >
          <ul className="w-full space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`flex min-h-11 items-center whitespace-nowrap rounded px-2 py-2 text-sm leading-5 lowercase tracking-wide transition-colors ${
                    pathname === item.href
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
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
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/80 backdrop-blur-md px-6 py-4 lg:hidden border-b border-gray-100">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          James Win
        </Link>
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          className="flex min-h-11 min-w-11 items-center justify-center text-gray-700"
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
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex h-full flex-col items-center justify-center"
          >
            <ul className="space-y-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex min-h-11 items-center whitespace-nowrap text-2xl lowercase tracking-wide transition-colors ${
                      pathname === item.href
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
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
