
export default function Home() {
  return (
    <div className="min-h-screen bg-ui-background p-4 sm:p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-brand-primary font-bold text-3xl">SportApp</div>
          <div className="flex gap-4 items-center">
            <button className="flex items-center gap-2 text-text-secondary hover:text-text-primary">
              <span className="w-5 h-5 bg-text-secondary/20 rounded-full"></span>
              Leaderboard
            </button>
            <button className="px-4 py-2 border border-ui-divider rounded-full bg-ui-card text-text-primary hover:bg-ui-header transition-colors">
              Login / Sign up
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">

      </main>

    </div>
  );
}