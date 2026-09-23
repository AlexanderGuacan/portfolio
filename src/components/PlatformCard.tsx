import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from 'react-icons/io5'
import { TiWorld } from 'react-icons/ti'

type PlatformType = 'web' | 'android' | 'ios'

interface Props {
  href: string
  platform: PlatformType
}

export function PlatformCard({ href, platform }: Props) {
  const icon: Record<PlatformType, React.ReactNode> = {
    web: <TiWorld />,
    android: <IoLogoGooglePlaystore />,
    ios: <IoLogoAppleAppstore />,
  }

  const subtitle: Record<PlatformType, string> = {
    web: 'Ver en vivo',
    android: 'Disponible en',
    ios: 'Consiguela en',
  }

  const title: Record<PlatformType, string> = {
    web: 'Sitio Web',
    android: 'Google Play',
    ios: 'App Store',
  }

  return (
    <a
      className="inline-flex gap-x-1 px-2 py-1.5 items-center bg-brand-dark text-white rounded-lg transition-all duration-300 hover:scale-105"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-xl sm:text-2xl">{icon[platform]}</span>
      <div className="inline-flex flex-col">
        <span className="text-zinc-400 font-medium tracking-tight uppercase text-[10px]">
          {subtitle[platform]}
        </span>
        <span className="font-semibold text-sm leading-tight text-white duration-300">
          {title[platform]}
        </span>
      </div>
    </a>
  )
}
