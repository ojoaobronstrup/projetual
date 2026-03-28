import heroImg from './assets/stitch/hero.png'
import portfolioBuildingImg from './assets/stitch/portfolio_building.png'
import portfolioOfficeImg from './assets/stitch/portfolio_office.png'
import portfolioResidenceImg from './assets/stitch/portfolio_residence.png'
import portfolioWarehouseImg from './assets/stitch/portfolio_warehouse.png'
import foundersImg from './assets/founders-placeholder.png'
import logoImg from './assets/projetual-logo.png'
import whatsappIcon from './assets/whatsapp.png'

import { ContactSection } from './components/ContactSection'
import { Hero } from './components/Hero'
import { PortfolioSection, type ProjectCard } from './components/PortfolioSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteNav, type NavItem } from './components/SiteNav'
import { SiteFooter } from './components/SiteFooter'
import { StatsBanner } from './components/StatsBanner'
import { WhatsAppFab } from './components/WhatsAppFab'

const navItems: NavItem[] = [
  { label: 'Início', href: '#' },
  { label: 'Áreas de Atuação', href: '#servicos' },
  { label: 'Obras', href: '#obras' },
  { label: 'Contato', href: '#contato' },
]

const projects: ProjectCard[] = [
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
      <SiteNav
        logoSrc={logoImg}
        items={navItems}
        ctaLabel="Solicite um Orçamento"
        ctaHref="#contato"
      />

      <Hero heroImgSrc={heroImg} foundersImgSrc={foundersImg} />
      <ServicesSection />
      <PortfolioSection projects={projects} />
      <StatsBanner />
      <ContactSection />
      <SiteFooter logoSrc={logoImg} />
      <WhatsAppFab href="https://wa.me/5555999076319" iconSrc={whatsappIcon} />
    </div>
  )
}

