import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-6xl font-semibold text-gray-200">404</h1>
      <h2 className="mb-2 text-xl font-semibold">Page not found</h2>
      <p className="mb-8 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-teal px-6 py-2.5 text-sm text-[#FFFEFB] transition-opacity hover:opacity-90"
      >
        Go home →
      </Link>
    </div>
  );
}
