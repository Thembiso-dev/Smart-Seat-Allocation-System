import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Session management",
    description:
      "Three daily time slots — Morning, Midday, and Afternoon — each capped at 20 participants. The system tracks every seat in real time.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Department allocation",
    description:
      "Each department has a fixed seat quota per session. Division A gets 8 seats; Divisions B and C get 6 each — automatically enforced.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Rule enforcement",
    description:
      "No overbooking. No duplicate assignments. No department overruns. Every allocation is validated before it's accepted.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Live availability",
    description:
      "See remaining seats per session at a glance. Coordinators always know exactly what capacity is left before making an assignment.",
  },
];

const constraints = [
  { label: "Max participants per session", value: "20", note: "Hard limit" },
  { label: "Sessions per day", value: "3", note: "Morning · Midday · Afternoon" },
  { label: "Total programme participants", value: "60", note: "Across all sessions" },
  { label: "Assignments per participant", value: "1", note: "One session only" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <span className="text-lg font-medium tracking-tight text-gray-900">SmartSeats</span>
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/auth/signup"
            className="h-9 px-4 rounded-xl bg-[#111] hover:bg-[#333] text-white text-sm font-medium flex items-center transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#EFEFEF] px-8 py-20 flex flex-col items-center text-center">
        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-300 rounded-md px-3 py-1 mb-8">
          Training Allocation Platform
        </span>
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 max-w-2xl leading-tight mb-5">
          The right seat, for the right person, every time.
        </h1>
        <p className="text-base text-gray-500 max-w-lg leading-relaxed mb-10">
          SmartSeats replaces error-prone spreadsheets with an intelligent seat allocation
          system — automatically enforcing session limits, department quotas, and
          duplicate-assignment rules across your entire training programme.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/auth/signup"
            className="h-12 px-6 rounded-xl bg-[#111] hover:bg-[#333] text-white text-sm font-medium flex items-center transition-colors"
          >
            Start allocating
          </Link>
          <Link
            href="/auth/login"
            className="h-12 px-6 rounded-xl border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-medium flex items-center transition-colors bg-white"
          >
            Log in
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-gray-100 px-8 py-8">
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {constraints.map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center">
              <span className="text-3xl font-medium text-gray-900 mb-1">{c.value}</span>
              <span className="text-xs text-gray-400 leading-snug">{c.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="px-8 py-16 max-w-3xl mx-auto">
        <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-200 rounded-md px-3 py-1 mb-6 inline-block">
          About
        </span>
        <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
          Built to replace the spreadsheet
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
          In large organisations, assigning employees to training sessions is often
          managed through manual tools — spreadsheets, shared docs, or email threads.
          The result: overbooking, duplicate entries, and no clear picture of who still
          needs a seat.
        </p>
        <p className="text-[15px] text-gray-500 leading-relaxed">
          SmartSeats is a rule-driven allocation platform designed to fix that. It gives
          training coordinators a single place to manage a 60-participant programme across
          three sessions, with automatic checks that prevent invalid assignments before
          they happen.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#EFEFEF] px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-medium tracking-widest uppercase text-gray-400 border border-gray-300 rounded-md px-3 py-1 mb-10 inline-block">
            Features
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl px-6 py-5 border border-gray-200"
              >
                <div className="text-gray-400 mb-3">{f.icon}</div>
                <h3 className="text-[15px] font-medium text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 flex flex-col items-center text-center">
        <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-3">
          Ready to allocate?
        </h2>
        <p className="text-sm text-gray-400 mb-8 max-w-sm">
          Create an account to start managing your training programme with confidence.
        </p>
        <Link
          href="/auth/signup"
          className="h-12 px-8 rounded-xl bg-[#111] hover:bg-[#333] text-white text-sm font-medium flex items-center transition-colors"
        >
          Create an account
        </Link>
        <p className="mt-5 text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-gray-900 font-medium underline">
            Log in
          </Link>
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-8 py-6 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">SmartSeats</span>
        <span className="text-xs text-gray-300">Training Allocation Platform</span>
      </footer>
    </main>
  );
}