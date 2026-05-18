interface PageShellProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function PageShell({
  title,
  subtitle,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm shadow-slate-200/40">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}
