import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-8xl mb-4">🎨</div>
      <h1 className="text-6xl font-black text-gray-900 mb-2">404</h1>
      <p className="text-gray-500 text-[15px] mb-1">Oops! This page doesn&apos;t exist.</p>
      <p className="text-gray-400 text-[13px] mb-7 max-w-xs">The page you&apos;re looking for may have been moved, deleted, or never existed.</p>
      <div className="flex gap-3">
        <Link href="/" className="px-5 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-black rounded-xl hover:bg-[#5a4bd1] transition-colors">Go Home</Link>
        <Link href="/templates" className="px-5 py-2.5 border border-gray-200 text-gray-700 text-[13px] font-semibold rounded-xl hover:border-[#6c5ce7] hover:text-[#6c5ce7] transition-colors">Browse Templates</Link>
      </div>
    </div>
  );
}
