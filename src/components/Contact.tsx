import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { ContactForm } from './ContactForm'
import type { EmailRequest } from '../dto/email'
import { useEmail } from '../hooks/useEmail'

export function Contact() {
  const { success, error, send } = useEmail()

  const handleSubmit = async (dto: EmailRequest) => {
    await send(dto)
  }

  return (
    <div id="contacto" className="px-6 py-16">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <header className="space-y-4">
            <h2 className="text-3xl sm:text-4xl text-white font-extrabold">
              Contacto
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Estoy disponible para integrarme a equipos de desarrollo full
              stack, participar en proyectos freelance o discutir nuevas
              oportunidades laborales.
            </p>
          </header>

          <ul className="space-y-6">
            <li className="flex items-center gap-x-4">
              <span className="bg-[#18181b] border border-brand-border rounded-xl p-4 text-red-500 text-xl">
                <IoMailOutline />
              </span>
              <address className="not-italic">
                <p className="uppercase font-semibold text-xs text-zinc-500">
                  Correo Electrónico
                </p>
                <a
                  className="text-white hover:text-red-500 font-medium transition-colors"
                  href="mailto:adguacan2003@gmail.com"
                  target="_blank"
                >
                  adguacan2003@gmail.com
                </a>
              </address>
            </li>
            <li className="flex items-center gap-x-4">
              <span className="bg-[#18181b] border border-brand-border rounded-xl p-4 text-red-500 text-xl">
                <IoLocationOutline />
              </span>
              <div>
                <p className="uppercase font-semibold text-xs text-zinc-500">
                  Ubicación
                </p>
                <p className="text-white font-medium">
                  Ecuador (Disponible para trabajo remoto)
                </p>
              </div>
            </li>
          </ul>
        </div>

        <ContactForm
          success={success}
          error={error?.message ?? null}
          onSubmit={handleSubmit}
        />
      </section>
    </div>
  )
}
