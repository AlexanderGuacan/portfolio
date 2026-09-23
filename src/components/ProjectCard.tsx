import { IoCheckmark } from 'react-icons/io5'
import { PlatformCard } from './PlatformCard'

interface Props {
  preview: {
    img: string
    alt: string
  }
  tag: string
  startDate: Date
  endDate: Date
  title: string
  description: string
  achievements: (string | React.ReactNode)[]
  technologies: string[]
  urls?: {
    web?: string
    android?: string
    ios?: string
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('es-EC', {
    year: 'numeric',
    month: 'short',
  })
}

export function ProjectCard({
  preview,
  tag,
  startDate,
  endDate,
  title,
  description,
  achievements,
  technologies,
  urls,
}: Props) {
  return (
    <article
      className="bg-[#18181b] rounded-2xl border border-brand-border hover:border-red-500/50 
          transition-all duration-300 group overflow-hidden grid lg:grid-cols-[0.6fr_1fr]"
    >
      <header className="bg-linear-to-r from-red-600/10 to-transparent flex flex-col justify-center items-center p-4 lg:p-6">
        <figure className="rounded-lg overflow-hidden max-h-60 lg:max-h-80 group-hover:scale-105 transition-transform duration-300">
          <img
            className="object-contain h-full w-full"
            src={preview.img}
            alt={preview.alt}
          />
        </figure>
      </header>

      <div className="space-y-6 border-t lg:border-t-0 lg:border-l border-brand-border group-hover:border-red-500/50 transition-all duration-300 p-4 lg:p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="badge badge--red text-xs">{tag}</span>

            <p className="text-xs text-zinc-500 capitalize">
              <time dateTime={startDate.toISOString()}>
                {formatDate(startDate)}
              </time>
              {' - '}
              <time dateTime={endDate.toISOString()}>
                {formatDate(endDate)}
              </time>
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
            {title}
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>

        <ul className="flex flex-col gap-y-2 text-xs sm:text-sm text-zinc-300">
          {achievements.map((achievement, index) => (
            <li className="flex items-start gap-x-2" key={index}>
              <span className="text-red-500 mt-0.5">
                <IoCheckmark />
              </span>
              {achievement}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap items-center gap-2">
          {technologies.map((technology, index) => (
            <li key={index} className="text-xs">
              <span className="badge">{technology}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-4">
          {urls?.web && (
            <li>
              <PlatformCard href={urls.web} platform="web" />
            </li>
          )}
          {urls?.android && (
            <li>
              <PlatformCard href={urls.android} platform="android" />
            </li>
          )}
          {urls?.ios && (
            <li>
              <PlatformCard href={urls.ios} platform="ios" />
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}
