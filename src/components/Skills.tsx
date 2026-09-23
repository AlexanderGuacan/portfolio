import { RiComputerLine } from 'react-icons/ri'
import { SkillCard } from './SkillCard'
import { VscDebugConnected } from 'react-icons/vsc'
import { GoDatabase } from 'react-icons/go'
import { LuSettings } from 'react-icons/lu'

export function Skills() {
  return (
    <div id="habilidades" className="px-6 py-16 border-b border-brand-border">
      <section className="space-y-12 max-w-7xl mx-auto">
        <header className="text-center lg:text-left space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Habilidades Técnicas
          </h2>
          <p className="text-zinc-400 max-w-2xl inline-block">
            Stack tecnológico y herramientas aplicadas al desarrollo de software
            profesional.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SkillCard
            icon={<RiComputerLine />}
            title="Frontend & Mobile"
            tools={[
              'React',
              'Next.js',
              'Tailwind CSS',
              'JavaScript / TypeScript',
              'HTML5 / CSS3',
            ]}
          />

          <SkillCard
            icon={<VscDebugConnected />}
            title="Backend & APIs"
            tools={[
              'Java / Spring Boot',
              'C# / .NET Core',
              'APIs RESTFul',
              'Integraciones (Payphone, Brevo, Twilio)',
              'Thymeleaf / OpenHTMLToPDF',
            ]}
          />

          <SkillCard
            icon={<GoDatabase />}
            title="Bases de Datos & Cloud"
            tools={[
              'PostgreSQL',
              'Supabase (Database & Storage)',
              'Render',
              'Vercel',
            ]}
          />

          <SkillCard
            icon={<LuSettings />}
            title="Herramientas & Prácticas"
            tools={[
              'Git / GitHub',
              'Postman / Swagger',
              'Arquitectura de Software',
              'Automatización de Procesos',
            ]}
          />
        </div>
      </section>
    </div>
  )
}
