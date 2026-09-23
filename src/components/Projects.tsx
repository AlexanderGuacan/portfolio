import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <div id="proyectos" className="px-6 py-16 border-b border-brand-border">
      <section className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Proyectos Destacados
          </h2>
          <p className="inline-block text-zinc-400 max-w-2xl">
            Soluciones reales desarrolladas en contextos freelance, de
            investigación académica y pasantías profesionales.
          </p>
        </header>

        <div className="space-y-12">
          <ProjectCard
            preview={{
              img: '/projects/ideart-proformas.png',
              alt: 'Renderizado de Proformas en formato PDF',
            }}
            tag="Freelance"
            title="Digitalización de Procesos & Proformas"
            startDate={new Date(2026, 6, 1)}
            endDate={new Date(2026, 8, 10)}
            description="Diseñé e implementé una solución web a medida para la gestión de proformas, reemplazando un proceso manual basado en plantillas Excel para optimizar tiempos y eliminar errores humanos."
            achievements={[
              <p>
                Servicios Backend en <strong>Spring Boot</strong> con
                integración de <strong>OpenHTMLPDF</strong> y{' '}
                <strong>Thymeleaf</strong> para generación dinámica de PDFs.
              </p>,
              <p>
                Interfaz web moderna con <strong>React</strong> y{' '}
                <strong>Tailwind CSS</strong>, garantizando alta usabilidad.
              </p>,
              <p>
                Persistencia en <strong>PostgreSQL (Supabase)</strong> y
                despliegue continuo en <strong>Render</strong> y{' '}
                <strong>Vercel</strong>
              </p>,
            ]}
            technologies={[
              'Spring Boot',
              'React',
              'Tailwind CSS',
              'PostgreSQL',
              'Supabase',
              'Render / Vercel',
            ]}
          />

          <ProjectCard
            preview={{
              img: '/projects/sigchos-booking.png',
              alt: 'Landing page de plataforma de reservas (Sigchos)',
            }}
            tag="Proyecto de Tesis"
            title="Plataforma Web de Reservas Turísticas"
            startDate={new Date(2026, 3, 1)}
            endDate={new Date(2026, 7, 4)}
            description="Solución integral enfocada en el cantón Sigchos para la digitalización, disponibilidad en tiempo real y gestión automatizada de reservas turísticas."
            achievements={[
              <p>
                Arquitectura Full Stack con <strong>Spring Boot</strong> en el
                Backend y <strong>Next.js</strong> para el portal web dinámico.
              </p>,
              <p>
                Pasarela de pagos en línea segura mediante{' '}
                <strong>Payphone</strong> y correos transaccionales automáticos
                con <strong>Brevo API</strong>.
              </p>,
              <p>
                Gestión de catálogo multimedia con{' '}
                <strong>Supabase Storage</strong> y base de datos relacional{' '}
                <strong>PostgreSQL</strong>.
              </p>,
            ]}
            technologies={[
              'Spring Boot',
              'Next.js',
              'Payphone API',
              'PostgreSQL',
              'Supabase',
              'Render / Vercel',
            ]}
          />

          <ProjectCard
            preview={{
              img: '/projects/petclub.jpeg',
              alt: 'Página principal de PetClub App.',
            }}
            tag="Pasantías"
            title="Aplicación Móvil & Back Office Administrable"
            startDate={new Date(2024, 10, 1)}
            endDate={new Date(2025, 4, 28)}
            description="Desarollé módulos clave para la experiencia del usuario móvil y contribuí al sistema administrativo centralizado de la plataforma."
            achievements={[
              <p>
                Desarrollo de módulos en <strong>React Native</strong> para
                flujo completo de usuario (direcciones de compra, administración
                de tarjetas de crédito y procesos de compra).
              </p>,
              <p>
                Lógica de puntos de fidelidad en <strong>.NET Core</strong> e
                integración de notificaciones por WhatsApp vía{' '}
                <strong>Twilio API</strong>.
              </p>,
              <p>
                Colaboración en la construcción del panel administrativo con{' '}
                <strong>Next.js</strong>.
              </p>,
            ]}
            technologies={[
              'React Native',
              '.NET Core',
              'Next.js',
              'Twilio API (WhatsApp)',
            ]}
          />
        </div>
      </section>
    </div>
  )
}
