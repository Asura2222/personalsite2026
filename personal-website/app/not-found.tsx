import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold text-black dark:text-white">
        404
      </h1>
      <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Page Not Found
      </h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Go Home
      </Link>
    </div>
  );
}
