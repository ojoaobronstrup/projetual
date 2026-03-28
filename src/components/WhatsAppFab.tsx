type Props = {
  href: string
  iconSrc: string
}

export function WhatsAppFab({ href, iconSrc }: Props) {
  return (
    <a
      className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[60]"
      href={href}
      aria-label="WhatsApp"
    >
      <img src={iconSrc} alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  )
}

