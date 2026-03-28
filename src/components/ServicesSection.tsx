export function ServicesSection() {
  return (
    <section
      className="py-24 sm:py-32 bg-background px-4 sm:px-6 md:px-8 relative overflow-hidden"
      id="servicos"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full blueprint-lines opacity-10 pointer-events-none"></div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-14 sm:mb-20 gap-8 border-l-4 border-orange-400 pl-6 sm:pl-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase block mb-4 text-xs">
              Expertise Técnica
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none mb-6">
              Nossas Soluções
            </h2>
            <p className="text-on-surface-variant max-w-lg text-base sm:text-lg">
              Combinamos rigor matemático e conformidade jurídica para viabilizar
              seu empreendimento com total segurança.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-slate-300 font-black text-8xl select-none opacity-20">
              PROJETUAL
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          <div className="md:col-span-8 group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <span className="material-symbols-outlined text-[20rem] font-thin">
                gavel
              </span>
            </div>
            <div className="relative z-10 p-8 sm:p-10 md:p-16 h-full flex flex-col">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-4xl">gavel</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-3xl sm:text-4xl font-black text-primary mb-6 tracking-tight">
                  Regularizações de Imóveis
                </h3>
                <p className="text-on-surface-variant text-base sm:text-lg max-w-xl leading-relaxed mb-8">
                  Apoio estratégico completo para desembaraço de imóveis junto a
                  prefeituras, cartórios e órgãos ambientais. Resolvemos
                  pendências documentais históricas com precisão técnica.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 uppercase">
                    Habite-se
                  </span>
                  <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 uppercase">
                    Desmembramento
                  </span>
                  <span className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 uppercase">
                    Retificação
                  </span>
                </div>
                <a
                  className="inline-flex items-center gap-3 mt-10 text-secondary font-bold hover:gap-5 transition-all group/link"
                  href="#contato"
                >
                  Saiba mais sobre regularização
                  <span className="material-symbols-outlined text-orange-400 group-hover/link:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group bg-primary rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative shadow-xl">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 text-white">
                <span className="material-symbols-outlined text-3xl">
                  architecture
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Projetos Arquitetônicos
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Arquitetura que respira funcionalidade. Desenvolvemos desde o
                conceito espacial até o detalhamento executivo.
              </p>
            </div>
            <a
              className="relative z-10 w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-center font-bold text-sm transition-colors border border-white/20"
              href="#contato"
            >
              Solicitar Orçamento
            </a>
          </div>

          <div className="md:col-span-4 group bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-8 text-secondary">
              <span className="material-symbols-outlined text-3xl">
                engineering
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Projetos Estruturais
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              O alicerce da sua segurança. Cálculos precisos e detalhamentos
              rigorosos em concreto, aço e alvenaria estrutural.
            </p>
            <a
              className="text-sm font-bold text-secondary flex items-center gap-2 group-hover:gap-4 transition-all"
              href="#contato"
            >
              Detalhes Técnicos
              <span className="material-symbols-outlined text-xs">east</span>
            </a>
          </div>

          <div className="md:col-span-5 group bg-surface-container-low rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 border border-slate-100">
            <div className="flex-1 relative z-10">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 text-red-600">
                <span className="material-symbols-outlined text-3xl">
                  fire_extinguisher
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                PPCI &amp; Segurança
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Proteção contra incêndio com aprovação garantida. Elaboração e
                renovação de APPCI junto ao Corpo de Bombeiros.
              </p>
              <a
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-container transition-colors shadow-lg shadow-primary/10"
                href="#contato"
              >
                Saiba Mais
              </a>
            </div>
            <div className="flex flex-col justify-center gap-4 relative z-10">
              <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-sm border border-white">
                <div className="text-2xl font-black text-secondary">100%</div>
                <div className="text-[10px] uppercase font-bold text-slate-500">
                  Aprovação
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-sm border border-white">
                <div className="text-2xl font-black text-secondary">+200</div>
                <div className="text-[10px] uppercase font-bold text-slate-500">
                  Projetos
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 group bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:border-orange-200 transition-colors">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-8 text-orange-500">
              <span className="material-symbols-outlined text-3xl">
                square_foot
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Lotes &amp; Glebas
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Unificações e desmembramentos urbanos com levantamento topográfico
              preciso.
            </p>
            <a
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-orange-400 group-hover:border-orange-400 group-hover:text-white transition-all"
              href="#contato"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

