import { apps } from "@/data/apps";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07090c] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/icon-192.png"
              alt="Nexora Systems"
              className="h-14 w-14 rounded-2xl sm:h-16 sm:w-16"
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide sm:text-2xl">
                Nexora Systems
              </h1>
              <p className="text-xs text-zinc-500 sm:text-sm">
                Indie Systems Lab
              </p>
            </div>
          </div>

          <a
            href="#apps"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-orange-500/60 hover:text-orange-300"
          >
            View Apps
          </a>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-orange-400 sm:text-sm sm:tracking-[0.35em]">
              Engineered Digital Tools
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Practical software for makers, players, and systems thinkers.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Nexora Systems builds focused, installable web apps designed to
              solve real problems without bloated accounts, clutter, or noise.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apps"
                className="rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Explore Projects
              </a>

              <a
                href="mailto:nexorasystems.dev@gmail.com"
                className="rounded-full border border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </section>

      <section
        id="apps"
        className="border-t border-zinc-900 bg-[#0b0e13] px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-orange-400 sm:text-sm sm:tracking-[0.3em]">
              Current Systems
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Apps in the Nexora lab
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <div
                key={app.slug}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-2xl shadow-black/20 transition hover:border-orange-500/40 sm:p-6"
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">
                    {app.label}
                  </span>

                  <span className="text-xs text-zinc-500">{app.status}</span>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={app.icon}
                    alt={`${app.name} logo`}
                    className="h-14 w-14 rounded-2xl border border-zinc-800 bg-zinc-900 object-cover"
                  />

                  <div>
                    <h4 className="text-xl font-semibold sm:text-2xl">
                      {app.name}
                    </h4>

                    <p className="text-xs text-zinc-500">{app.label}</p>
                  </div>
                </div>

                <p className="mt-4 min-h-20 text-sm leading-6 text-zinc-400 sm:min-h-24">
                  {app.description}
                </p>

                <a
                  href={app.url}
                  className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-medium transition ${
                    app.url === "#"
                      ? "border border-zinc-800 text-zinc-300 hover:border-orange-500/50 hover:text-orange-300"
                      : "bg-orange-500 text-black hover:bg-orange-400"
                  }`}
                >
                  {app.url === "#" ? "Coming Soon" : "Launch App"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 bg-[#07090c] px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Nexora Systems</p>
          <p>Built by Alexander Macke</p>
        </div>
      </footer>
    </main>
  );
}