import { apps } from "@/data/apps";

const utilities = apps.filter((app) => app.category === "Utilities");
const games = apps.filter((app) => app.category === "Games & Companions");

function AppCard({ app }: { app: (typeof apps)[number] }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-2xl shadow-black/20 transition hover:border-orange-500/40 sm:p-6">
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
          <h4 className="text-xl font-semibold sm:text-2xl">{app.name}</h4>
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
            ? "cursor-default border border-zinc-800 text-zinc-300"
            : "bg-orange-500 text-black hover:bg-orange-400"
        }`}
      >
        {app.url === "#" ? app.status : "Launch App"}
      </a>
    </div>
  );
}

function AppSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof apps;
}) {
  if (items.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="mb-6">
        <h4 className="text-2xl font-bold text-white">{title}</h4>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
          {subtitle}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}

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
              Nexora Systems creates focused digital tools and installable apps
              built to solve real-world problems with speed, simplicity, and
              precision.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apps"
                className="rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Explore Projects
              </a>

              <a
                href="https://discord.gg/zBDzjAd5a4"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-zinc-300 transition hover:border-orange-500/60 hover:text-orange-300"
              >
                Join Discord
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
          <div className="mb-2">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-orange-400 sm:text-sm sm:tracking-[0.3em]">
              Current Systems
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Apps in the Nexora lab
            </h3>
          </div>

          <AppSection
            title="Utilities"
            subtitle="Practical tools for security, planning, fabrication, workflows, and everyday problem solving."
            items={utilities}
          />

          <AppSection
            title="Games & Companions"
            subtitle="Game tools, companion apps, scoring systems, and experimental interactive projects."
            items={games}
          />
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#07090c] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-orange-400 sm:text-sm">
              Install As An App
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Add Nexora apps to your home screen
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              Nexora Systems apps are built as Progressive Web Apps, allowing
              them to install and run like normal apps on phones, tablets, and
              desktops.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5 sm:p-6">
              <h4 className="mb-3 text-lg font-semibold text-white">
                iPhone / iPad
              </h4>

              <ol className="space-y-3 text-sm leading-6 text-zinc-400">
                <li>1. Open the app in Safari</li>
                <li>2. Tap the Share button</li>
                <li>3. Select Add to Home Screen</li>
                <li>4. Launch it like a normal app</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5 sm:p-6">
              <h4 className="mb-3 text-lg font-semibold text-white">
                Android / Desktop
              </h4>

              <ol className="space-y-3 text-sm leading-6 text-zinc-400">
                <li>1. Open the app in Chrome or Edge</li>
                <li>2. Tap the Install or Menu button</li>
                <li>3. Select Install App</li>
                <li>4. Launch directly from your device</li>
              </ol>
            </div>
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