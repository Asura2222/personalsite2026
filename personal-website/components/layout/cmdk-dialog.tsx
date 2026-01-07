'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Home,
  Briefcase,
  BookOpen,
  Lightbulb,
  Camera,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-6 top-6 z-50 hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 transition-colors hover:border-gray-400 lg:flex dark:border-gray-800 dark:bg-black dark:text-gray-400 dark:hover:border-gray-600"
      >
        <span>Search</span>
        <kbd className="rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-900">
          ⌘K
        </kbd>
      </button>

      {/* Command Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 animate-in fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Command Palette */}
          <div className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4">
            <Command className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-black">
              <Command.Input
                placeholder="Type a command or search..."
                className="w-full border-b border-gray-200 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-400 dark:border-gray-800 dark:placeholder:text-gray-600"
              />
              <Command.List className="max-h-96 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-gray-500">
                  No results found.
                </Command.Empty>

                {/* Navigation */}
                <Command.Group heading="Navigation" className="mb-2">
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/experiences"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Experiences</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/fieldnotes"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Fieldnotes</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/philosophy"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Lightbulb className="h-4 w-4" />
                    <span>My Philosophy</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/photos"))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Camera className="h-4 w-4" />
                    <span>Photos</span>
                  </Command.Item>
                </Command.Group>

                {/* External Links */}
                <Command.Group heading="Connect" className="mb-2">
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => {
                        navigator.clipboard.writeText("hello@example.com");
                      })
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Copy Email</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open("https://twitter.com", "_blank")
                      )
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Twitter</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open("https://linkedin.com", "_blank")
                      )
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        window.open("https://github.com", "_blank")
                      )
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
