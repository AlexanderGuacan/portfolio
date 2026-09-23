import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { IoMail } from 'react-icons/io5'
import CV from '../assets/docs/cv.pdf'

export function Hero() {
  return (
    <div
      id="inicio"
      className="min-h-screen h-screen pt-15 border-b border-brand-border"
    >
      <section className="max-w-7xl px-6 py-4 mx-auto flex flex-col justify-center gap-y-8 h-full">
        <header className="space-y-4">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hola, soy{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-red-500">
              Ingeniero de Sofware
            </span>{' '}
            & Desarrollador Full Stack
          </h2>

          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Especializado en la creación de aplicaciones web y móviles robustas
            de extremo a extremo. Combino interfaces dinámicas en{' '}
            <strong className="text-white">React y Next.js</strong> con
            arquitecturas de backend eficientes en{' '}
            <strong className="text-white">
              Spring Boot, .NET Core y PostgreSQL
            </strong>
            .
          </p>
        </header>

        <div className="flex gap-x-4 gap-y-2 items-center flex-wrap text-sm">
          <a
            className="inline-block px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-all"
            href="#proyectos"
          >
            Ver Proyectos
          </a>

          <a
            className="inline-block px-6 py-3.5 rounded-xl hover:bg-[#18181b] border border-brand-border text-zinc-300 hover:text-white font-semibold transition-all"
            href={CV}
            download="CV - Alexander Guacan.pdf"
          >
            Descargar CV
          </a>
        </div>

        <div className="flex items-center gap-x-6 text-zinc-400">
          <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
            Conecta Conmigo:
          </span>

          <a
            className="hover:text-red-500 transition-colors text-xl sm:text-2xl"
            href="https://www.linkedin.com/in/alexander-guacan/"
            target="_blank"
            title="LinkedIn"
          >
            <IoLogoLinkedin />
          </a>

          <a
            className="hover:text-red-500 transition-colors text-xl sm:text-2xl"
            href="https://github.com/AlexanderGuacan"
            target="_blank"
            title="GitHub"
          >
            <IoLogoGithub />
          </a>

          <a
            className="hover:text-red-500 transition-colors text-xl sm:text-2xl"
            href="mailto:adguacan2003@gmail.com"
            target="_blank"
            title="Correo electrónico"
          >
            <IoMail />
          </a>
        </div>
      </section>
    </div>
  )
}
