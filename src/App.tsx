import heroImg from './assets/stitch/hero.png'
import portfolioBuildingImg from './assets/stitch/portfolio_building.png'
import portfolioOfficeImg from './assets/stitch/portfolio_office.png'
import portfolioResidenceImg from './assets/stitch/portfolio_residence.png'
import portfolioWarehouseImg from './assets/stitch/portfolio_warehouse.png'
import foundersImg from './assets/founders-placeholder.png'
import logoImg from './assets/projetual-logo.png'

const projects = [
  {
    title: 'Centro Empresarial Sigma',
    subtitle: 'Regularização e PPCI • 4.500m²',
    img: portfolioBuildingImg,
    alt: 'Edifício Corporativo',
    liftOnLg: false,
  },
  {
    title: 'Residência Vale do Sol',
    subtitle: 'Projeto Arquitetônico e Estrutural',
    img: portfolioResidenceImg,
    alt: 'Residência Moderna',
    liftOnLg: true,
  },
  {
    title: 'Complexo Logístico Norte',
    subtitle: 'Regularização Industrial e Elétrica',
    img: portfolioWarehouseImg,
    alt: 'Galpão Industrial',
    liftOnLg: false,
  },
  {
    title: 'Sede Inova Tech',
    subtitle: 'Reforma e Interiores',
    img: portfolioOfficeImg,
    alt: 'Reforma Escritório',
    liftOnLg: true,
  },
]

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none border-none">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto font-sans tracking-tight antialiased">
          <div className="flex items-center gap-2">
            <img
              alt="Projetual Engenharia Logo"
              className="h-10 w-auto object-contain"
              src={logoImg}
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-blue-900 dark:text-white font-semibold border-b-2 border-orange-400 pb-1"
              href="#"
            >
              Início
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              href="#servicos"
            >
              Áreas de Atuação
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              href="#obras"
            >
              Obras
            </a>
            <a
              className="text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
              href="#contato"
            >
              Contato
            </a>
          </div>

          <a
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-semibold tracking-tight hover:scale-[0.98] transition-transform"
            href="#contato"
          >
            Solicite um Orçamento
          </a>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Engenharia e Arquitetura"
            className="w-full h-full object-cover"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                architecture
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                Referência em Engenharia
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              ESCRITÓRIO DE ENGENHARIA ESPECIALIZADO EM REGULARIZAÇÕES
            </h1>
            <p className="text-xl text-on-primary-container max-w-xl leading-relaxed">
              Transformamos burocracia em viabilidade técnica. Soluções precisas
              para projetos residenciais, comerciais e industriais com rigor
              matemático e visão estratégica.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-tertiary-fixed-dim transition-colors"
                href="#contato"
              >
                Entre em Contato
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors"
                href="#servicos"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                alt="Fundadores da Projetual Engenharia"
                className="rounded-xl w-full h-auto"
                src={foundersImg}
              />
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-32 bg-background px-8 relative overflow-hidden"
        id="servicos"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full blueprint-lines opacity-10 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8 border-l-4 border-orange-400 pl-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase block mb-4 text-xs">
                Expertise Técnica
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none mb-6">
                Nossas Soluções
              </h2>
              <p className="text-on-surface-variant max-w-lg text-lg">
                Combinamos rigor matemático e conformidade jurídica para
                viabilizar seu empreendimento com total segurança.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-slate-300 font-black text-8xl select-none opacity-20">
                PROJETUAL
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="material-symbols-outlined text-[20rem] font-thin">
                  gavel
                </span>
              </div>
              <div className="relative z-10 p-10 md:p-16 h-full flex flex-col">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-4xl">
                    gavel
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-4xl font-black text-primary mb-6 tracking-tight">
                    Regularizações de Imóveis
                  </h3>
                  <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed mb-8">
                    Apoio estratégico completo para desembaraço de imóveis junto
                    a prefeituras, cartórios e órgãos ambientais. Resolvemos
                    pendências documentais históricas com precisão técnica.
                  </p>
                  <div className="flex flex-wrap gap-4">
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

            <div className="md:col-span-4 group bg-primary rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative shadow-xl">
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

            <div className="md:col-span-4 group bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:-translate-y-2 transition-all duration-300">
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

            <div className="md:col-span-5 group bg-surface-container-low rounded-3xl p-10 relative overflow-hidden flex flex-col md:flex-row gap-8 border border-slate-100">
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

            <div className="md:col-span-3 group bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:border-orange-200 transition-colors">
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

      <section className="py-24 bg-white px-8" id="obras">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="label-md text-secondary font-bold tracking-[0.2em] uppercase">
              Nosso Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mt-4">
              Projetos de Destaque
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <section className="bg-primary py-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10"></div>
        <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '500+', l: 'Obras Regularizadas' },
            { v: '1.2k', l: 'Projetos Entregues' },
            { v: '15', l: 'Anos de Mercado' },
            { v: '100%', l: 'Conformidade Técnica' },
          ].map((s) => (
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

      <section className="py-24 bg-surface-container-low px-8" id="contato">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="label-md text-secondary font-bold tracking-[0.2em] uppercase block mb-4">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none mb-8">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Nossa equipe técnica está pronta para analisar sua demanda e
              oferecer a melhor solução em engenharia e regularização.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h5 className="font-bold text-primary">Endereço</h5>
                  <p className="text-on-surface-variant">
                    Av. das Engenharias, 1024, Sala 502
                    <br />
                    Centro Tecnológico, Porto Alegre - RS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h5 className="font-bold text-primary">
                    Telefone &amp; WhatsApp
                  </h5>
                  <p className="text-on-surface-variant">
                    (51) 3245-8800
                    <br />
                    (51) 99876-5432
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h5 className="font-bold text-primary">E-mail</h5>
                  <p className="text-on-surface-variant">
                    contato@projetualengenharia.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <form
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Formulário de contato"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2"
                    htmlFor="name"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                    placeholder="Seu nome"
                    type="text"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                    placeholder="seu@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2"
                  htmlFor="topic"
                >
                  Assunto / Tipo de Serviço
                </label>
                <select
                  id="topic"
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none appearance-none"
                >
                  <option>Regularização de Imóvel</option>
                  <option>Projeto Arquitetônico</option>
                  <option>PPCI / Bombeiros</option>
                  <option>Reforma / Ampliação</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary/50 transition-all outline-none"
                  placeholder="Descreva brevemente sua necessidade"
                  rows={4}
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2">
                Enviar Solicitação
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-100 dark:bg-slate-900 border-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-screen-2xl mx-auto font-label text-sm font-medium tracking-wide uppercase">
          <div className="space-y-6">
            <img
              alt="Projetual Engenharia Logo"
              className="h-12 w-auto object-contain"
              src={logoImg}
            />
            <p className="text-slate-500 dark:text-slate-400 normal-case leading-relaxed max-w-xs">
              Engenharia com precisão técnica e compromisso com a regularidade.
              Há mais de 15 anos transformando projetos em realidade segura.
            </p>
          </div>
          <div className="space-y-6">
            <h6 className="text-blue-900 dark:text-blue-100 font-bold border-b-2 border-orange-400 w-fit pb-1">
              Navegação
            </h6>
            <div className="flex flex-col gap-3">
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="#"
              >
                Privacidade
              </a>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="#"
              >
                Termos de Uso
              </a>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                href="#"
              >
                FAQ
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-blue-900 dark:text-blue-100 font-bold border-b-2 border-orange-400 w-fit pb-1">
              Redes Sociais
            </h6>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
            </div>
            <p className="text-slate-400 normal-case pt-4">
              © 2024 Projetual Engenharia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <a
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[60]"
        href="https://wa.me/5551998765432"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.041-.54c.947.527 1.997.804 3.245.805 3.181 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.768-5.766-5.768zm0 10.455c-1.108 0-2.11-.318-2.956-.867l-.211-.137-1.22.323.328-1.226-.15-.243c-.562-.912-.858-1.921-.857-3.107 0-2.846 2.316-5.161 5.162-5.161 2.846 0 5.161 2.315 5.161 5.161-.001 2.846-2.317 5.161-5.161 5.161z"></path>
        </svg>
      </a>
    </div>
  )
}

