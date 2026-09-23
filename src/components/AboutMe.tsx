export function AboutMe() {
  return (
    <div id="sobre-mi" className="px-6 py-16 border-b border-brand-border">
      <section className="max-w-7xl mx-auto p-8 border border-brand-border bg-[#18181b] rounded-2xl space-y-6 bg-linear-to-r from-transparent to-red-900/10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Sobre Mí
        </h2>
        <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg border-b border-brand-border pb-6">
          <p>
            Soy <strong className="text-white">Ingeniero de Software</strong>{' '}
            con experiencia práctica construyendo aplicaciones desde cero para
            empresas, proyectos de investigación y clientes independientes.
          </p>
          <p>
            Mi enfoque principal es resolver problemas de negocio mediante
            soluciones digitales bien estructuradas: desde la automatización de
            procesos operativos hasta el desarollo de pasarelas de pago y
            notificaciones automatizadas.
          </p>
          <p>
            Me destaco por mi versatilidad en el ecosistema{' '}
            <strong className="text-white">Full Stack</strong>, manejando con
            fluidez tanto el desarrollo dinámico en el Frontend como la solidez
            en el Backend y bases de datos.
          </p>
        </div>

        <footer>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-400 text-center sm:text-left">
            <li className="">
              <p className="text-xl font-bold text-white">3+</p>
              <p>Proyectos Principales Completados</p>
            </li>
            <li className="">
              <p className="text-xl font-bold text-white">Full Stack</p>
              <p>Enfoque de Desarrollo</p>
            </li>
            <li className="">
              <p className="text-xl font-bold text-white">Ecuador</p>
              <p>Ubicación / Disponible Remoto</p>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  )
}
