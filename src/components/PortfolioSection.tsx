export type ProjectCard = {
  title: string
  subtitle: string
  img: string
  alt: string
  liftOnLg?: boolean
}

type Props = {
  projects: ProjectCard[]
}

export function PortfolioSection({ projects }: Props) {
  return (
    <section className="py-20 sm:py-24 bg-white px-4 sm:px-6 md:px-8" id="obras">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="label-md text-secondary font-bold tracking-[0.2em] uppercase">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tighter mt-4">
            Projetos de Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className={[
                'group cursor-pointer',
                p.liftOnLg ? 'lg:mt-12' : '',
              ].join(' ')}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 relative">
                <img
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={p.img}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full">
                    Ver Detalhes
                  </span>
                </div>
              </div>
              <h4 className="text-lg font-bold text-primary">{p.title}</h4>
              <p className="text-sm text-on-surface-variant">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

