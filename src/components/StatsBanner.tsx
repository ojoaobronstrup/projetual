export function StatsBanner() {
  const stats = [
    { v: '500+', l: 'Obras Regularizadas' },
    { v: '1.2k', l: 'Projetos Entregues' },
    { v: '15', l: 'Anos de Mercado' },
    { v: '100%', l: 'Conformidade Técnica' },
  ]

  return (
    <section className="bg-primary py-14 sm:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>
      <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              {s.v}
            </div>
            <div className="h-1 w-12 bg-tertiary-fixed mx-auto my-4"></div>
            <div className="text-xs text-on-primary-container uppercase font-bold tracking-widest">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

