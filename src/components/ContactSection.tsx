export function ContactSection() {
  return (
    <section className="py-20 sm:py-24 bg-surface-container-low px-4 sm:px-6 md:px-8" id="contato">
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <span className="label-md text-secondary font-bold tracking-[0.2em] uppercase block mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none mb-8">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-12">
            Nossa equipe técnica está pronta para analisar sua demanda e oferecer
            a melhor solução em engenharia e regularização.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h5 className="font-bold text-primary">Endereço</h5>
                <p className="text-on-surface-variant">
                  Rua Maranhão, Arco-Íris
                  <br />
                  Panambi - RS
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h5 className="font-bold text-primary">Telefone &amp; WhatsApp</h5>
                <p className="text-on-surface-variant">
                  (55) 9 9907-6319
                  <br />
                  (55) 9 9953-2549
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
                  danieluiz.germano@icloud.com
                  <br />
                  mirian.graff@icloud.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm">
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
  )
}

