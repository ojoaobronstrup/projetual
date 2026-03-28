import { useEffect, useId, useState } from 'react'

export type NavItem = {
  label: string
  href: string
}

type Props = {
  logoSrc: string
  logoAlt?: string
  items: NavItem[]
  ctaLabel: string
  ctaHref: string
}

export function SiteNav({
  logoSrc,
  logoAlt = 'Projetual Engenharia Logo',
  items,
  ctaLabel,
  ctaHref,
}: Props) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    // Prevent background scroll while the mobile menu is open.
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none border-none">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 max-w-screen-2xl mx-auto font-sans tracking-tight antialiased">
          <a className="flex items-center gap-2" href="#" aria-label="Ir para o início">
            <img
              alt={logoAlt}
              className="h-9 sm:h-10 w-auto object-contain"
              src={logoSrc}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {items.map((it, idx) => (
              <a
                key={it.href}
                className={
                  idx === 0
                    ? 'text-blue-900 dark:text-white font-semibold border-b-2 border-orange-400 pb-1'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors'
                }
                href={it.href}
              >
                {it.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
              aria-controls={panelId}
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="material-symbols-outlined text-primary">
                {open ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />

          <div
            id={panelId}
            className="absolute left-3 right-3 top-[72px] sm:top-[80px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="px-5 py-4">
              <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-slate-500">
                Navegação
              </div>
            </div>

            <div className="px-3 pb-3">
              {items.map((it) => (
                <a
                  key={it.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-primary font-semibold hover:bg-surface-container-low transition-colors"
                  href={it.href}
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                  <span className="material-symbols-outlined text-slate-400">
                    chevron_right
                  </span>
                </a>
              ))}
            </div>

            <div className="px-6 pb-6">
              <a
                className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3.5 rounded-xl font-bold tracking-tight inline-flex items-center justify-center"
                href={ctaHref}
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

