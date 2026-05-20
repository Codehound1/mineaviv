export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-cyan-400">
          MineAviv AI
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Agentic AI systems for modern operational intelligence.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-300">
          We design AI-assisted workflows, analytics platforms, and intelligent
          automation systems that help organizations modernize operations and
          decision-making.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">
            Explore Services
          </button>

          <button className="rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400">
            Contact
          </button>
        </div>

      </section>
    </main>
  );
}